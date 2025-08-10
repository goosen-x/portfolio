import { generateWidgetMetadata } from '@/lib/seo/generate-widget-metadata'
import { WidgetSchema } from '@/components/seo/WidgetSchema'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return generateWidgetMetadata('css-clamp-calculator', locale as 'en' | 'ru')
}

export default async function ClampCalculatorLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio.vercel.app'
  const url = `${BASE_URL}/${locale}/projects/clamp-calculator`
  
  return (
    <>
      <WidgetSchema
        name="CSS Clamp Calculator"
        description="Free online CSS clamp() calculator. Create fluid responsive typography and spacing."
        url={url}
      />
      {children}
    </>
  )
}