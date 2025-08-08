import { Code2, Calculator, Palette, Timer, Gamepad2, Sparkles, Ruler, FileImage, Youtube } from 'lucide-react'
import Link from 'next/link'

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
		id: 'pomodoro',
		title: 'Pomodoro Timer',
		description: 'Stay productive with this Pomodoro technique timer featuring work and break intervals.',
		icon: <Timer className="w-8 h-8" />,
		gradient: 'from-red-500 to-orange-500'
	},
	{
		id: 'code-formatter',
		title: 'Code Formatter',
		description: 'Format and beautify your code in various programming languages.',
		icon: <Code2 className="w-8 h-8" />,
		gradient: 'from-green-500 to-emerald-500'
	},
	{
		id: 'mini-games',
		title: 'Mini Games',
		description: 'A collection of fun browser-based mini games to play in your free time.',
		icon: <Gamepad2 className="w-8 h-8" />,
		gradient: 'from-indigo-500 to-purple-500'
	},
	{
		id: 'animations',
		title: 'CSS Animations',
		description: 'Interactive playground for creating and experimenting with CSS animations.',
		icon: <Sparkles className="w-8 h-8" />,
		gradient: 'from-yellow-500 to-red-500'
	}
]

export default function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-3xl font-bold tracking-tight">Mini Projects</h1>
				<p className="text-muted-foreground mt-2">
					A collection of interactive tools and demos built with modern web technologies.
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
							<h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
							<p className="mt-2 text-sm text-muted-foreground">
								{project.description}
							</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}