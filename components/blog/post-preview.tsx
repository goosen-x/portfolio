'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Author } from '@/lib/types/author'
import DateFormatter from './date-formatter'
import { useLocale } from 'next-intl'
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
	excerpt: string
	author: Author
	slug: string
}

export function PostPreview({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug
}: Props) {
	const locale = useLocale()
	const [imgSrc, setImgSrc] = useState(author.picture)

	return (
		<article>
			<div className='mb-5'>
				<Link href={`/${locale}/blog/${slug}`} className='group'>
					<PostCover title={title} slug={slug} className='aspect-[16/9]' />
				</Link>
			</div>
			<div className='flex items-center gap-4 mb-4'>
				<Image
					src={imgSrc}
					alt={author.name}
					className='w-10 h-10 rounded-full object-cover'
					width={40}
					height={40}
					onError={() => setImgSrc('/images/avatar.png')}
				/>
				<div className='flex flex-col'>
					<div className='font-semibold'>{getLocalizedAuthorName(author.name, locale)}</div>
					<div className='text-sm text-gray-500'>
						<DateFormatter dateString={date} locale={locale} />
					</div>
				</div>
			</div>
			<p className='text-lg leading-relaxed'>{excerpt}</p>
		</article>
	)
}
