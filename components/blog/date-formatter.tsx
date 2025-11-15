import { parseISO, format } from 'date-fns'
import { ru, enUS } from 'date-fns/locale'

type Props = {
	dateString: string
	locale?: string
}

const DateFormatter = ({ dateString, locale = 'en' }: Props) => {
	const date = parseISO(dateString)
	const localeObj = locale === 'ru' ? ru : enUS
	const formatPattern = locale === 'ru' ? 'd MMMM yyyy' : 'MMMM d, yyyy'
	return <time dateTime={dateString}>{format(date, formatPattern, { locale: localeObj })}</time>
}

export default DateFormatter
