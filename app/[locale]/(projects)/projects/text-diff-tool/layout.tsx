import { generateWidgetMetadata } from '@/lib/seo/generate-widget-metadata'
import { WidgetSchema } from '@/components/seo/WidgetSchema'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return generateWidgetMetadata('text-diff', locale as 'en' | 'ru')
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
  const url = `${BASE_URL}/${locale}/projects/text-diff-tool`
  
  return (
    <>
      <WidgetSchema
        name="Text Diff Tool"
        description="Compare two texts and highlight differences with detailed analysis and side-by-side comparison"
        url={url}
      />
      {children}
    </>
  )
}