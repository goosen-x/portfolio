import { generateWidgetMetadata } from '@/lib/seo/generate-widget-metadata'
import { WidgetSchema } from '@/components/seo/WidgetSchema'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return generateWidgetMetadata('uuid-generator', locale as 'en' | 'ru' | 'he')
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
  const url = `${BASE_URL}/${locale}/projects/uuid-generator`
  
  return (
    <>
      <WidgetSchema
        name="UUID Generator"
        description="Generate universally unique identifiers (UUID) with multiple versions and formats support"
        url={url}
      />
      {children}
    </>
  )
}