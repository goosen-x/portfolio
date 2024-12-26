import { TLocale } from '@/i18n/routing'
import { Metadata } from 'next'

export function getMetadataByLocale(locale: TLocale): Metadata {
	const meta = {
		ru: {
			title: 'Портфолио веб-разработчика Goosen.pro',
			description:
				'Проекты и опыт веб-разработчика: создание современных приложений с использованием Next.js, Strapi, PostgreSQL и других технологий.'
		},
		en: {
			title: 'Goosen.pro Web Developer Portfolio',
			description:
				'Projects and experience in web development: building modern applications using Next.js, Strapi, PostgreSQL, and other technologies.'
		},
		he: {
			title: 'Goosen.pro Web Developer Portfolio',
			description:
				'Projects and experience in web development: building modern applications using Next.js, Strapi, PostgreSQL, and other technologies.'
		}
	}

	return meta[locale] || meta.en
}
