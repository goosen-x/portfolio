import { SITE_URL } from '@/lib/constants/site'

const SAME_AS = [
	'https://github.com/goosen-x',
	'https://x.com/goose_labs',
	'https://www.linkedin.com/in/dmitry-borisenko-9a8144128/',
	'https://t.me/borisenko_dmitry'
]

export function PersonSchema() {
	const schema = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Dmitry Borisenko',
		jobTitle: 'Web Developer',
		url: SITE_URL,
		sameAs: SAME_AS
	}

	return (
		<script
			type='application/ld+json'
			dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
		/>
	)
}
