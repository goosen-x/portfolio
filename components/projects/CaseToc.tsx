'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

type Props = { title: string; items: { id: string; heading: string }[] }

export function CaseToc({ title, items }: Props) {
	const [activeId, setActiveId] = useState(items[0]?.id)

	useEffect(() => {
		const sections = items.map(item => document.getElementById(item.id)).filter((el): el is HTMLElement => el !== null)
		const observer = new IntersectionObserver(
			entries => {
				const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
				if (visible[0]) setActiveId(visible[0].target.id)
			},
			{ rootMargin: '-96px 0px -60% 0px' }
		)
		sections.forEach(section => observer.observe(section))
		return () => observer.disconnect()
	}, [items])

	const goTo = (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault()
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
		history.replaceState(null, '', `#${id}`)
		setActiveId(id)
	}

	return (
		<nav aria-label={title}>
			<h2 className='mb-4 text-lg font-semibold'>{title}</h2>
			<ul className='space-y-1 border-l'>
				{items.map(item => (
					<li key={item.id}>
						<a
							href={`#${item.id}`}
							onClick={goTo(item.id)}
							className={cn(
								'-ml-px block cursor-pointer border-l-2 py-1.5 pl-4 text-sm transition-colors',
								activeId === item.id ? 'border-primary font-medium text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground'
							)}
						>
							{item.heading}
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}
