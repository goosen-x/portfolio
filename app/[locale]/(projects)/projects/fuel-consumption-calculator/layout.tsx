import { generateWidgetMetadata } from '@/lib/seo/generate-widget-metadata'
import { WidgetSchema } from '@/components/seo/WidgetSchema'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return generateWidgetMetadata('fuel-consumption-calculator', locale as 'en' | 'ru' | 'he')
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
  const url = `${BASE_URL}/${locale}/projects/fuel-consumption-calculator`
  
  return (
    <>
      <WidgetSchema
        name="Fuel Consumption Calculator"
        description="Calculate fuel consumption, trip costs, and CO₂ emissions with support for different units and currencies"
        url={url}
      />
      {children}
    </>
  )
}