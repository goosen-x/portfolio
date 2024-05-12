import { Block } from '@/components/Block'
import { Button } from '@/components/ui/button'
import { SectionTitle } from '@/components/global/SectionTitle'
import { ProjectBlock } from './widgets/ProjectBlock'
import { ProjectsData } from './constants'

export const ProjectsSection = () => {
	return (
		<section className='grid grid-cols-12 gap-x-6 gap-y-10 mb-24' id='projects'>
			<SectionTitle className='col-span-12' title='Projects' />
			{ProjectsData.map(project => (
				<ProjectBlock project={project} key={project.name} />
			))}
		</section>
	)
}
