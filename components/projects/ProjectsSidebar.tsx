'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { cloneElement } from 'react'
import {
	Home,
	ChevronRight,
	Ruler,
	FileImage,
	Youtube,
	GitBranch,
	Box,
	Grid3X3,
	QrCode,
	Gauge,
	Key,
	Link as LinkIcon,
	BarChart3
} from 'lucide-react'

interface ProjectItem {
	id: string
	title: string
	icon: React.ReactNode
	description: string
}

const projects: ProjectItem[] = [
	{
		id: 'clamp-calculator',
		title: 'Clamp Calculator',
		icon: <Ruler className="w-4 h-4" />,
		description: 'CSS clamp() calculator for fluid typography'
	},
	{
		id: 'svg-encoder',
		title: 'SVG URL Encoder',
		icon: <FileImage className="w-4 h-4" />,
		description: 'Encode SVG for CSS background-image'
	},
	{
		id: 'youtube-thumbnail',
		title: 'YouTube Thumbnail',
		icon: <Youtube className="w-4 h-4" />,
		description: 'Extract thumbnails from YouTube videos'
	},
	{
		id: 'html-tree',
		title: 'HTML Tree',
		icon: <GitBranch className="w-4 h-4" />,
		description: 'Visualize HTML structure as a tree'
	},
	{
		id: 'flexbox-generator',
		title: 'Flexbox Generator',
		icon: <Box className="w-4 h-4" />,
		description: 'Visual CSS Flexbox layout generator'
	},
	{
		id: 'grid-generator',
		title: 'Grid Generator',
		icon: <Grid3X3 className="w-4 h-4" />,
		description: 'Visual CSS Grid layout generator'
	},
	{
		id: 'qr-generator',
		title: 'QR Code Generator',
		icon: <QrCode className="w-4 h-4" />,
		description: 'Generate QR codes for various purposes'
	},
	{
		id: 'speed-test',
		title: 'Internet Speed Test',
		icon: <Gauge className="w-4 h-4" />,
		description: 'Test your internet connection speed'
	},
	{
		id: 'password-generator',
		title: 'Password Generator',
		icon: <Key className="w-4 h-4" />,
		description: 'Generate secure passwords'
	},
	{
		id: 'utm-builder',
		title: 'UTM Builder',
		icon: <LinkIcon className="w-4 h-4" />,
		description: 'Create UTM tracking links'
	},
	{
		id: 'css-specificity',
		title: 'CSS Specificity',
		icon: <BarChart3 className="w-4 h-4" />,
		description: 'Calculate CSS selector specificity'
	}
]

export function ProjectsSidebar() {
	const pathname = usePathname()
	const locale = useLocale()
	const t = useTranslations('projectsPage')
	const widgetT = useTranslations('widgets')

	return (
		<aside className="w-64 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="flex h-full flex-col">
				<div className="border-b px-6 py-4">
					<h2 className="text-lg font-semibold">{t('title')}</h2>
					<p className="text-sm text-muted-foreground mt-1">
						{t('description')}
					</p>
				</div>

				<nav className="flex-1 overflow-y-auto p-4">
					<div className="space-y-1">
						<Link
							href={`/${locale}/projects`}
							className={cn(
								"flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
								pathname === `/${locale}/projects` && "bg-accent !text-white"
							)}
						>
							<Home className={cn("w-4 h-4", pathname === `/${locale}/projects` && "text-white")} />
							<span>Overview</span>
						</Link>

						<div className="my-4">
							<h3 className="mb-2 px-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
								Projects
							</h3>
							{projects.map((project) => {
								const isActive = pathname === `/${locale}/projects/${project.id}`
								return (
									<Link
										key={project.id}
										href={`/${locale}/projects/${project.id}`}
										className={cn(
											"flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
											isActive && "bg-accent !text-white"
										)}
									>
										{cloneElement(project.icon as React.ReactElement, {
											className: cn("w-4 h-4", isActive && "text-white")
										})}
										<span className="flex-1">{widgetT(`${project.id.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())}.title`)}</span>
										{isActive && <ChevronRight className="w-4 h-4 text-white" />}
									</Link>
								)
							})}
						</div>
					</div>
				</nav>
			</div>
		</aside>
	)
}