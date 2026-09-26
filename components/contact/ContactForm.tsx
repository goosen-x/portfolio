'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { Check, Send } from 'lucide-react'

const s = {
	input: 'h-12 rounded-xl bg-background/60 px-4',
	textarea: 'min-h-40 rounded-xl bg-background/60 px-4 py-3',
	label: 'text-sm font-medium',
	field: 'space-y-2',
	button: 'h-12 w-full rounded-xl text-base',
	note: 'text-muted-foreground'
}

export default function ContactForm() {
	const t = useTranslations('contact.form')
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [hasError, setHasError] = useState(false)

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsSubmitting(true)
		setHasError(false)

		const formData = new FormData(e.currentTarget)
		const data = {
			name: formData.get('name') as string,
			email: formData.get('email') as string,
			subject: formData.get('subject') as string,
			message: formData.get('message') as string
		}

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data)
			})
			if (!response.ok) throw new Error('Failed to send message')
			setIsSubmitted(true)
		} catch (error) {
			console.error('Form submission error:', error)
			setHasError(true)
		} finally {
			setIsSubmitting(false)
		}
	}

	if (isSubmitted) {
		return (
			<div className='py-12 text-center'>
				<div className='mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground'>
					<Check className='size-8' />
				</div>
				<h3 className='mb-2 text-xl font-semibold'>{t('success.title')}</h3>
				<p className={s.note}>{t('success.message')}</p>
			</div>
		)
	}

	return (
		<form onSubmit={handleSubmit} className='space-y-5'>
			<div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
				<div className={s.field}>
					<Label htmlFor='name' className={s.label}>{t('fields.name')}</Label>
					<Input id='name' name='name' type='text' placeholder={t('placeholders.name')} required className={s.input} />
				</div>
				<div className={s.field}>
					<Label htmlFor='email' className={s.label}>{t('fields.email')}</Label>
					<Input id='email' name='email' type='email' placeholder={t('placeholders.email')} required className={s.input} />
				</div>
			</div>
			<div className={s.field}>
				<Label htmlFor='subject' className={s.label}>{t('fields.subject')}</Label>
				<Input id='subject' name='subject' type='text' placeholder={t('placeholders.subject')} required className={s.input} />
			</div>
			<div className={s.field}>
				<Label htmlFor='message' className={s.label}>{t('fields.message')}</Label>
				<Textarea id='message' name='message' placeholder={t('placeholders.message')} required rows={5} className={cn('resize-none', s.textarea)} />
			</div>
			<div className='space-y-3'>
				<Button type='submit' className={cn('cursor-pointer', s.button)} disabled={isSubmitting}>
					{isSubmitting ? (
						<span className='flex items-center gap-2'>
							<span className='size-4 animate-spin rounded-full border-2 border-current border-t-transparent' />
							{t('sending')}
						</span>
					) : (
						<span className='flex items-center gap-2'>
							<Send className='size-4' />
							{t('submit')}
						</span>
					)}
				</Button>
				{hasError && <p role='alert' className='text-sm text-destructive'>{t('error')}</p>}
				<p className={cn('text-sm', s.note)}>{t('note')}</p>
			</div>
		</form>
	)
}
