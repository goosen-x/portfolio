import { generateWidgetMetadata } from '@/lib/seo/generate-widget-metadata'
import { WidgetSchema } from '@/components/seo/WidgetSchema'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return generateWidgetMetadata('javascript-syntax-checker', locale as 'en' | 'ru' | 'he')
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
  const url = `${BASE_URL}/${locale}/projects/javascript-syntax-checker`
  
  return (
    <>
      <WidgetSchema
        name="JavaScript Syntax Checker"
        description="Validate JavaScript, ES6+, and JSX syntax with detailed error reporting and code analysis"
        url={url}
      />
      {children}
    </>
  )
}