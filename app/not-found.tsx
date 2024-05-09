import { NotFoundImage } from '@/components/svg/NotFoundImage'
import { Button } from '@/components/ui/button'

export default function NotFound() {
	return (
		<div className='grid h-screen place-content-center bg-background px-4'>
			<div className='text-center'>
				<NotFoundImage />

				<h1 className='mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
					Uh-oh!
				</h1>
				<p className='mt-4 text-gray-500 mb-5'>{"We can't find that page."}</p>
				<Button>Back to Home Page</Button>
			</div>
		</div>
	)
}
