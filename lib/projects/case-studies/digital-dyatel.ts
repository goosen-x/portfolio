import type { CaseStudy } from './types'

export const digitalDyatelRu: CaseStudy = {
	subtitle: 'Сайт агентства по управлению репутацией: разработка и SEO',
	intro: 'Digital Dyatel занимается репутацией компаний в интернете: убирает негатив из поисковой выдачи и работает с отзывами. Люди приходят с бедой вроде плохой статьи на первой странице Яндекса и слов «ORM» и «SERM» не знают. Сайт объясняет каждую услугу простыми словами и ведёт человека к заявке.',
	sections: [
		{
			id: 'story', heading: 'Сайт как разговор', blocks: [
				{ type: 'paragraph', text: 'Сайт выстроен как разговор с клиентом. Сначала он объясняет, как отзывы и выдача влияют на продажи, потом раскладывает услуги, показывает результаты, команду и отзывы и заканчивается формой заявки. На каждом шаге человек получает ответ на вопрос, который у него возникает следующим.' },
				{ type: 'paragraph', text: 'Первый экран сразу называет услугу. Под заголовком «Управление репутацией в интернете» стоят направления работы, а главная кнопка предлагает бесплатный SERM-аудит.' },
				{ type: 'image', src: '/images/digital-dyatel.png', alt: 'Первый экран сайта Digital Dyatel', caption: 'Первый экран с направлениями работы и бесплатным SERM-аудитом.' }
			]
		},
		{
			id: 'services', heading: 'Услуги без жаргона', blocks: [
				{ type: 'paragraph', text: 'Аббревиатуры ORM и SERM понятны не каждому клиенту, поэтому у каждого направления своя карточка с названием, описанием задачи простыми словами и стартовой ценой. Работа с отзывами, репутация с нуля, позитивный контент и мониторинг читаются как набор решений, а не как список терминов.' },
				{ type: 'image', src: '/images/digitalDyatel-screen-1.png', alt: 'Раздел «Наши услуги» на сайте Digital Dyatel', caption: 'У каждого направления в разделе услуг своя карточка с описанием и стартовой ценой.' }
			]
		},
		{
			id: 'trust', heading: 'Доверие', blocks: [
				{ type: 'paragraph', text: 'Блок достижений собирает главные цифры агентства: больше 20 брендов выведено в ТОП-10 поисковой выдачи, устранено свыше 200 единиц негатива, рейтинг удовлетворённости клиентов составляет 4,9 из 5. Кейсы показаны с пометкой об NDA: полное раскрытие проектов политикой компании недопустимо, поэтому у карточек стоит кнопка «Смотреть кейс», а рядом кнопка «Хочу также».' },
				{ type: 'paragraph', text: 'Перед формой заявки посетитель знакомится с командой. Карточки с фотографиями, именами и должностями листаются каруселью.' },
				{ type: 'image', src: '/images/digitalDyatel-team-blur.png', alt: 'Команда Digital Dyatel', caption: 'Люди, которые будут работать над репутацией клиента.' },
				{ type: 'paragraph', text: 'В общую ленту отзывов встроены видеоотзывы. Карточка с кадром из ролика и кнопкой «Смотреть отзыв» стоит среди текстовых, так что посетитель может прочитать историю клиента или услышать её от него самого.' },
				{ type: 'image', src: '/images/digitalDyatel-reviews-blur.png', alt: 'Раздел отзывов на сайте Digital Dyatel с видеоотзывом', caption: 'Текстовые и видеоотзывы клиентов в одной карусели.' }
			]
		},
		{
			id: 'build', heading: 'Разработка', blocks: [
				{ type: 'paragraph', text: 'Формы стоят в нескольких местах сайта, включая финальный блок «Остались вопросы?» с тремя полями и отдельными согласиями на обработку данных. Заявки уходят на почту агентства, а для быстрой связи в подвале есть ссылки на WhatsApp и Telegram.' },
				{ type: 'paragraph', text: 'Команда, отзывы и кейсы листаются каруселями, а частые вопросы собраны в раскрывающиеся списки. Благодаря этому длинный сайт остаётся компактным на телефоне.' }
			]
		},
		{
			id: 'seo', heading: 'SEO и результат', blocks: [
				{ type: 'paragraph', text: 'Агентство продаёт работу с поисковой выдачей, так что его собственный сайт обязан хорошо в ней выглядеть. Под проект подобраны запросы, по ним выстроены структура и заголовки разделов, доработаны тексты услуг, FAQ и кейсов. Настроены индексация в Яндексе и Google, скорость загрузки и аналитика.' },
				{ type: 'paragraph', text: 'Блок частых вопросов закрывает две задачи сразу. Он снимает страхи клиента и отвечает на запросы, по которым люди ищут решение, например «как понять, что компании необходимо начать работу с репутацией» и «могут ли конкуренты атаковать мою репутацию».' },
				{ type: 'paragraph', text: 'Сайт работает, индексируется и приносит агентству заявки. Каждый блок сайта ведёт к одной цели: объясняет услугу, показывает людей за ней или даёт ещё один повод написать.' }
			]
		}
	]
}

export const digitalDyatelEn: CaseStudy = {
	subtitle: 'Website for an online reputation agency: development and SEO',
	intro: 'Digital Dyatel looks after companies’ online reputation: it pushes negative results out of search and works with reviews. People arrive with a problem like a bad article on the first page of Yandex and have never heard the terms “ORM” or “SERM”. The site explains each service in plain words and leads the visitor to an inquiry.',
	sections: [
		{
			id: 'story', heading: 'A site that talks to the client', blocks: [
				{ type: 'paragraph', text: 'The site is structured like a conversation with a client. First it explains how reviews and search results affect sales, then lays out the services, shows results, the team, and reviews, and ends with an inquiry form. At every step the visitor gets an answer to the question that comes up next.' },
				{ type: 'paragraph', text: 'The first screen names the service right away. Below the headline “Online reputation management” come the service areas, and the main button offers a free SERM audit.' },
				{ type: 'image', src: '/images/digital-dyatel.png', alt: 'Digital Dyatel website hero section', caption: 'The first screen with service areas and a free SERM audit offer.' }
			]
		},
		{
			id: 'services', heading: 'Services without jargon', blocks: [
				{ type: 'paragraph', text: 'Terms like ORM and SERM mean little to most clients, so every service area gets its own card with a name, a plain-language description of the task, and a starting price. Review management, reputation from scratch, positive content, and monitoring read as a set of solutions rather than a list of terms.' },
				{ type: 'image', src: '/images/digitalDyatel-screen-1.png', alt: 'Our services section on the Digital Dyatel website', caption: 'Each service area gets its own card with a description and a starting price.' }
			]
		},
		{
			id: 'trust', heading: 'Building trust', blocks: [
				{ type: 'paragraph', text: 'The achievements block gathers the agency’s main numbers: more than 20 brands brought into the top 10 of search results, over 200 pieces of negative content removed, and a client satisfaction rating of 4.9 out of 5. Cases are shown with an NDA note: company policy does not allow full disclosure of projects, so each card has a “View case” button, with a “I want the same” button next to them.' },
				{ type: 'paragraph', text: 'Before the inquiry form, visitors meet the team. Cards with photos, names, and roles scroll as a carousel.' },
				{ type: 'image', src: '/images/digitalDyatel-team-blur.png', alt: 'Digital Dyatel team', caption: 'The people who will work on the client’s reputation.' },
				{ type: 'paragraph', text: 'Video reviews are built into the general review feed. A card with a still from the clip and a “Watch the review” button sits among the text ones, so a visitor can either read a client’s story or hear it from the client in person.' },
				{ type: 'image', src: '/images/digitalDyatel-reviews-blur.png', alt: 'Reviews section on the Digital Dyatel website with a video review', caption: 'Text and video reviews in one carousel.' }
			]
		},
		{
			id: 'build', heading: 'Development', blocks: [
				{ type: 'paragraph', text: 'Forms appear in several places across the site, including the final “Still have questions?” block with three fields and separate consents to data processing. Inquiries go to the agency’s inbox, and the footer offers WhatsApp and Telegram links for quick contact.' },
				{ type: 'paragraph', text: 'The team, reviews, and cases scroll as carousels, and frequent questions are collected in expandable lists. That keeps a long site compact on a phone.' }
			]
		},
		{
			id: 'seo', heading: 'SEO and results', blocks: [
				{ type: 'paragraph', text: 'The agency sells work on search results, so its own site has to look good in them. Target queries were collected for the project, and the structure and section headings follow them. The texts for services, the FAQ, and cases were reworked. Indexing in Yandex and Google, loading speed, and analytics are all set up.' },
				{ type: 'paragraph', text: 'The FAQ block does two jobs at once. It eases the client’s fears and answers the queries people use to look for a solution, such as “how to tell that a company needs to start working on its reputation” and “can competitors attack my reputation.”' },
				{ type: 'paragraph', text: 'The site is live, indexed, and bringing the agency inquiries. Every block of the site serves one goal: explaining a service, showing the people behind it, or giving one more reason to get in touch.' }
			]
		}
	]
}
