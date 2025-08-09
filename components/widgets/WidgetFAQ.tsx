'use client'

import { useLocale } from 'next-intl'
import { getWidgetFAQs } from '@/lib/constants/widgets'
import { FAQ } from '@/components/seo/FAQ'

interface WidgetFAQProps {
  widgetId: string
}

export function WidgetFAQ({ widgetId }: WidgetFAQProps) {
  const locale = useLocale() as 'en' | 'ru' | 'he'
  const faqs = getWidgetFAQs(widgetId, locale)
  
  if (faqs.length === 0) {
    return null
  }
  
  const title = locale === 'ru' ? 'Часто задаваемые вопросы' : 
                locale === 'he' ? 'שאלות נפוצות' : 
                'Frequently Asked Questions'
  
  return <FAQ items={faqs} title={title} />
}