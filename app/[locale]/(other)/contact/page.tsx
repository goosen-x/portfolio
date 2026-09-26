import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { ContactCta } from '@/components/contact/ContactCta'
import ContactInfo from '@/components/contact/ContactInfo'
import { buildAlternates } from '@/lib/seo/alternates'

type Props = {
	params: Promise<{
		locale: string
	}>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params
	const t = await getTranslations({ locale, namespace: 'contact' })

	return {
		title: `${t('title')} | Dmitry Borisenko`,
		description: t('subtitle'),
		alternates: buildAlternates('/contact', locale)
	}
}

export default async function ContactPage(props: Props) {
	const params = await props.params
	const t = await getTranslations('contact')
	
	return (
		<main className='min-h-screen bg-background'>
			<div className='max-w-7xl mx-auto px-5 py-12'>
				{/* Header */}
				<div className='text-center mb-16'>
					<h1 className='text-4xl md:text-6xl font-bold text-foreground mb-4'>
						{t('title')}
					</h1>
					<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
						{t('subtitle')}
					</p>
				</div>

				<ContactCta title={t('form.title')} text={t('form.description')} aside={<ContactInfo locale={params.locale} />} />
			</div>
		</main>
	)
}