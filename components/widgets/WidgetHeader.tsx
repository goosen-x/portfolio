'use client'

import { useTranslations } from 'next-intl'
import { getWidgetById } from '@/lib/constants/widgets'
import { cn } from '@/lib/utils'

interface WidgetHeaderProps {
	widgetId: string
}

export function WidgetHeader({ widgetId }: WidgetHeaderProps) {
	const t = useTranslations('widgets')
	const widget = getWidgetById(widgetId)

	if (!widget) return null

	const Icon = widget.icon

	return (
		<div className='mb-8'>
			<div className='flex gap-4'>
				<div
					className={cn(
						`w-18 h-18 rounded-lg bg-gradient-to-br flex items-center justify-center text-white`,
						widget.gradient
					)}
				>
					<Icon className='w-10 h-10' />
				</div>
				<div className='flex flex-col gap-2 mb-4 '>
					<h1 className='text-4xl font-bold'>
						{t(`${widget.translationKey}.title`)}
					</h1>
					<p className='text-xl text-muted-foreground'>
						{t(`${widget.translationKey}.description`)}
					</p>
				</div>
			</div>
		</div>
	)
}
