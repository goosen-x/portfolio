import localFont from 'next/font/local'

export const tekturFont = localFont({
	src: [
		{
			path: '../../public/fonts/Tektur-Regular.ttf',
			weight: '400',
			style: 'normal'
		},
		{
			path: '../../public/fonts/Tektur-Bold.ttf',
			weight: '700',
			style: 'normal'
		}
	]
})
