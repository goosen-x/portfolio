import { generateWidgetMetadata } from '@/lib/seo/generate-widget-metadata'
import { WidgetSchema } from '@/components/seo/WidgetSchema'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return generateWidgetMetadata('team-randomizer', locale as 'en' | 'ru')
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
  const url = `${BASE_URL}/${locale}/projects/team-randomizer`
  
  return (
    <>
      <WidgetSchema
        name="Team Randomizer"
        description="Free online tool for creating random teams quickly and fairly."
        url={url}
      />
      {children}
    </>
  )
}