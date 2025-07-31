import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import DateFormatter from './date-formatter'

type Props = {
	title: string
	coverImage: string
	date: string
	author: {
		name: string
		picture: string
	}
}

export function PostHeader({ title, date, author }: Props) {
	return (
		<>
			<div className='max-w-2xl mx-auto'>
				<h1>{title}</h1>
				<div className=''>
					<Avatar>
						<AvatarImage src={author.picture} alt={author.name} />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</div>

				<div className='mb-6 text-lg'>
					<DateFormatter dateString={date} />
				</div>
			</div>
		</>
	)
}
