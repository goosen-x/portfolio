import { generateWidgetMetadata } from '@/lib/seo/generate-widget-metadata'
import { WidgetSchema } from '@/components/seo/WidgetSchema'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return generateWidgetMetadata('php-syntax-checker', locale as 'en' | 'ru')
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
  const url = `${BASE_URL}/${locale}/projects/php-syntax-checker`
  
  return (
    <>
      <WidgetSchema
        name="PHP Syntax Checker"
        description="Validate PHP code syntax, check for errors, and get detailed error reporting with line numbers"
        url={url}
      />
      {children}
    </>
  )
}