import type { CaseStudy } from './types'

export const pixeltoolRu: CaseStudy = {
	subtitle: 'Как папка с закладками выросла в каталог бесплатных инструментов',
	intro: 'Генератор паролей, конвертер единиц, QR-код для ссылки. Такие мелочи нужны каждый день, и закладки на них быстро перестают помещаться на панели браузера. PixelTool начинался как одна страница, куда эти инструменты собирались по мере надобности. Со временем набор вырос в целый каталог.',
	sections: [
		{
			id: 'origin', heading: 'Всё под рукой', blocks: [
				{ type: 'paragraph', text: 'Первые инструменты писались для внутренних нужд. Когда их набралось несколько десятков, сайт открыли для всех и ввели простое правило: каждый виджет решает одну задачу и запускается сразу, как только открыта страница.' },
				{ type: 'paragraph', text: 'Новые инструменты появляются по двум поводам: задача, в которую упёрлись в работе, или запрос, который всплыл в поисковой статистике.' },
				{ type: 'image', src: '/images/pixeltool-home.png', alt: 'Главная страница PixelTool', caption: 'Главная ведёт к популярным инструментам и каталогу.' }
			]
		},
		{
			id: 'catalog', heading: 'Каталог и сами инструменты', blocks: [
				{ type: 'paragraph', text: 'Инструменты разложены по темам: разработка, текст, изображения и PDF, финансы, здоровье, стройка, авто и даже эзотерика. Нужный находится поиском или через категорию.' },
				{ type: 'image', src: '/images/pixeltool-screen-1.png', alt: 'Каталог инструментов PixelTool с категориями и поиском', caption: 'Каталог со счётчиком инструментов в каждой категории.' },
				{ type: 'paragraph', text: 'Каждый инструмент выдаёт результат сразу. QR-код перерисовывается, пока вводишь ссылку. Новый пароль появляется одной кнопкой, а рядом показана оценка, за какое время его можно подобрать перебором. Так сразу видно, чем длиннее пароль, тем он надёжнее.' },
				{ type: 'image', src: '/images/pixeltool-qr.png', alt: 'Генератор QR-кодов на PixelTool', caption: 'QR-код обновляется вместе с текстом ссылки.' },
				{ type: 'image', src: '/images/pixeltool-password.png', alt: 'Генератор паролей на PixelTool', caption: 'Генератор паролей с оценкой стойкости.' },
				{ type: 'paragraph', text: 'Картинки сжимаются прямо в браузере, файл остаётся на компьютере пользователя. Ползунок качества и живое сравнение размера показывают, сколько килобайт удалось сэкономить.' },
				{ type: 'image', src: '/images/pixeltool-compress.png', alt: 'Инструмент сжатия изображений на PixelTool', caption: 'Сжатие изображений с ползунком качества.' }
			]
		},
		{
			id: 'engineering', heading: 'Один реестр для всех инструментов', blocks: [
				{ type: 'paragraph', text: 'Стек проекта: Next.js, TypeScript, Tailwind CSS и shadcn/ui. Все инструменты описаны в едином реестре, и из него автоматически строятся каталог, категории, навигация, список страниц для поисковиков и блоки похожих инструментов. Новый виджет сам появляется во всех этих местах.' },
				{ type: 'paragraph', text: 'Новый инструмент собирается по готовому шаблону: скрипт создаёт заготовку страницы, и остаётся написать сам расчёт. Перед публикацией код проверяется на ошибки типов, уязвимости, доступность и скорость работы. В работе над кодом и текстами участвуют ИИ-ассистенты Claude и Codex.' }
			]
		},
		{
			id: 'seo', heading: 'Поиск', blocks: [
				{ type: 'paragraph', text: 'Почти весь трафик приходит из поиска, поэтому у каждого инструмента своя страница с понятным адресом и объяснением задачи. Запросы с небольшим и средним спросом собираются в группы, а показы и клики по страницам регулярно сверяются со спросом.' },
				{ type: 'paragraph', text: 'Блог отвечает на вопросы, которые возникают после расчёта. Например, как работает сложный процент или почему 0,1 в двоичной системе превращается в бесконечную дробь.' },
				{ type: 'image', src: '/images/pixeltool-screen-2.png', alt: 'Блог PixelTool', caption: 'Статьи блога объясняют расчёты, которые стоят за инструментами.' }
			]
		},
		{
			id: 'numbers', heading: 'Итог', blocks: [
				{ type: 'paragraph', text: 'Из папки закладок PixelTool превратился в каталог, который пополняется без лишних усилий. Новый инструмент попадает в единый реестр, и сайт сам показывает его в каталоге, навигации и списке страниц для поисковиков. Шаблон и проверки перед публикацией позволяют выпускать страницы быстро и с одинаковым качеством.' },
				{ type: 'paragraph', text: 'За три месяца сайт собрал несколько тысяч посетителей, и почти все они пришли из поисковых систем. Люди находят инструмент под свою задачу по конкретному запросу, а блог отвечает на вопросы, которые появляются после расчёта.' },
				{ type: 'paragraph', text: 'В итоге получился сервис, где каждая страница решает одну задачу и сама находит своего читателя через поиск. Такая схема масштабируется просто: чем больше инструментов, тем шире охват запросов.' }
			]
		}
	]
}

export const pixeltoolEn: CaseStudy = {
	subtitle: 'How a bookmarks folder grew into a catalog of free tools',
	intro: 'A password generator, a unit converter, a QR code for a link. Small things like these come up every day, and bookmarks to them soon overflow the browser toolbar. PixelTool started as a single page where these tools were collected as needed. Over time the set grew into a full catalog.',
	sections: [
		{
			id: 'origin', heading: 'Everything at hand', blocks: [
				{ type: 'paragraph', text: 'The first tools were written for internal use. Once there were a few dozen, the site opened to everyone with a simple rule: each widget solves one task and starts working as soon as the page opens.' },
				{ type: 'paragraph', text: 'New tools appear for one of two reasons: a task that came up at work, or a query that surfaced in search statistics.' },
				{ type: 'image', src: '/images/pixeltool-home.png', alt: 'PixelTool homepage', caption: 'The homepage leads to popular tools and the catalog.' }
			]
		},
		{
			id: 'catalog', heading: 'The catalog and the tools', blocks: [
				{ type: 'paragraph', text: 'Tools are grouped by topic: development, text, images and PDF, finance, health, construction, cars, and even esoterics. The right one is a search or a category click away.' },
				{ type: 'image', src: '/images/pixeltool-screen-1.png', alt: 'PixelTool catalog with categories and search', caption: 'The catalog with a tool count for every category.' },
				{ type: 'paragraph', text: 'Each tool returns a result right away. The QR code redraws while you type the link. A new password takes one click, and right next to it is an estimate of how long it would take to guess by brute force. It shows at once that the longer the password, the stronger it is.' },
				{ type: 'image', src: '/images/pixeltool-qr.png', alt: 'PixelTool QR code generator', caption: 'The QR code updates along with the link text.' },
				{ type: 'image', src: '/images/pixeltool-password.png', alt: 'PixelTool password generator', caption: 'The password generator with a strength estimate.' },
				{ type: 'paragraph', text: 'Images are compressed right in the browser, and the file stays on the user’s computer. A quality slider and a live size comparison show how many kilobytes were saved.' },
				{ type: 'image', src: '/images/pixeltool-compress.png', alt: 'PixelTool image compression tool', caption: 'Image compression with a quality slider.' }
			]
		},
		{
			id: 'engineering', heading: 'One registry for all the tools', blocks: [
				{ type: 'paragraph', text: 'The stack is Next.js, TypeScript, Tailwind CSS, and shadcn/ui. Every tool is described in a single registry, which automatically builds the catalog, categories, navigation, the list of pages for search engines, and related-tool blocks. A new widget shows up in all of them on its own.' },
				{ type: 'paragraph', text: 'A new tool is built from a ready template: a script creates the page skeleton, and only the calculation itself remains to be written. Before release, the code is checked for type errors, vulnerabilities, accessibility, and speed. The AI assistants Claude and Codex take part in both the code and the copy.' }
			]
		},
		{
			id: 'seo', heading: 'Search', blocks: [
				{ type: 'paragraph', text: 'Almost all traffic comes from search, so every tool has its own page with a clear URL and an explanation of the task. Queries with small and medium demand are grouped, and page impressions and clicks are regularly checked against demand.' },
				{ type: 'paragraph', text: 'The blog answers the questions that come up after a calculation, such as how compound interest works or why 0.1 turns into an endless fraction in binary.' },
				{ type: 'image', src: '/images/pixeltool-screen-2.png', alt: 'PixelTool blog', caption: 'Blog articles explain the math behind the tools.' }
			]
		},
		{
			id: 'numbers', heading: 'Outcome', blocks: [
				{ type: 'paragraph', text: 'From a folder of bookmarks, PixelTool grew into a catalog that fills up with little effort. A new tool goes into the single registry, and the site shows it in the catalog, in the navigation, and in the list of pages for search engines on its own. The template and the checks before release let pages ship quickly and with the same quality.' },
				{ type: 'paragraph', text: 'In three months the site gathered several thousand visitors, and almost all of them came from search engines. People find a tool for their task by a specific query, and the blog answers the questions that come up after a calculation.' },
				{ type: 'paragraph', text: 'The result is a service where every page solves one task and finds its own reader through search. The scheme scales simply: the more tools there are, the wider the range of queries it covers.' }
			]
		}
	]
}
