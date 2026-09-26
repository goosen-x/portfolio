export type CaseBlock =
	| { type: 'paragraph'; text: string }
	| { type: 'image'; src: string; alt: string; caption: string }
	| { type: 'comparison'; before: string; after: string; beforeAlt: string; afterAlt: string; caption: string }

export type CaseStudy = {
	subtitle: string
	intro: string
	sections: { id: string; heading: string; blocks: CaseBlock[] }[]
}

