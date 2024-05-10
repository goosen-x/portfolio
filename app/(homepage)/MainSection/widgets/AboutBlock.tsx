import { Block } from '@/components/Block'

export const AboutBlock = () => {
	return (
		<Block className='col-span-12 text-3xl leading-snug'>
			<p className='text-blue-300'>
				Fullstack developer from Moscow, Russia who is deeply passionate about
				creating interactive and appealing web interfaces.{' '}
				<span className='text-foreground'>
					My love for coding and design enables me to craft amazing user
					interfaces that captivate the eye and deliver a seamless user
					experience. My drive for perfection motivates me to explore the latest
					technologies and trends in web development, keeping me up to date with
					the most recent innovations. I think creatively and possess the
					ability to find elegant solutions to complex problems.
				</span>
			</p>
		</Block>
	)
}
