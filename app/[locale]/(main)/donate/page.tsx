import { Metadata } from 'next'
import { CryptoDonation } from '@/components/global'
import { useTranslations } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { buildAlternates } from '@/lib/seo/alternates'

export async function generateMetadata({
	params
}: {
	params: Promise<{ locale: string }>
}): Promise<Metadata> {
	const { locale } = await params
	const t = await getTranslations({ locale, namespace: 'CryptoDonation' })

	return {
		title: `${t('title')} | Dmitry Borisenko`,
		description: t('metaDescription'),
		alternates: buildAlternates('/donate', locale)
	}
}

export default async function DonatePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <CryptoDonation />
    </div>
  )
}