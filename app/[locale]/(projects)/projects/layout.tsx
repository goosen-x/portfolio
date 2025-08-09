'use client'

import BreadcrumbHeader from '@/components/global/BreadcrumbHeader'
import { ProjectsSidebar } from '@/components/projects/ProjectsSidebar'
import { WidgetHeader, WidgetFAQ } from '@/components/widgets'
import { RelatedTools } from '@/components/seo/RelatedTools'
import { getWidgetByPath } from '@/lib/constants/widgets'
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

type Props = {
	children: ReactNode
}

export default function ProjectsLayout({ children }: Props) {
	const pathname = usePathname()
	// Extract widget path from URL: /en/projects/widget-name -> widget-name
	const widgetPath = pathname.split('/').pop()
	const widget = widgetPath ? getWidgetByPath(widgetPath) : null
	const widgetId = widget?.id

	return (
		<>
			{/* <BreadcrumbHeader /> */}
			<div className='flex h-[calc(100vh-4rem)]'>
				<ProjectsSidebar />
				<main className='flex-1 overflow-y-auto'>
					<div className='container mx-auto py-8 max-w-6xl'>
						{widgetId && <WidgetHeader widgetId={widgetId} />}
						{children}
						{widgetId && (
							<>
								<RelatedTools currentTool={widgetId} />
								<WidgetFAQ widgetId={widgetId} />
							</>
						)}
					</div>
				</main>
			</div>
		</>
	)
}
