import BreadcrumbHeader from '@/components/global/BreadcrumbHeader'
import { ProjectsSidebar } from '@/components/projects/ProjectsSidebar'
import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

export default function ProjectsLayout({ children }: Props) {
	return (
		<>
			{/* <BreadcrumbHeader /> */}
			<div className='flex h-[calc(100vh-4rem)]'>
				<ProjectsSidebar />
				<main className='flex-1 overflow-y-auto'>
					<div className='container mx-auto p-6'>{children}</div>
				</main>
			</div>
		</>
	)
}
