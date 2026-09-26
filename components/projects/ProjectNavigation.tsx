import Link from 'next/link'
import { ArrowLeft, ArrowRight, ArrowUpRight, LayoutGrid } from 'lucide-react'
import { ProjectLogo } from './ProjectLogo'

type Neighbor = { href: string; title: string; logo: string }
type Props = {
	previous: Neighbor
	next: Neighbor
	allHref: string
	labels: { previous: string; next: string; all: string }
}

const focus = 'cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background'
const caption = 'block text-[0.625rem] font-medium uppercase tracking-[0.12em] text-muted-foreground'
const title = 'block min-w-0 break-words text-sm font-semibold leading-snug'

export function ProjectNavigation({ previous, next, allHref, labels }: Props) {
	const neighbors = [
		{ ...previous, label: labels.previous, Icon: ArrowLeft },
		{ ...next, label: labels.next, Icon: ArrowRight }
	]

	const tiles = () => neighbors.map(({ href, title: name, logo, label, Icon }) => (
		<Link key={href} href={href} className={`${focus} group flex min-w-0 flex-col items-start rounded-xl bg-muted/60 p-4 hover:bg-muted`}>
			<div className='mb-5 flex w-full items-center justify-between gap-1'>
				<ProjectLogo src={logo} alt='' />
				<Icon aria-hidden className='size-3.5 shrink-0 text-muted-foreground group-hover:text-primary' />
			</div>
			<span className={`${caption} mb-2`}>{label}</span>
			<span className={title}>{name}</span>
		</Link>
	))

	return (
		<section id='project-navigation' className='min-w-0 scroll-mt-24 pt-6' aria-label={labels.all}>
			<nav aria-label={labels.all} className='rounded-2xl border bg-card p-2'>
				<Link href={allHref} className={`${focus} mb-2 flex min-h-12 items-center gap-2 rounded-xl px-3 text-sm font-semibold hover:bg-muted`}>
					<LayoutGrid aria-hidden className='size-4 shrink-0 text-muted-foreground' /><span className='flex-1'>{labels.all}</span><ArrowUpRight aria-hidden className='size-4 shrink-0 text-muted-foreground' />
				</Link>
				<div className='grid grid-cols-2 gap-2'>{tiles()}</div>
			</nav>
		</section>
	)
}
