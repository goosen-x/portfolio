export type ExperienceData = {
	title: string
	job: string
	company: string
	city: string
	companyUrl: string | null
	description: {
		en: string
		ru: string
		he: string
	}
	images: string[]
}

export const experienceData: Array<ExperienceData> = [
	{
		title: '2023-Now',
		job: 'Fullstack Developer',
		company: 'MBA',
		city: 'Moscow',
		companyUrl: 'https://www.moscow.mba/',
		description: {
			en: 'Developed and maintained web applications for Moscow Business Academy and several educational organizations using Next.js on the frontend, Strapi with PostgreSQL on the backend. Worked with Portainer for container management, resolved bugs, and handled DevOps tasks related to CI/CD and deployment automation',
			ru: 'Разрабатывал и поддерживал веб-приложения для Moscow Business Academy и нескольких образовательных организаций с использованием Next.js на фронтенде, Strapi в связке с PostgreSQL на бэкенде. Взаимодействовал с Portainer для управления контейнерами, устранял баги и выполнял DevOps задачи, связанные с CI/CD и автоматизацией развертывания',
			he: 'פיתחתי ותחזקתי יישומי אינטרנט עבור Moscow Business Academy ומספר ארגונים חינוכיים תוך שימוש ב-Next.js בצד הלקוח, Strapi בשילוב עם PostgreSQL בצד השרת. עבדתי עם Portainer לניהול קונטיינרים, פתרתי באגים ועסקתי במשימות DevOps הקשורות ל-CI/CD ואוטומציה של פריסה.'
		},
		images: ['/images/mba-experience-3.png', '/images/mba-experience-2.png']
	},
	{
		title: 'Early 2023',
		job: 'Fullstack Developer',
		company: 'Dobrostok',
		city: 'Moscow',
		companyUrl: 'https://dobrostock.ru/',
		description: {
			en: 'Developed the admin panel for authors of the Dobrostok photo stock using T3 stack and Next.js, providing an easy-to-use interface for content management. Implemented an authentication system using NextAuth. Optimized images on the backend, which improved site performance and reduced loading times',
			ru: 'Разработал админ-панель для авторов фотостока Dobrostok, используя T3 stack и Next.js, обеспечив удобный интерфейс для управления контентом. Реализовал систему авторизации с использованием NextAuth. Оптимизировал изображения на бэкенде, что повысило производительность сайта и ускорило время загрузки',
			he: 'פיתחתי לוח ניהול למחברים בפוטוסטוק Dobrostok, תוך שימוש ב-T3 stack וב-Next.js, והבטחתי ממשק נוח לניהול התוכן. יישמתי מערכת הזדהות באמצעות NextAuth. אופטימיזרתי תמונות בצד השרת, מה ששיפר את ביצועי האתר והאיץ את זמן הטעינה.'
		},
		images: ['/images/dobrostok.png', '/images/dobrostok-2.png']
	},
	{
		title: '2020-2022',
		job: 'Frontend Developer',
		company: 'Inspro',
		city: 'Moscow',
		companyUrl: 'https://www.inspro.ru/',
		description: {
			en: 'Worked at a company providing accounting services, where I was responsible for backend development, including working with PostgreSQL databases. Managed various server-side processes, such as data synchronization between accounting systems and implementing a reporting system for clients. Ensured the performance and security of the system, supporting the efficient processing of accounting data and reports',
			ru: 'Работал в компании, предоставляющей бухгалтерские услуги, где занимался разработкой на бэкенде, включая работу с базами данных PostgreSQL. Управлял различными серверными процессами, такими как синхронизация данных между учетными системами и реализация системы отчетности для клиентов. Обеспечивал производительность и безопасность системы, поддерживая эффективную обработку бухгалтерских данных и отчетности',
			he: 'עבדתי בחברה המעניקה שירותי חשבונאות, שם עסקתי בפיתוח בצד השרת, כולל עבודה עם בסיסי נתונים PostgreSQL. ניהלתי תהליכים שונים בצד השרת, כמו סנכרון נתונים בין מערכות ניהול ויישום מערכת דוחות ללקוחות. הבטחתי את ביצועי המערכת ואבטחתה, תוך שמירה על עיבוד יעיל של נתוני חשבונאות ודוחות.'
		},
		images: ['/images/mba.png', '/images/mba-experience.png']
	},
	{
		title: '2019-2020',
		job: 'Frontend Developer',
		company: 'Mbloq',
		city: 'Moscow',
		companyUrl: null,
		description: {
			en: 'Developed the women’s clothing online store Mbloq using Vanilla JS. Worked with the WordPress CMS to manage products, orders, and users. Optimized the website for search engines (SEO), including improving semantics and URL structure, as well as implementing a structured data system (Schema.org). Performed the deployment of web applications to the server, including environment setup and project build automation',
			ru: 'Разработал интернет-магазин женской одежды Mbloq на Vanilla JS. Работал с CMS WordPress для управления товарами, заказами и пользователями. Оптимизировал сайт для поисковых систем (SEO), включая улучшение семантикии структуры URL, а также внедрил систему структурированных данных (Schema.org). Выполнял деплой веб-приложений на сервер, включая настройку окружения и автоматизацию сборки проекта',
			he: 'פיתחתי חנות אינטרנטית לביגוד נשים Mbloq באמצעות Vanilla JS. עבדתי עם מערכת ניהול תוכן WordPress לניהול מוצרים, הזמנות ומשתמשים. אופטימיזרתי את האתר עבור מנועי חיפוש (SEO), כולל שיפור סמנטיקה ומבנה כתובת ה-URL, וכן יישמתי מערכת נתונים מובנים (Schema.org). ביצעתי דיפלוי של יישומי אינטרנט לשרת, כולל הגדרת סביבות והאצת תהליך הבנייה של הפרויקט.'
		},
		images: ['/images/mba-experience.png']
	}
]

//

// мблок
// .

// Developed the women’s clothing online store "Mbloq" using Vanilla JS. Worked with the WordPress CMS to manage products, orders, and users. Optimized the website for search engines (SEO), including improving semantics and URL structure, as well as implementing a structured data system (Schema.org). Performed the deployment of web applications to the server, including environment setup and project build automation.

// инспро
//

// Worked at a company providing accounting services, where I was responsible for backend development, including working with PostgreSQL databases. Managed various server-side processes, such as data synchronization between accounting systems and implementing a reporting system for clients. Ensured the performance and security of the system, supporting the efficient processing of accounting data and reports.

// dobrostok
// .

// Developed the admin panel for authors of the Dobrostok photo stock using T3 stack and Next.js, providing an easy-to-use interface for content management. Implemented an authentication system using NextAuth. Optimized images on the backend, which improved site performance and reduced loading times.
