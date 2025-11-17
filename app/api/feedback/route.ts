import { NextRequest, NextResponse } from 'next/server'

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
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'),
      url: request.headers.get('referer'),
    }

    // Send to Telegram
    await sendToTelegram(feedbackData)

    return NextResponse.json(
      { 
        message: 'Feedback submitted successfully',
        id: Date.now().toString() // In production, use proper ID generation
      },
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

  const message = `
${typeEmoji[data.type as keyof typeof typeEmoji]} <b>New ${data.type.toUpperCase()} Feedback</b>

<b>Title:</b> ${data.title}

<b>Description:</b>
${data.description}

${data.email ? `<b>Email:</b> ${data.email}` : ''}
${data.widget ? `<b>Widget:</b> ${data.widget}` : ''}
${data.url ? `<b>URL:</b> ${data.url}` : ''}
<b>User Agent:</b> ${data.userAgent || 'Unknown'}
<b>Time:</b> ${new Date(data.timestamp).toLocaleString()}
  `.trim()

  const response = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
      }),
    }
  )

  if (!response.ok) {
    throw new Error(`Telegram API error: ${response.statusText}`)
  }

  return response.json()
}