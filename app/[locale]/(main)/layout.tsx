import BreadcrumbHeader from '@/components/global/BreadcrumbHeader'
import { Footer } from '@/components/layout'
import { ReactNode } from 'react'
import { tekturFont } from '@/lib/fonts/fonts'

type Props = {
	children: ReactNode
	params: Promise<{ locale: string }>
}

export default async function MainLayout({ children, params }: Props) {
	const locale = (await params).locale

	return (
		<main className={`min-h-screen w-full ${tekturFont.className}`} data-force-font="tektur">
			<BreadcrumbHeader />
			{children}
			<Footer />
		</main>
	)
}
