'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'
import { cn } from '@/lib/utils'
import {
	Code2,
	Calculator,
	Palette,
	Timer,
	Gamepad2,
	Sparkles,
	Home,
	ChevronRight,
	Ruler,
	FileImage,
	Youtube
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
		id: 'pomodoro',
		title: 'Pomodoro Timer',
		icon: <Timer className="w-4 h-4" />,
		description: 'Productivity timer using Pomodoro technique'
	},
	{
		id: 'code-formatter',
		title: 'Code Formatter',
		icon: <Code2 className="w-4 h-4" />,
		description: 'Format and beautify your code'
	},
	{
		id: 'mini-games',
		title: 'Mini Games',
		icon: <Gamepad2 className="w-4 h-4" />,
		description: 'Collection of fun mini games'
	},
	{
		id: 'animations',
		title: 'CSS Animations',
		icon: <Sparkles className="w-4 h-4" />,
		description: 'Interactive CSS animation playground'
	}
]

export function ProjectsSidebar() {
	const pathname = usePathname()
	const locale = useLocale()

	return (
		<aside className="w-64 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="flex h-full flex-col">
				<div className="border-b px-6 py-4">
					<h2 className="text-lg font-semibold">Mini Projects</h2>
					<p className="text-sm text-muted-foreground mt-1">
						Interactive demos & tools
					</p>
				</div>

				<nav className="flex-1 overflow-y-auto p-4">
					<div className="space-y-1">
						<Link
							href={`/${locale}/projects`}
							className={cn(
								"flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
								pathname === `/${locale}/projects` && "bg-accent text-accent-foreground"
							)}
						>
							<Home className="w-4 h-4" />
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
											isActive && "bg-accent text-accent-foreground"
										)}
									>
										{project.icon}
										<span className="flex-1">{project.title}</span>
										{isActive && <ChevronRight className="w-4 h-4" />}
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