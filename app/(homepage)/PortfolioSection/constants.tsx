import { SkeletonFour } from './widgets/SkeletonFour'
import { SkeletonOne } from './widgets/SkeletonOne'
import { SkeletonThree } from './widgets/SkeletonThree'
import { SkeletonTwo } from './widgets/SkeletonTwo'

export const cards = [
	{
		id: 1,
		content: <SkeletonOne />,
		className: 'md:col-span-2',
		thumbnail: '/images/komponenta.png'
	},
	{
		id: 2,
		content: <SkeletonTwo />,
		className: 'col-span-1',
		thumbnail:
			'https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	},
	{
		id: 3,
		content: <SkeletonThree />,
		className: 'col-span-1',
		thumbnail:
			'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	},
	{
		id: 4,
		content: <SkeletonFour />,
		className: 'md:col-span-2',
		thumbnail: '/images/mba.png'
	}
]
