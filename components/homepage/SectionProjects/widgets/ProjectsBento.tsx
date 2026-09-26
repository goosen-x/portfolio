import { cn } from '@/lib/utils'
import { getTranslations } from 'next-intl/server'
import { BentoTile } from './BentoTile'
import { bentoGridClass, bentoTiles } from '../bento-layout'
import { ProjectsData } from '../constants'

export async function ProjectsBento({ locale, className }: { locale: string; className?: string }) {
	const t = await getTranslations({ locale, namespace: 'SectionProjects' })

	return (
		<div className={cn('grid grid-cols-1 gap-4', bentoGridClass, className)}>
			{ProjectsData.map((project, index) => {
				const props = {
					project,
					locale,
					name: t(`projects.${project.name}.name`),
					description: t(`projects.${project.name}.company`),
					kind: t(`projects.${project.name}.kind`),
					moreLabel: t('moreButton'),
					config: bentoTiles[index]
				}
				return <BentoTile key={project.name} {...props} />
			})}
		</div>
	)
}
