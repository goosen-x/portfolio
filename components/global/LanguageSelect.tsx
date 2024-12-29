'use client'

import { useRouter } from 'next/navigation'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'
import {
	SelectItemIndicator,
	SelectItemText,
	SelectPortal,
	SelectViewport
} from '@radix-ui/react-select'
import Link from 'next/link'
import { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

export const LOCALES = [
	{ key: 'ENGLISH', value: 'en', flag: '🇬🇧' },
	{ key: 'RUSSIAN', value: 'ru', flag: '🇷🇺' }
	// { key: 'HEBREW', value: 'he', flag: '🇮🇱' }
] as const

type Props = {
	locale: string
} & ComponentPropsWithoutRef<'div'>

export const LanguageSelect = ({ className, locale }: Props) => {
	const router = useRouter()

	return (
		<div className={cn('shrink-0', className)}>
			<Select value={locale} onValueChange={value => router.push(`/${value}`)}>
				<SelectTrigger className='h-8'>
					<SelectValue aria-label={locale}>
						{LOCALES.find(LOCALE => LOCALE.value === locale)?.flag}
					</SelectValue>
				</SelectTrigger>
				<SelectPortal>
					<SelectContent>
						<SelectViewport>
							{LOCALES.map(LOCALE => (
								<Link
									href={`/${LOCALE.value}`}
									locale={LOCALE.value}
									key={LOCALE.key}
								>
									<SelectItem value={LOCALE.value}>
										<SelectItemText>{LOCALE.key}</SelectItemText>
										<SelectItemIndicator>…</SelectItemIndicator>
									</SelectItem>
								</Link>
							))}
						</SelectViewport>
					</SelectContent>
				</SelectPortal>
			</Select>
		</div>
	)
}
