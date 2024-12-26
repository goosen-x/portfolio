import '../globals.css'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Footer, Header } from '@/components/layout'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import { tekturFont } from '@/lib/fonts/fonts'
import { getMetadataByLocale } from '@/lib/meta/getMetadata'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { dev } from '@/lib/config/env'

// todo add metadata

// todo http://localhost:3000/rufd (not found)

export default async function RootLayout({
	children,
	params
}: Readonly<{
	children: React.ReactNode
	params: { locale: string }
}>) {
	const locale = (await params).locale
	if (!routing.locales.includes(locale as any)) notFound()
	const messages = await getMessages()

	if (!dev) console.log = () => undefined

	return (
		<html
			lang={locale}
			className='scroll-smooth scroll-pt-24 transition-colors duration-300 ease-in-out'
			suppressHydrationWarning
		>
			<NextIntlClientProvider messages={messages}>
				<body
					className={cn(
						'min-h-screen bg-background font-sans antialiased',
						tekturFont.className
					)}
				>
					<Header locale={locale} />
					<main className='min-h-screen w-full'>{children}</main>
					<Footer />
				</body>
			</NextIntlClientProvider>
		</html>
	)
}
