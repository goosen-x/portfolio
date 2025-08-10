import { generateWidgetMetadata } from '@/lib/seo/generate-widget-metadata'
import { WidgetSchema } from '@/components/seo/WidgetSchema'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return generateWidgetMetadata('seo-markdown-generator', locale as 'en' | 'ru')
}

export default async function SEOMarkdownGeneratorLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio.vercel.app'
  const url = `${BASE_URL}/${locale}/projects/seo-markdown-generator`
  
  return (
    <>
      <WidgetSchema
        name="SEO Markdown Generator"
        description="Free online SEO-optimized markdown generator for blog posts. Create structured content with metadata."
        url={url}
      />
      {children}
    </>
  )
}