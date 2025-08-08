import { Ruler, FileImage, Youtube, GitBranch, Box, Grid3X3 } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

interface ProjectCard {
	id: string
	title: string
	description: string
	icon: React.ReactNode
	gradient: string
}

const projects: ProjectCard[] = [
	{
		id: 'clamp-calculator',
		title: 'Clamp Calculator',
		description: 'Create fluid typography and spacing with CSS clamp() function. Calculate responsive values easily.',
		icon: <Ruler className="w-8 h-8" />,
		gradient: 'from-amber-500 to-orange-500'
	},
	{
		id: 'svg-encoder',
		title: 'SVG URL Encoder',
		description: 'Encode SVG images for use in CSS background-image. Supports drag & drop and live preview.',
		icon: <FileImage className="w-8 h-8" />,
		gradient: 'from-teal-500 to-cyan-500'
	},
	{
		id: 'youtube-thumbnail',
		title: 'YouTube Thumbnail Grabber',
		description: 'Extract high-quality thumbnail images from YouTube videos in various resolutions.',
		icon: <Youtube className="w-8 h-8" />,
		gradient: 'from-red-500 to-pink-500'
	},
	{
		id: 'html-tree',
		title: 'HTML Tree Visualizer',
		description: 'Visualize HTML structure as an interactive tree with BEM validation and depth control.',
		icon: <GitBranch className="w-8 h-8" />,
		gradient: 'from-purple-500 to-indigo-500'
	},
	{
		id: 'flexbox-generator',
		title: 'Flexbox Generator',
		description: 'Visual tool for creating CSS Flexbox layouts with real-time preview and code generation.',
		icon: <Box className="w-8 h-8" />,
		gradient: 'from-blue-500 to-indigo-500'
	},
	{
		id: 'grid-generator',
		title: 'Grid Generator',
		description: 'Visual tool for creating CSS Grid layouts with interactive controls and instant code output.',
		icon: <Grid3X3 className="w-8 h-8" />,
		gradient: 'from-green-500 to-emerald-500'
	}
]

export default function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
	const t = useTranslations('projectsPage')
	const widgetT = useTranslations('widgets')
	
	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-3xl font-bold tracking-tight">{t('title')}</h1>
				<p className="text-muted-foreground mt-2">
					{t('description')}
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{projects.map((project) => (
					<Link
						key={project.id}
						href={`projects/${project.id}`}
						className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-lg"
					>
						<div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity group-hover:opacity-10`} />
						<div className="p-6">
							<div className={`inline-flex rounded-lg bg-gradient-to-br ${project.gradient} p-3 text-white`}>
								{project.icon}
							</div>
							<h3 className="mt-4 text-lg font-semibold">{widgetT(`${project.id.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())}.title`)}</h3>
							<p className="mt-2 text-sm text-muted-foreground">
								{widgetT(`${project.id.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())}.description`)}
							</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}