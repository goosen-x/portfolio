import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function formatDate(date: string, locale: string): string {
	const dateObj = new Date(date)
	return dateObj.toLocaleDateString(locale, {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	})
}
