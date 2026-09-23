import { routing } from '@/i18n/routing'
import { SITE_URL } from '@/lib/constants/site'

export function buildAlternates(path: string, locale: string) {
	const suffix = path === '' ? '' : path

	return {
		canonical: `${SITE_URL}/${locale}${suffix}`,
		languages: Object.fromEntries(
			routing.locales.map(l => [l, `${SITE_URL}/${l}${suffix}`])
		)
	}
}
