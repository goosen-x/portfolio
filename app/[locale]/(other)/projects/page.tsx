import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { buildAlternates } from '@/lib/seo/alternates'
import { ProjectsBento } from '@/components/homepage/SectionProjects/widgets/ProjectsBento'
import { SITE_URL } from '@/lib/constants/site'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params
	const t = await getTranslations({ locale, namespace: 'ProjectPages' })
	const title = `${t('title')} | Dmitry Borisenko`
	return {
		title, description: t('description'), alternates: buildAlternates('/projects', locale),
		openGraph: { title, description: t('description'), url: `${SITE_URL}/${locale}/projects`, images: ['/images/mba-preview.png'] }
	}
}

export default async function ProjectsPage({ params }: Props) {
	const { locale } = await params
	const t = await getTranslations({ locale, namespace: 'ProjectPages' })
	return <main className='mx-auto max-w-7xl px-5 py-12'>
		<header className='mb-12 max-w-3xl'>
			<p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary'>{t('eyebrow')}</p>
			<h1 className='mb-4 text-4xl font-bold sm:text-5xl'>{t('title')}</h1>
			<p className='text-lg text-muted-foreground'>{t('description')}</p>
		</header>
		<section aria-label={t('title')}>
			<ProjectsBento locale={locale} />
		</section>
	</main>
}
