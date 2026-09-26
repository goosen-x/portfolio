import type { CaseStudy } from './types'

export const mbaRu: CaseStudy = {
	subtitle: 'Редизайн, новая база данных и техническое SEO сайта бизнес-школы',
	intro: 'Moscow Business Academy работает на рынке бизнес-образования 15 лет, а сопровождение её сайта началось в 2023 году. С тех пор сайт получил новый дизайн и переехал на другую базу данных и собственные серверы. Разделы семинаров и медиа собраны заново, а для рекламных кампаний появились лендинги акций.',
	sections: [
		{
			id: 'redesign',
			heading: 'Новый дизайн',
			blocks: [
				{ type: 'paragraph', text: 'Посетители приходят на сайт академии с разными целями. Один сравнивает MBA и Mini MBA, другой ищет бесплатный семинар, третий попал по рекламе на страницу акции. Новый дизайн строился вокруг этих сценариев, и у каждого из них свой короткий путь к заявке.' },
				{ type: 'comparison', before: '/images/mba-main-old-cmp.png', after: '/images/mba-main-new-cmp.png', beforeAlt: 'Главная страница MBA до редизайна', afterAlt: 'Главная страница MBA после редизайна', caption: 'Главная страница до и после редизайна.' },
				{ type: 'paragraph', text: 'Страница программы тоже получила новую структуру. Формат, срок обучения, стоимость, документы и кнопка заявки теперь стоят рядом, в первом экране, и посетитель видит всё главное сразу.' },
				{ type: 'comparison', before: '/images/mba-program-old-cmp.png', after: '/images/mba-program-new-cmp.png', beforeAlt: 'Шаблон страницы программы MBA до редизайна', afterAlt: 'Шаблон страницы программы MBA после редизайна', caption: 'Шаблон страницы программы в старом и новом дизайне.' }
			]
		},
		{
			id: 'team',
			heading: 'Команда',
			blocks: [
				{ type: 'paragraph', text: 'Над сайтом работают DevOps-инженер, дизайнеры, SEO-специалисты и маркетологи. Разработка ведёт задачи, отвечает за архитектуру, проверяет код и выпускает обновления, а большую часть кода пишет сама, от вёрстки до серверной части. Интерфейс прорабатывался вместе с дизайнерами, а требования SEO-команды превращались в структуру страниц и настройки индексации.' }
			]
		},
		{
			id: 'stack',
			heading: 'Переезд с MongoDB',
			blocks: [
				{ type: 'paragraph', text: 'Со временем нагрузка на MongoDB выросла, и данные переехали в PostgreSQL. Серверные запросы переписаны заново, и страницы получают только нужные им данные. Контентом управляет Strapi на собственных серверах, а сайт на Next.js запрашивает его через GraphQL и отдаёт готовые страницы там, где контент меняется редко.' },
				{ type: 'image', src: '/images/mba-screen-1.png', alt: 'Каталог программ Moscow Business Academy', caption: 'Каталог программ с фильтрами по формату и направлению.' }
			]
		},
		{
			id: 'sections',
			heading: 'Семинары, медиа и акции',
			blocks: [
				{ type: 'paragraph', text: 'Каждый раздел проектировался в связке с каталогом программ. У семинаров есть календарь и фильтры по темам. Раздел «Медиа» собирает статьи по направлениям бизнеса и подводит читателя к подходящим программам. Под рекламные кампании запускаются отдельные лендинги акций.' },
				{ type: 'image', src: '/images/mba-screen-2.png', alt: 'Раздел семинаров Moscow Business Academy', caption: 'Семинары с календарём и фильтрами по темам.' },
				{ type: 'image', src: '/images/mba-journal.png', alt: 'Раздел «Медиа» Moscow Business Academy', caption: 'Раздел «Медиа» со статьями по направлениям бизнеса.' }
			]
		},
		{
			id: 'seo',
			heading: 'Техническое SEO',
			blocks: [
				{ type: 'paragraph', text: 'Требования к продвижению формулируют SEO-специалисты, техническая часть лежит на разработке: структура URL, метаданные, sitemap, редиректы, разметка Schema.org, скорость загрузки и индексация. Любой новый раздел выходит уже с этими настройками.' },
				{ type: 'paragraph', text: 'Для рекламных размещений на площадках партнёров сделаны Яндекс-фиды. Через них программы академии попадают на эти площадки автоматически, в том формате, который нужен каждой из них.' }
			]
		},
		{
			id: 'infrastructure',
			heading: 'Свои серверы',
			blocks: [
				{ type: 'paragraph', text: 'Последним большим шагом стал переезд с Vercel на собственные серверы в России. Сайт, Strapi, PostgreSQL и три хранилища для фото и видео теперь работают на инфраструктуре, которой управляет команда академии. Данные, страницы и медиафайлы хранятся и отдаются с российских серверов.' }
			]
		}
	]
}

export const mbaEn: CaseStudy = {
	subtitle: 'Redesign, a new database, and technical SEO for a business school website',
	intro: 'Moscow Business Academy has been in business education for 15 years, and work on its website began in 2023. Since then the site got a new design and moved to a different database and its own servers. The seminar and media sections were rebuilt, and campaign landing pages were added for advertising.',
	sections: [
		{
			id: 'redesign', heading: 'A new design', blocks: [
				{ type: 'paragraph', text: 'People come to the academy’s site for different reasons. One is comparing MBA and Mini MBA, another is looking for a free seminar, a third arrived from an ad for a campaign. The new design was built around these scenarios, and each one has its own short path to an inquiry.' },
				{ type: 'comparison', before: '/images/mba-main-old-cmp.png', after: '/images/mba-main-new-cmp.png', beforeAlt: 'MBA homepage before the redesign', afterAlt: 'MBA homepage after the redesign', caption: 'The homepage before and after the redesign.' },
				{ type: 'paragraph', text: 'The program page got a new structure too. Format, duration, price, credentials, and the inquiry button now sit together on the first screen, so visitors see what matters right away.' },
				{ type: 'comparison', before: '/images/mba-program-old-cmp.png', after: '/images/mba-program-new-cmp.png', beforeAlt: 'MBA program page template before the redesign', afterAlt: 'MBA program page template after the redesign', caption: 'The program page template in the old and new design.' }
			]
		},
		{
			id: 'team', heading: 'The team', blocks: [
				{ type: 'paragraph', text: 'The site is built by a DevOps engineer, designers, SEO specialists, and marketers. Development plans the tasks, owns the architecture, reviews code, and ships updates, and writes most of the code itself, from layout to the server side. The interface was shaped together with the designers, and the SEO team’s requirements became page structure and indexing settings.' }
			]
		},
		{
			id: 'stack', heading: 'Moving off MongoDB', blocks: [
				{ type: 'paragraph', text: 'As the load grew, the data moved from MongoDB to PostgreSQL. Server requests were rewritten so each page fetches only the data it needs. Content is managed in Strapi on the team’s own servers, and the Next.js site requests it through GraphQL and serves prebuilt pages wherever content rarely changes.' },
				{ type: 'image', src: '/images/mba-screen-1.png', alt: 'Moscow Business Academy program catalog', caption: 'The program catalog with filters by format and topic.' }
			]
		},
		{
			id: 'sections', heading: 'Seminars, media, and campaigns', blocks: [
				{ type: 'paragraph', text: 'Every section was designed in tandem with the program catalog. Seminars have a calendar and topic filters. The Media section collects articles by business area and nudges readers toward relevant programs. Advertising campaigns get their own landing pages.' },
				{ type: 'image', src: '/images/mba-screen-2.png', alt: 'Moscow Business Academy seminars section', caption: 'Seminars with a calendar and topic filters.' },
				{ type: 'image', src: '/images/mba-journal.png', alt: 'Moscow Business Academy Media section', caption: 'The Media section with articles grouped by business area.' }
			]
		},
		{
			id: 'seo', heading: 'Technical SEO', blocks: [
				{ type: 'paragraph', text: 'SEO specialists set the search requirements, and the technical side belongs to development: URL structure, metadata, sitemaps, redirects, Schema.org markup, loading speed, and indexing. Every new section ships with these settings in place.' },
				{ type: 'paragraph', text: 'Yandex feeds handle advertising placements on partner platforms. The academy’s programs reach each platform automatically, in the format it expects.' }
			]
		},
		{
			id: 'infrastructure', heading: 'Its own servers', blocks: [
				{ type: 'paragraph', text: 'The latest big step was moving from Vercel to the academy’s own servers in Russia. The site, Strapi, PostgreSQL, and three storage services for photos and video now run on infrastructure the team controls. Data, pages, and media files are all stored and served from servers in Russia.' }
			]
		}
	]
}
