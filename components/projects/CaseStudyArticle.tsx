import Image from 'next/image'
import type { CaseBlock, CaseStudy } from '@/lib/projects/case-studies'
import { getPngSize } from '@/lib/projects/image-size'
import { ImageComparison, ImageComparisonImage, ImageComparisonSlider } from '@/components/ui/image-comparison'

function Screenshot({ src, alt, caption }: { src: string; alt: string; caption: string }) {
	const { width, height } = getPngSize(src)
	return <figure className='my-10'>
		<div className='overflow-hidden rounded-2xl border bg-card'>
			<Image src={src} alt={alt} width={width} height={height} sizes='(max-width: 768px) 100vw, 70vw' className='h-auto w-full' />
		</div>
		<figcaption className='mt-3 text-sm leading-relaxed text-muted-foreground'>{caption}</figcaption>
	</figure>
}

function CaseContentBlock({ block, beforeLabel, afterLabel }: { block: CaseBlock; beforeLabel: string; afterLabel: string }) {
	if (block.type === 'paragraph') return <p className='mb-5 text-lg leading-relaxed text-muted-foreground'>{block.text}</p>
	if (block.type === 'image') return <Screenshot src={block.src} alt={block.alt} caption={block.caption} />
	const { width, height } = getPngSize(block.after)
	return <figure className='my-10'>
		<div className='relative w-full' style={{ aspectRatio: `${width} / ${height}` }}>
			<ImageComparison className='h-full w-full rounded-2xl border' enableHover springOptions={{ bounce: 0.3 }}>
				<ImageComparisonImage src={block.after} alt={block.afterAlt} position='left' />
				<ImageComparisonImage src={block.before} alt={block.beforeAlt} position='right' />
				<ImageComparisonSlider className='w-0.5 bg-white/30 backdrop-blur-sm' />
			</ImageComparison>
			<span className='pointer-events-none absolute bottom-3 left-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold shadow-sm'>{beforeLabel}</span>
			<span className='pointer-events-none absolute bottom-3 right-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold shadow-sm'>{afterLabel}</span>
		</div>
		<figcaption className='mt-3 text-sm leading-relaxed text-muted-foreground'>{block.caption}</figcaption>
	</figure>
}

export function CaseStudyArticle({ study, beforeLabel, afterLabel }: { study: CaseStudy; beforeLabel: string; afterLabel: string }) {
	return <div className='max-w-4xl'>
		<p className='mb-10 text-xl leading-relaxed'>{study.intro}</p>
		{study.sections.map(section => <section id={section.id} key={section.id} className='mb-14 scroll-mt-24'>
			<h2 className='mb-6 text-2xl font-bold sm:text-3xl'>{section.heading}</h2>
			{section.blocks.map((block, index) => <CaseContentBlock key={index} block={block} beforeLabel={beforeLabel} afterLabel={afterLabel} />)}
		</section>)}
	</div>
}
