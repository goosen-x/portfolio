import { Block } from '@/components/Block'
import { useTranslations } from 'next-intl'
import { useTranslation } from 'react-i18next'

export const AboutBlock = () => {
	const t = useTranslations('Index')

	return (
		<Block className='col-span-12 md:col-span-8 md:row-span-2 text-xl leading-snug'>
			<p className='text-foreground'>
				<span className='text-blue-300'>{t('markedText')}</span>
				{t('mainText')}
			</p>
		</Block>
	)
}
