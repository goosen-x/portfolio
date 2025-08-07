import BlogHeader from '@/components/blog/header'
import { Footer } from '@/components/layout'
import { ReactNode } from 'react'

type Props = {
	children: ReactNode
	params: Promise<{ locale: string }>
}

export default async function OtherLayout({ children, params }: Props) {
	const locale = (await params).locale

	return (
		<main className='min-h-screen w-full'>
			<BlogHeader />
			{children}
			<Footer />
		</main>
	)
}
