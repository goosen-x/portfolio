import Image from 'next/image'
import Link from 'next/link'
import { TbWorld } from 'react-icons/tb'
import { FaLocationDot } from 'react-icons/fa6'

import { ExperienceData } from '../constants'
import { useTranslations } from 'next-intl'

type Props = {
	itemData: ExperienceData
}

export const ExperienceItem = ({ itemData }: Props) => {
	const { company, job, city, companyUrl, description, images } = itemData

	const t = useTranslations('SectionMain')

	const locale = t('language') as 'en' | 'ru' | 'he'

	return (
		<div className='grid grid-cols-2 gap-2 mb-4 p-4' key={itemData.title}>
			<div>
				<p className='text-foreground text-4xl font-bold'>{company}</p>
				<p className='text-xl mb-4'>{job}</p>
			</div>
			<div className='flex flex-col gap-4'>
				<p className='flex gap-2  text-foreground'>
					<FaLocationDot className='text-foreground text-2xl' /> {city}
				</p>
				{companyUrl && (
					<Link
						className='flex gap-2 text-foreground'
						href={companyUrl}
						target='_blank'
					>
						<TbWorld className='text-foreground text-2xl' /> {companyUrl}
					</Link>
				)}
			</div>
			<p className='text-foreground col-span-2 mb-4'>{description[locale]}</p>
			{images.length > 0 &&
				images.map((src, idx) => (
					<Image
						className='rounded-lg object-cover object-left-top h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
						src={src}
						alt='hero template'
						width={500}
						height={500}
						key={idx}
					/>
				))}
		</div>
	)
}
