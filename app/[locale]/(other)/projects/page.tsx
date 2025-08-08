import { Ruler, FileImage, Youtube, GitBranch, Box, Grid3X3, QrCode, Gauge, Key, Link as LinkIcon, BarChart3, Palette } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

interface ProjectCard {
	id: string
	title: string
	description: string
	icon: React.ReactNode
	gradient: string
}

interface Category {
	id: string
	title: string
	description: string
	projects: ProjectCard[]
}

const categories: Category[] = [
	{
		id: 'css-tools',
		title: 'CSS Tools',
		description: 'Tools for working with CSS, layouts, and styling',
		projects: [
			{
				id: 'clamp-calculator',
				title: 'Clamp Calculator',
				description: 'Create fluid typography and spacing with CSS clamp() function. Calculate responsive values easily.',
				icon: <Ruler className="w-8 h-8" />,
				gradient: 'from-amber-500 to-orange-500'
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
			},
			{
				id: 'css-specificity',
				title: 'CSS Specificity Calculator',
				description: 'Analyze CSS selector specificity, understand cascade rules, and optimize your stylesheets.',
				icon: <BarChart3 className="w-8 h-8" />,
				gradient: 'from-indigo-500 to-blue-600'
			}
		]
	},
	{
		id: 'media-tools',
		title: 'Media & Content',
		description: 'Tools for working with images, videos, and content',
		projects: [
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
				id: 'qr-generator',
				title: 'QR Code Generator',
				description: 'Generate QR codes for URLs, App Store links, and WiFi passwords with customizable colors and sizes.',
				icon: <QrCode className="w-8 h-8" />,
				gradient: 'from-violet-500 to-purple-500'
			}
		]
	},
	{
		id: 'dev-tools',
		title: 'Development Tools',
		description: 'Tools for developers and debugging',
		projects: [
			{
				id: 'html-tree',
				title: 'HTML Tree Visualizer',
				description: 'Visualize HTML structure as an interactive tree with BEM validation and depth control.',
				icon: <GitBranch className="w-8 h-8" />,
				gradient: 'from-purple-500 to-indigo-500'
			},
			{
				id: 'speed-test',
				title: 'Internet Speed Test',
				description: 'Test your internet connection speed, measure download/upload speeds and ping latency.',
				icon: <Gauge className="w-8 h-8" />,
				gradient: 'from-slate-500 to-gray-600'
			}
		]
	},
	{
		id: 'productivity',
		title: 'Productivity & Security',
		description: 'Tools for productivity and security',
		projects: [
			{
				id: 'password-generator',
				title: 'Password Generator',
				description: 'Generate secure passwords with customizable options, passphrase support and strength analysis.',
				icon: <Key className="w-8 h-8" />,
				gradient: 'from-emerald-500 to-teal-600'
			},
			{
				id: 'utm-builder',
				title: 'UTM Builder',
				description: 'Create and manage UTM tracking links for marketing campaigns with dynamic parameters support.',
				icon: <LinkIcon className="w-8 h-8" />,
				gradient: 'from-pink-500 to-rose-500'
			}
		]
	}
]

export default function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
	const t = useTranslations('projectsPage')
	const widgetT = useTranslations('widgets')
	const categoriesT = useTranslations('projectsPage.categories')
	
	return (
		<div className="space-y-8">
			<div>
				<h1 className="text-3xl font-bold tracking-tight">{t('title')}</h1>
				<p className="text-muted-foreground mt-2">
					{t('description')}
				</p>
			</div>

			{categories.map((category) => (
				<div key={category.id} className="space-y-4">
					<div>
						<h2 className="text-2xl font-semibold">{categoriesT(`${category.id}.title`)}</h2>
						<p className="text-muted-foreground mt-1">
							{categoriesT(`${category.id}.description`)}
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{category.projects.map((project) => (
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
			))}
		</div>
	)
}