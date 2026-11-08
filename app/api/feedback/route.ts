import { NextRequest, NextResponse } from 'next/server'
import { telegramFetch } from '@/lib/telegram/proxy-fetch'
import { markSiteMessageSent, saveSiteMessage } from '@/lib/lead-store'

interface FeedbackRequest {
	type: 'bug' | 'feature' | 'general'
	title: string
	description: string
	email?: string
	widget?: string
	userAgent?: string
	url?: string
}

export async function POST(request: NextRequest) {
	try {
		const body: FeedbackRequest = await request.json()

		// Basic validation
		if (!body.title || !body.description || !body.type) {
			return NextResponse.json(
				{ error: 'Missing required fields: title, description, type' },
				{ status: 400 }
			)
		}

		// Add metadata
		const feedbackData = {
			...body,
			timestamp: new Date().toISOString(),
			userAgent: request.headers.get('user-agent'),
			ip:
				request.headers.get('x-forwarded-for') ||
				request.headers.get('x-real-ip'),
			url: request.headers.get('referer')
		}

		// Сначала общая база (site_messages), Telegram поверх: если бот
		// недоступен, отзыв всё равно не теряется.
		const id = await saveSiteMessage({
			site: 'portfolio.gooselabs.ru',
			source: 'feedback',
			type: body.type,
			email: body.email,
			subject: body.title,
			message: body.description,
			meta: {
				widget: body.widget,
				url: feedbackData.url,
				userAgent: feedbackData.userAgent
			}
		})

		let sent = false
		try {
			await sendToTelegram(feedbackData)
			sent = true
			if (id) await markSiteMessageSent(id)
		} catch (telegramError) {
			console.error('Отзыв не доставлен в Telegram:', telegramError)
		}

		if (!sent && id === null) {
			return NextResponse.json(
				{ error: 'Internal server error' },
				{ status: 500 }
			)
		}

		return NextResponse.json(
			{ message: 'Feedback submitted successfully', id },
			{ status: 200 }
		)
	} catch (error) {
		console.error('Error processing feedback:', error)
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 }
		)
	}
}

// Send feedback to Telegram
async function sendToTelegram(data: any) {
	const botToken = process.env.TELEGRAM_BOT_TOKEN
	const chatId = process.env.TELEGRAM_CHAT_ID

	if (!botToken || !chatId) {
		console.error('Telegram credentials not configured')
		throw new Error('Telegram integration not configured')
	}

	const typeEmoji = {
		bug: '🐛',
		feature: '✨',
		general: '💬'
	}

	const esc = (value: unknown) =>
		String(value ?? '')
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')

	// Общий бот уведомлений для всех проектов: хэштеги показывают, откуда сообщение.
	const message = `
#feedback #portfolio #${esc(data.type)}
${typeEmoji[data.type as keyof typeof typeEmoji] ?? '📝'} <b>Отзыв: ${esc(data.type).toUpperCase()}</b>

<b>Заголовок:</b> ${esc(data.title)}

<b>Описание:</b>
${esc(data.description)}

${data.email ? `<b>Email:</b> ${esc(data.email)}` : ''}
${data.widget ? `<b>Виджет:</b> ${esc(data.widget)}` : ''}
${data.url ? `<b>Страница:</b> ${esc(data.url)}` : ''}
<b>Браузер:</b> ${esc(String(data.userAgent || 'нет данных').slice(0, 120))}
<b>Время:</b> ${esc(new Date(data.timestamp).toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' }))} МСК
  `.trim()

	const response = await telegramFetch(
		`https://api.telegram.org/bot${botToken}/sendMessage`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				chat_id: chatId,
				text: message,
				parse_mode: 'HTML'
			})
		}
	)

	if (!response.ok) {
		throw new Error(`Telegram API error: ${response.statusText}`)
	}

	return response.json()
}
