export type ExperienceData = {
	title: string
	job: string
	company: string
	city: string
	companyUrl: string | null
	description: string
	images: string[]
}

export const experienceData: Array<ExperienceData> = [
	{
		title: '2023-2024',
		job: 'Fullstack Developer',
		company: 'MBA',
		city: 'Moscow',
		companyUrl: 'https://www.moscow.mba/',
		description:
			'Разрабатывал и поддерживал веб-приложения нескольких образовательных организаций с использованием Next.js на фронтенде, Strapi в связке с PostgreSQL на бэкенде. Взаимодействовал с Portainer для управления контейнерами, устранял баги и выполнял DevOps задачи, связанные с CI/CD и автоматизацией развертывания',
		images: [
			'/images/mba.png',
			'/images/mba-experience-2.png',
			'/images/mba-experience.png'
		]
	},
	{
		title: 'Early 2023',
		job: 'Fullstack Developer',
		company: 'Aurora',
		city: 'Minsk',
		companyUrl: null,
		description:
			'Worked on the SAP UI5 framework and Angular. Also worked on the SAP UI5 Angular Components. I also worked on the SAP UI5 React Components. framework and Angular. Also worked on the SAP UI5 Angular Components. I also worked on the SAP UI5 React Components. framework and Angular. Also worked on the SAP UI5 Angular Components. I also worked on the SAP UI5 React Components.',
		images: ['/images/mba.png', '/images/mba-experience.png']
	},
	{
		title: '2020-2022',
		job: 'Frontend Developer',
		company: 'Inspro',
		city: 'Moscow',
		companyUrl: 'https://www.inspro.ru/',
		description:
			'Worked on the SAP UI5 framework and Angular. Also worked on the SAP UI5 Angular Components. I also worked on the SAP UI5 React Components. L framework and Angular. Also worked on the SAP UI5 Angular Components. I also worked on the SAP UI5 React Components. framework and Angular. Also worked on the SAP UI5 Angular Components. I also worked on the SAP UI5 React Components. framework and Angular. Also worked on the SAP UI5 Angular Components. I also worked on the SAP UI5 React Components.',
		images: ['/images/mba.png', '/images/mba-experience.png']
	},
	{
		title: '2019-2020',
		job: 'Frontend Developer',
		company: 'Mbloq',
		city: 'Moscow',
		companyUrl: null,
		description:
			'Worked on the SAP UI5 framework and Angular. Also worked on the SAP UI5 Angular Components. I also worked on the SAP UI5 React Components. framework and Angular. Also worked on the SAP UI5 Angular Components. I also worked on the SAP UI5 React Components.',
		images: ['/images/mba-experience.png']
	}
]
