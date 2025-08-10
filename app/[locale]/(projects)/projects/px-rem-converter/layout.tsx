import { generateWidgetMetadata } from '@/lib/seo/generate-widget-metadata'
import { WidgetSchema } from '@/components/seo/WidgetSchema'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return generateWidgetMetadata('px-rem-converter', locale as 'en' | 'ru' | 'he')
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
  const url = `${BASE_URL}/${locale}/projects/px-rem-converter`
  
  return (
    <>
      <WidgetSchema
        name="PX to REM Converter"
        description="Convert pixels to rem units and vice versa with customizable base font size for responsive web design"
        url={url}
      />
      {children}
    </>
  )
}