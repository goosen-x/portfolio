import type { ReactNode } from 'react'

type Props = {
	technologies: { name: string; icon: ReactNode }[]
	title: string
}

export function ProjectTechnologies({ technologies, title }: Props) {
	return (
		<section id='project-technologies' className='@container min-w-0 scroll-mt-24' aria-label={title}>
			<div className='rounded-2xl border bg-card px-5 py-6 sm:px-8'>
				<div className='mb-7'>
					<h2 className='text-xl font-semibold sm:text-2xl'>{title}</h2>
				</div>
				<ul className='grid grid-cols-2 gap-x-4 gap-y-7 @min-[32rem]:grid-cols-4 @min-[44rem]:grid-cols-5'>
					{technologies.map(tech => (
						<li key={tech.name} className='flex min-w-0 flex-col items-center gap-3 text-center'>
							<span aria-hidden className='flex size-16 items-center justify-center rounded-2xl bg-muted/60 text-3xl'>{tech.icon}</span>
							<span className='max-w-full break-words text-xs font-medium text-muted-foreground'>{tech.name}</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
