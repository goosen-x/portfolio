import { generateWidgetMetadata } from '@/lib/seo/generate-widget-metadata'
import { WidgetSchema } from '@/components/seo/WidgetSchema'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return generateWidgetMetadata('speed-test', locale as 'en' | 'ru')
}

export default async function Layout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio.vercel.app'
  const url = `${BASE_URL}/${locale}/projects/speed-test`
  
  return (
    <>
      <WidgetSchema
        name="Speed Test"
        description="Free online tool for developers and designers."
        url={url}
      />
      {children}
    </>
  )
}