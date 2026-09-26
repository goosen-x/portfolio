import type { ReactNode } from 'react'
import { getTranslations } from 'next-intl/server'
import { ArrowUpRight, Clock, Mail } from 'lucide-react'
import { FaTelegram } from 'react-icons/fa'
import ContactForm from '@/components/contact/ContactForm'

type Props = { title: string; text: string; aside?: ReactNode }

const telegram = { handle: '@borisenko_dmitry', href: 'https://t.me/borisenko_dmitry' }
const email = { value: 'dmitryborisenko.msk@gmail.com', href: 'mailto:dmitryborisenko.msk@gmail.com' }

const channelLink = 'group flex cursor-pointer items-center gap-4 rounded-xl border bg-background/60 p-4 transition-colors hover:border-foreground/50'
const channelIcon = 'flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary'
const channelArrow = 'size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5'

export async function ContactCta({ title, text, aside }: Props) {
	const t = await getTranslations('ContactBlock')

	return <section className='overflow-hidden rounded-3xl border bg-card p-4 sm:p-8 xl:p-12'>
		<div className='grid items-start gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16'>
			<div>
				<h2 className='mb-4 text-3xl font-bold leading-tight sm:text-5xl'>{title}</h2>
				<p className='mb-8 text-lg leading-relaxed text-muted-foreground'>{text}</p>
				{aside ?? <>
					<p className='mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground'>{t('direct')}</p>
					<div className='space-y-3'>
						<a href={telegram.href} target='_blank' rel='noopener noreferrer' className={channelLink}>
							<span className={channelIcon}><FaTelegram className='size-5' /></span>
							<span className='min-w-0 flex-1'>
								<span className='block text-xs text-muted-foreground'>{t('telegram')}</span>
								<span className='block truncate font-medium'>{telegram.handle}</span>
							</span>
							<ArrowUpRight className={channelArrow} />
						</a>
						<a href={email.href} className={channelLink}>
							<span className={channelIcon}><Mail className='size-5' /></span>
							<span className='min-w-0 flex-1'>
								<span className='block text-xs text-muted-foreground'>{t('email')}</span>
								<span className='block truncate font-medium'>{email.value}</span>
							</span>
							<ArrowUpRight className={channelArrow} />
						</a>
						<p className='flex items-center gap-2 pt-1 text-sm text-muted-foreground'><Clock className='size-4' />{t('reply')}</p>
					</div>
				</>}
			</div>
			<ContactForm />
		</div>
	</section>
}
