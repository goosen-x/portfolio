import { NextRequest, NextResponse } from 'next/server'

interface ContactRequest {
	name: string
	email: string
	subject: string
	message: string
}

async function sendToTelegram(data: ContactRequest) {
	const botToken = process.env.TELEGRAM_BOT_TOKEN
	const chatId = process.env.TELEGRAM_CHAT_ID

	if (!botToken || !chatId) {
		console.error('Telegram credentials not configured')
		throw new Error('Telegram configuration missing')
	}

	const text = `
🔔 <b>Новое сообщение с сайта</b>

👤 <b>Имя:</b> ${data.name}
📧 <b>Email:</b> ${data.email}
📝 <b>Тема:</b> ${data.subject}

💬 <b>Сообщение:</b>
${data.message}

⏰ <b>Время:</b> ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}
	`.trim()

	const url = `https://api.telegram.org/bot${botToken}/sendMessage`

	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			chat_id: chatId,
			text: text,
			parse_mode: 'HTML',
		}),
	})

	if (!response.ok) {
		const error = await response.text()
		console.error('Telegram API error:', error)
		throw new Error('Failed to send message to Telegram')
	}

	return await response.json()
}

export async function POST(request: NextRequest) {
	try {
		const body: ContactRequest = await request.json()

		// Basic validation
		if (!body.name || !body.email || !body.subject || !body.message) {
			return NextResponse.json(
				{ error: 'Все поля обязательны для заполнения' },
				{ status: 400 }
			)
		}

		// Validate email format
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		if (!emailRegex.test(body.email)) {
			return NextResponse.json(
				{ error: 'Некорректный формат email' },
				{ status: 400 }
			)
		}

		// Send to Telegram
		await sendToTelegram(body)

		return NextResponse.json(
			{
				message: 'Сообщение успешно отправлено',
				success: true,
			},
			{ status: 200 }
		)
	} catch (error) {
		console.error('Error processing contact form:', error)
		return NextResponse.json(
			{ error: 'Ошибка при отправке сообщения. Попробуйте позже.' },
			{ status: 500 }
		)
	}
}
