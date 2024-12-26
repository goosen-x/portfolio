import { NotFoundImage } from '@/components/svg/NotFoundImage'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
	return (
		<div className='grid h-screen place-content-center bg-background px-4'>
			<div className='text-center'>
				<NotFoundImage />

				<h1 className='mt-6 text-2xl font-bold tracking-tight text-foreground sm:text-4xl'>
					Uh-oh!
				</h1>
				<p className='mt-4 text-gray-500 mb-5'>{"We can't find that page."}</p>
				<Button asChild>
					<Link href='/'>Back to Home Page</Link>
				</Button>
			</div>
		</div>
	)
}
