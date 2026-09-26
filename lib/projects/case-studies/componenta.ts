import type { CaseStudy } from './types'

export const componentaRu: CaseStudy = {
	subtitle: 'Лендинг юридического бюро с квизом и заявками в amoCRM',
	intro: 'На страницу о банкротстве приходят люди с долгами, звонками коллекторов и десятком тревожных вопросов. Лендинг юридического бюро «Компонента» спокойно объясняет процедуру и доводит человека до разговора с юристом.',
	sections: [
		{
			id: 'page', heading: 'О чём страница', blocks: [
				{ type: 'paragraph', text: 'Страница читается сверху вниз как разговор с юристом. Сначала она называет услугу, потом по шагам объясняет процедуру, отвечает на самые частые страхи и показывает реальные дела. Кнопка заявки встречается на каждом экране, и решиться можно в любой момент.' },
				{ type: 'image', src: '/images/komponenta.png', alt: 'Первый экран лендинга «Компоненты» о банкротстве физических лиц', caption: 'Первый экран с услугой и кнопкой консультации.' }
			]
		},
		{
			id: 'quiz', heading: 'Квиз на две минуты', blocks: [
				{ type: 'paragraph', text: 'В середине страницы стоит квиз «Узнайте за 2 минуты, подходит ли вам процедура банкротства». Он начинается с суммы долга и продолжается ещё несколькими вопросами о ситуации. Человек отвечает, пока только присматривается к услуге, и к последнему шагу уже рассказал юристу главное. В обмен на ответы он получает оценку и оставляет контакты.' },
				{ type: 'image', src: '/images/komponenta-section-1.png', alt: 'Квиз «Узнайте за 2 минуты, подходит ли вам процедура банкротства»', caption: 'Квиз начинается с вопроса о сумме задолженности.' },
				{ type: 'image', src: '/images/komponenta-section-2.png', alt: 'Блок о бесплатной оценке ситуации', caption: 'Бесплатная оценка ситуации расписана по шагам.' }
			]
		},
		{
			id: 'infrastructure', heading: 'Заявки и инфраструктура', blocks: [
				{ type: 'paragraph', text: 'Страница собрана на HTML, CSS и JavaScript. Заявки принимает сервер на Node.js и Express и отправляет в amoCRM, где менеджеры бюро сразу видят новое обращение. Серверную часть настраивали целиком: Nginx принимает входящий трафик и передаёт запросы приложению, PM2 держит процесс Node.js запущенным и возвращает его в работу после сбоя или перезагрузки. Для рекламы и поиска важна скорость, поэтому страница отдаётся быстро, а заголовки, метаданные и семантическая разметка подготовлены для выдачи.' }
			]
		}
	]
}

export const componentaEn: CaseStudy = {
	subtitle: 'A law firm landing page with a quiz and leads in amoCRM',
	intro: 'People land on a bankruptcy page with debts, collection calls, and a dozen anxious questions. The landing page for the law firm Componenta explains the procedure calmly and walks visitors toward a conversation with a lawyer.',
	sections: [
		{
			id: 'page', heading: 'What the page covers', blocks: [
				{ type: 'paragraph', text: 'The page reads top to bottom like a conversation with a lawyer. It names the service first, then walks through the procedure step by step, answers the most common fears, and shows real cases. A request button appears on every screen, so visitors can decide at any point.' },
				{ type: 'image', src: '/images/komponenta.png', alt: 'Componenta landing page hero about personal bankruptcy', caption: 'The first screen with the service and a consultation button.' }
			]
		},
		{
			id: 'quiz', heading: 'A two-minute quiz', blocks: [
				{ type: 'paragraph', text: 'A quiz sits in the middle of the page: “Find out in 2 minutes whether bankruptcy fits you.” It opens with the amount of debt and continues with a few more questions about the situation. Visitors answer while they are still just looking, and by the last step they have told the lawyer the essentials. In exchange for the answers they get an assessment and leave their contacts.' },
				{ type: 'image', src: '/images/komponenta-section-1.png', alt: 'Quiz: find out in 2 minutes whether bankruptcy fits you', caption: 'The quiz starts with the total amount of debt.' },
				{ type: 'image', src: '/images/komponenta-section-2.png', alt: 'Free case assessment block', caption: 'The free case assessment, laid out step by step.' }
			]
		},
		{
			id: 'infrastructure', heading: 'Requests and infrastructure', blocks: [
				{ type: 'paragraph', text: 'The page is built with HTML, CSS, and JavaScript. A Node.js and Express server receives the requests and sends them to amoCRM, where the firm’s managers see each new inquiry right away. The server side was set up end to end: Nginx takes the incoming traffic and passes requests to the app, and PM2 keeps the Node.js process running and brings it back after a crash or a reboot. Speed matters for ads and search alike, so the page loads fast, and titles, metadata, and semantic markup are prepared for search results.' }
			]
		}
	]
}
