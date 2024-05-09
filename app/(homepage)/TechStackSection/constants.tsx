import { BiLogoTelegram } from 'react-icons/bi'

import { SkeletonOne } from './widgets/SkeletonOne'
import { SkeletonTwo } from './widgets/SkeletonTwo'
import { SkeletonFive } from './widgets/SkeletonFive'
import { SkeletonFour } from './widgets/SkeletonFour'
import { SkeletonThree } from './widgets/SkeletonThree'

export const items = [
	{
		title: 'AI Content Generation',
		description: (
			<span className='text-sm'>
				Experience the power of AI in generating unique content.
			</span>
		),
		header: <SkeletonOne />,
		className: 'md:col-span-1',
		icon: <BiLogoTelegram />
	},
	{
		title: 'Automated Proofreading',
		description: (
			<span className='text-sm'>
				Let AI handle the proofreading of your documents.
			</span>
		),
		header: <SkeletonTwo />,
		className: 'md:col-span-1',
		icon: <BiLogoTelegram />
	},
	{
		title: 'Contextual Suggestions',
		description: (
			<span className='text-sm'>
				Get AI-powered suggestions based on your writing context.
			</span>
		),
		header: <SkeletonThree />,
		className: 'md:col-span-1',
		icon: <BiLogoTelegram />
	},
	{
		title: 'Sentiment Analysis',
		description: (
			<span className='text-sm'>
				Understand the sentiment of your text with AI analysis.
			</span>
		),
		header: <SkeletonFour />,
		className: 'md:col-span-2',
		icon: <BiLogoTelegram />
	},

	{
		title: 'Text Summarization',
		description: (
			<span className='text-sm'>
				Summarize your lengthy documents with AI technology.
			</span>
		),
		header: <SkeletonFive />,
		className: 'md:col-span-1',
		icon: <BiLogoTelegram />
	}
]
