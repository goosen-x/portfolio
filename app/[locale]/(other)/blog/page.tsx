import { Metadata } from 'next'
import { getPixeltoolPosts } from '@/lib/blog/pixeltool-feed'
import { ExternalPostPreview } from '@/components/blog/external-post-preview'
import { getTranslations } from 'next-intl/server'
import { buildAlternates } from '@/lib/seo/alternates'

type Props = {
	params: Promise<{
		locale: string
	}>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params
	const t = await getTranslations({ locale, namespace: 'blog' })

	return {
		title: `${t('title')} | Dmitry Borisenko`,
		description: t('description'),
		alternates: buildAlternates('/blog', locale)
	}
}

export default async function Blog(props: Props) {
	const params = await props.params
	const t = await getTranslations('blog')

	const posts = await getPixeltoolPosts(20)

	return (
		<main>
			<div className='max-w-7xl mx-auto px-5 pt-12'>
				<section>
					{posts.length === 0 ? (
						<div className='text-center py-16'>
							<p className='text-xl text-gray-600'>{t('noPosts')}</p>
						</div>
					) : (
						<div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32'>
							{posts.map(post => (
								<ExternalPostPreview key={post.link} post={post} locale={params.locale} />
							))}
						</div>
					)}
				</section>
			</div>
		</main>
	)
}

// Generate static params for both locales
export async function generateStaticParams() {
	return [
		{ locale: 'en' },
		{ locale: 'ru' }
	]
}

// Enable ISR with 30 minutes revalidation for blog listing
export const revalidate = 1800
