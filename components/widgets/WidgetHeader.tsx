'use client'

import { useTranslations } from 'next-intl'
import { getWidgetById } from '@/lib/constants/widgets'

interface WidgetHeaderProps {
  widgetId: string
}

export function WidgetHeader({ widgetId }: WidgetHeaderProps) {
  const t = useTranslations('widgets')
  const widget = getWidgetById(widgetId)
  
  if (!widget) return null
  
  const Icon = widget.icon
  
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${widget.gradient} flex items-center justify-center text-white`}>
          <Icon className="w-6 h-6" />
        </div>
        <h1 className="text-4xl font-bold">{t(`${widget.translationKey}.title`)}</h1>
      </div>
      <p className="text-xl text-muted-foreground">{t(`${widget.translationKey}.description`)}</p>
    </div>
  )
}