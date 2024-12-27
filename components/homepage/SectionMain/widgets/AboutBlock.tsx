import { Block } from '@/components/ui/block'
import { useTranslations } from 'next-intl'
// import { useTranslation } from 'react-i18next'

export const AboutBlock = () => {
	const t = useTranslations('SectionMain')

	return (
		<Block className='col-span-12 md:col-span-8 md:row-span-2 text-2xl leading-snug'>
			<p className='text-foreground indent-8 text-pretty'>
				<span className='text-accent/60 mr-2'>{t('markedText')}</span>
				{t('aboutFirst')}
			</p>
			<p className='text-foreground indent-8 text-pretty'>{t('aboutSecond')}</p>
		</Block>
	)
}
