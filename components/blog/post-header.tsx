'use client'

import Image from 'next/image'
import DateFormatter from './date-formatter'
import { PostCover } from './post-cover'
import { useState } from 'react'

// Helper function to translate author names
function getLocalizedAuthorName(name: string, locale: string): string {
	if (locale === 'ru') {
		const translations: Record<string, string> = {
			'Dmitry Borisenko': 'Дмитрий Борисенко'
		}
		return translations[name] || name
	}
	return name
}

type Props = {
	title: string
	coverImage: string
	date: string
	author: {
		name: string
		picture: string
	}
	slug: string
	locale?: string
}

export function PostHeader({ title, date, author, slug, locale = 'en' }: Props) {
	const [imgSrc, setImgSrc] = useState(author.picture)
	return (
		<>
			<div className='mb-8'>
				<PostCover title={title} slug={slug} className='aspect-[16/6] sm:aspect-[16/5] md:aspect-[16/4]' />
			</div>
			<div className='max-w-2xl mx-auto'>
			<div className='flex items-center gap-4 mb-8'>
					<Image
						src={imgSrc}
						alt={author.name}
						className='w-12 h-12 rounded-full object-cover'
						width={48}
						height={48}
						onError={() => setImgSrc('/images/avatar.png')}
					/>
					<div>
						<div className='font-semibold'>{getLocalizedAuthorName(author.name, locale)}</div>
						<div className='text-sm text-gray-500'>
							<DateFormatter dateString={date} locale={locale} />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
