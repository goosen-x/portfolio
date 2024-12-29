import { Block } from '@/components/ui/block'
import { useTranslations } from 'next-intl'
// import { useTranslation } from 'react-i18next'

export const AboutBlock = () => {
	const t = useTranslations('SectionMain')

	return (
		<Block className='col-span-12 md:col-span-8 md:row-span-2 text-2xl leading-snug px-2 py-6 md:px-6 md:py-6'>
			<p className='indent-8 text-pretty text-lg text-accent/60 mr-2 md:text-2xl'>
				{t('markedText')}
			</p>
			<p className='text-foreground indent-8 text-pretty text-lg md:text-2xl'>
				{t('aboutFirst')}
			</p>
			<p className='text-foreground indent-8 text-pretty text-lg md:text-2xl'>
				{t('aboutSecond')}
			</p>
		</Block>
	)
}
