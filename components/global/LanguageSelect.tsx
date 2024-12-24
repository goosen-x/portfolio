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
import { useState } from 'react'

const LANGUAGE = {
	ENGLISH: 'en',
	RUSSIAN: 'ru',
	HEBREW: 'he'
} as const

const countries = {
	[LANGUAGE.ENGLISH]: '🇬🇧',
	[LANGUAGE.RUSSIAN]: '🇷🇺',
	[LANGUAGE.HEBREW]: '🇮🇱'
}

type Props = {
	locale: string
}

export const LanguageSelect = ({ locale }: Props) => {
	const [value, setValue] = useState(
		locale as (typeof LANGUAGE)[keyof typeof LANGUAGE]
	)

	const router = useRouter()

	console.log('locale', locale)

	const handleLanguageChange = (
		value: (typeof LANGUAGE)[keyof typeof LANGUAGE]
	) => {
		if (value) {
			setValue(value)
			router.push(`/${value}`)
		}
	}

	return (
		<div>
			<Select value={value} onValueChange={handleLanguageChange}>
				<SelectTrigger className='h-8'>
					<SelectValue aria-label={value}>{countries[value]}</SelectValue>
				</SelectTrigger>
				<SelectPortal>
					<SelectContent>
						<SelectViewport>
							<SelectItem value={LANGUAGE.ENGLISH}>
								<SelectItemText>English</SelectItemText>
								<SelectItemIndicator>…</SelectItemIndicator>
							</SelectItem>
							<SelectItem value={LANGUAGE.RUSSIAN}>
								<SelectItemText>Russian</SelectItemText>
								<SelectItemIndicator>…</SelectItemIndicator>
							</SelectItem>
							<SelectItem value={LANGUAGE.HEBREW}>
								<SelectItemText>Hebrew</SelectItemText>
								<SelectItemIndicator>…</SelectItemIndicator>
							</SelectItem>
						</SelectViewport>
					</SelectContent>
				</SelectPortal>
			</Select>
		</div>
	)
}
