import { ImageResponse } from 'next/og'
import { getTranslations } from 'next-intl/server'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage({
	params
}: {
	params: Promise<{ locale: string }>
}) {
	const { locale } = await params
	const t = await getTranslations({ locale, namespace: 'MetaData' })

	return new ImageResponse(
		(
			<div
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					padding: '80px',
					background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
					color: '#fff',
					fontFamily: 'sans-serif'
				}}
			>
				<div
					style={{
						fontSize: 28,
						color: '#8b8b9e',
						letterSpacing: 2,
						textTransform: 'uppercase',
						marginBottom: 24,
						display: 'flex'
					}}
				>
					Dmitry Borisenko
				</div>
				<div
					style={{
						fontSize: 64,
						fontWeight: 700,
						lineHeight: 1.15,
						maxWidth: 950,
						display: 'flex'
					}}
				>
					{t('title')}
				</div>
				<div
					style={{
						fontSize: 30,
						color: '#a8a8bd',
						marginTop: 32,
						maxWidth: 900,
						display: 'flex'
					}}
				>
					{t('description')}
				</div>
			</div>
		),
		{ ...size }
	)
}
