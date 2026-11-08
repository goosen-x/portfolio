import { NextRequest, NextResponse } from 'next/server'
import { telegramFetch } from '@/lib/telegram/proxy-fetch'
import { sendLead } from '@/lib/lead-message'

interface ContactRequest {
	name: string
	email: string
	subject: string
	message: string
	attribution?: unknown
}

// Заявки со всех сайтов GooseLabs идут в один бот лидов
// (TELEGRAM_LEADS_BOT_TOKEN/TELEGRAM_LEADS_CHAT_ID), формат общий: lib/lead-message.ts.
// Отзывы (app/api/feedback) идут в общий бот уведомлений.
async function sendToTelegram(data: ContactRequest) {
	const sent = await sendLead(
		{
			site: 'portfolio.gooselabs.ru',
			siteTag: 'portfolio',
			form: 'Контакты',
			formTag: 'contact',
			fields: [
				['Имя', data.name],
				['Email', data.email],
				['Тема', data.subject],
				['Сообщение', data.message]
			],
			attribution: data.attribution
		},
		telegramFetch
	)
	if (!sent) throw new Error('Заявка не доставлена в бот лидов')
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
				success: true
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
