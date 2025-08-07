import { Footer, Header } from '@/components/layout'
import { ReactNode } from 'react'

type Props = {
	children: ReactNode
	params: Promise<{ locale: string }>
}

export default async function MainLayout({ children, params }: Props) {
	const locale = (await params).locale

	return (
		<main className='min-h-screen w-full'>
			<Header locale={locale} />
			{children}
			<Footer />
		</main>
	)
}
