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
		title: '2023-Now',
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
		company: 'Dobrostok',
		city: 'Moscow',
		companyUrl: 'https://dobrostock.ru/',
		description:
			'Developed the admin panel for authors of the Dobrostok photo stock using T3 stack and Next.js, providing an easy-to-use interface for content management. Implemented an authentication system using NextAuth. Optimized images on the backend, which improved site performance and reduced loading times',
		images: ['/images/dobrostok.png', '/images/dobrostok-2.png']
	},
	{
		title: '2020-2022',
		job: 'Frontend Developer',
		company: 'Inspro',
		city: 'Moscow',
		companyUrl: 'https://www.inspro.ru/',
		description:
			'Worked at a company providing accounting services, where I was responsible for backend development, including working with PostgreSQL databases. Managed various server-side processes, such as data synchronization between accounting systems and implementing a reporting system for clients. Ensured the performance and security of the system, supporting the efficient processing of accounting data and reports',
		images: ['/images/mba.png', '/images/mba-experience.png']
	},
	{
		title: '2019-2020',
		job: 'Frontend Developer',
		company: 'Mbloq',
		city: 'Moscow',
		companyUrl: null,
		description:
			'Developed the women’s clothing online store "Mbloq" using Vanilla JS. Worked with the WordPress CMS to manage products, orders, and users. Optimized the website for search engines (SEO), including improving semantics and URL structure, as well as implementing a structured data system (Schema.org). Performed the deployment of web applications to the server, including environment setup and project build automation',
		images: ['/images/mba-experience.png']
	}
]
