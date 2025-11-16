'use client'

import Image from 'next/image'
import Link from 'next/link'
import { TbWorld } from 'react-icons/tb'
import { FaLocationDot } from 'react-icons/fa6'

import { useTranslations } from 'next-intl'
import { ExperienceData } from '../SectionExperience'
import {
	ImageComparison,
	ImageComparisonImage,
	ImageComparisonSlider
} from '@/components/ui/image-comparison'

type Props = {
	itemData: ExperienceData
}

export const ExperienceItem = ({ itemData }: Props) => {
	const { company, job, city, companyUrl, description, images } = itemData
	const isMBA = company.toLowerCase().includes('mba')
	const isInspro = company.toLowerCase().includes('inspro')

	return (
		<div
			className='grid grin-cols-1 md:grid-cols-2 gap-2 mb-4 p-4'
			key={itemData.title}
		>
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
			<p className='text-foreground md:col-span-2 mb-4 text-sm md:text-base'>
				{description}
			</p>
			{images.length > 0 && isMBA ? (
				<>
					{/* First Image Comparison - Main Page */}
					<div className='w-full aspect-[4/3] md:h-52 md:aspect-auto'>
						<ImageComparison
							className='w-full h-full rounded-lg border'
							enableHover
							springOptions={{
								bounce: 0.3
							}}
						>
							<ImageComparisonImage
								src='/images/mba-main-new.png'
								alt='MBA Main Page - New Version'
								position='left'
							/>
							<ImageComparisonImage
								src='/images/mba-main-old.png'
								alt='MBA Main Page - Old Version'
								position='right'
							/>
							<ImageComparisonSlider className='w-0.5 bg-white/30 backdrop-blur-sm' />
						</ImageComparison>
					</div>

					{/* Second Image Comparison - Program Page */}
					<div className='w-full aspect-[4/3] md:h-52 md:aspect-auto'>
						<ImageComparison
							className='w-full h-full rounded-lg border'
							enableHover
							springOptions={{
								bounce: 0.3
							}}
						>
							<ImageComparisonImage
								src='/images/mba-program-new.png'
								alt='MBA Program Page - New Version'
								position='left'
							/>
							<ImageComparisonImage
								src='/images/mba-program-old.png'
								alt='MBA Program Page - Old Version'
								position='right'
							/>
							<ImageComparisonSlider className='w-0.5 bg-white/30 backdrop-blur-sm' />
						</ImageComparison>
					</div>
				</>
			) : isInspro ? (
				images.map((src, idx) => (
					<div key={idx} className='w-full aspect-[4/3] md:h-52 md:aspect-auto'>
						<div className='relative w-full h-full overflow-hidden rounded-lg'>
							<Image
								className='object-cover object-top transition-all duration-[3000ms] ease-in-out hover:object-bottom'
								src={src}
								fill
								sizes='(max-width: 768px) 100vw, 50vw'
								alt='Inspro screenshot'
							/>
						</div>
					</div>
				))
			) : (
				images.map((src, idx) => (
					<div key={idx} className='w-full aspect-[4/3] md:h-52 md:aspect-auto'>
						<Image
							className='rounded-lg object-cover w-full h-full'
							src={src}
							alt='company screenshot'
							width={500}
							height={500}
						/>
					</div>
				))
			)}
		</div>
	)
}
