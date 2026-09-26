import type { CaseStudy } from './types'

export const businessPartnerRu: CaseStudy = {
	subtitle: 'Платформа делового онлайн-журнала',
	intro: 'Business Partner задуман как деловой журнал о бизнесе, инвестициях, маркетинге, управлении и карьере. Статьи пишет редакция, а платформа, на которой они выходят, спроектирована и разработана с нуля.',
	sections: [
		{
			id: 'home', heading: 'Главная как обложка номера', blocks: [
				{ type: 'paragraph', text: 'Главная собрана по логике бумажного журнала. Наверху главный материал и несколько свежих статей, ниже лонгриды, новости, интервью и спецпроекты. У каждого формата своя карточка, поэтому длинный разбор и короткую новость легко отличить с первого взгляда.' },
				{ type: 'image', src: '/images/businessPartner-home-top.png', alt: 'Главная страница Business Partner в тёмной теме', caption: 'Главная в тёмной теме. Переключатель темы стоит в шапке.' }
			]
		},
		{
			id: 'rubrics', heading: 'Рубрики и фильтры', blocks: [
				{ type: 'paragraph', text: 'Рубрики собирают материалы по одной теме. Внутри можно оставить только интервью или только лонгриды и отсортировать статьи по просмотрам или времени чтения.' },
				{ type: 'image', src: '/images/businessPartner-screen-1.png', alt: 'Рубрика «Бизнес» с фильтрами по формату', caption: 'Рубрика «Бизнес» с фильтрами по формату и сортировкой.' },
				{ type: 'paragraph', text: 'Все рубрики устроены одинаково: свой адрес, свой заголовок и описание, одинаковые фильтры. Новая тема добавляется в панели редакции и сразу появляется на сайте вместе со страницей и записью в списке страниц для поисковиков.' },
				{ type: 'image', src: '/images/businessPartner-screen-2.png', alt: 'Рубрика «Инвестиции»', caption: 'Рубрика «Инвестиции» построена на том же шаблоне.' }
			]
		},
		{
			id: 'article', heading: 'Страница статьи', blocks: [
				{ type: 'paragraph', text: 'У статьи есть авторы, обложка, время чтения, краткое содержание и колонка похожих материалов справа. Дочитав текст, читатель сразу видит, что ещё почитать по той же теме. В текст можно вставить блоки «Читайте также» и подборки рекомендаций, которые редакция собирает вручную.' },
				{ type: 'image', src: '/images/businessPartner-article-v2.png', alt: 'Страница статьи Business Partner', caption: 'Статья с авторами, обложкой и подборкой материалов из той же рубрики.' }
			]
		},
		{
			id: 'admin', heading: 'Панель редакции', blocks: [
				{ type: 'paragraph', text: 'Контентом управляют в Strapi 5. В панели заведены статьи, рубрики, теги, авторы и эксперты. Статья собирается из блоков: текст, заголовок, изображение, цитата, видео, галерея, таблица, список, выделенная мысль, вывод и подборки «Читайте также». Блоки можно расставлять в любом порядке, поэтому лонгрид, интервью и короткая новость собираются из одного набора элементов.' },
				{ type: 'paragraph', text: 'У каждой статьи есть отдельная вкладка с настройками поиска: заголовок и описание для поисковиков, адрес канонической страницы, запреты на индексацию и переход по ссылкам, а также описание для превью в соцсетях. Картинки загружаются в облачное хранилище S3, а у каждого материала показываются просмотры и время чтения.' }
			]
		},
		{
			id: 'stack', heading: 'Технологии', blocks: [
				{ type: 'paragraph', text: 'Сайт написан на Next.js 16, React 19 и TypeScript, стили на Tailwind CSS 4, интерфейс собран из компонентов shadcn/ui и Radix. Тёмную тему переключает next-themes, карусели построены на Embla, а текст из редактора перед выводом проходит очистку sanitize-html. Панель редакции работает на Strapi 5 и PostgreSQL. Оба сервиса упакованы в Docker и выкатываются через GitLab CI, а поиск по журналу работает через собственный маршрут сайта.' }
			]
		},
		{
			id: 'seo', heading: 'Поиск', blocks: [
				{ type: 'paragraph', text: 'Next.js выбран во многом ради поиска. Страницы статей и рубрик отдаются готовым HTML, у каждой свой адрес вида «рубрика/статья», заголовок, описание и каноническая ссылка. Хлебные крошки на странице продублированы в микроразметке, а сами статьи описаны как BlogPosting с автором, издателем и экспертами, проверившими материал.' },
				{ type: 'paragraph', text: 'Список страниц для поисковиков собирается сам из статей, рубрик и статических разделов и обновляется при каждой публикации.' }
			]
		},
		{
			id: 'outcome', heading: 'Итог', blocks: [
				{ type: 'paragraph', text: 'У Business Partner теперь есть всё, что нужно деловому изданию. Главная выстроена как обложка журнала, рубрики с фильтрами собирают материалы по темам, а страница статьи ведёт читателя к следующему тексту. Редакция сама ведёт контент в собственной панели и выпускает материалы без участия разработчиков. Сайт на Next.js быстро отдаёт готовые страницы, а структура адресов, разметка и список страниц для поисковиков заложены в платформу с самого начала.' }
			]
		}
	]
}

export const businessPartnerEn: CaseStudy = {
	subtitle: 'A platform for an online business magazine',
	intro: 'Business Partner is designed as a magazine about business, investing, marketing, management, and careers. An editorial team writes the articles, while the platform they are published on was designed and built from scratch.',
	sections: [
		{
			id: 'home', heading: 'A homepage like a magazine cover', blocks: [
				{ type: 'paragraph', text: 'The homepage follows the logic of a print magazine. The lead story and a few fresh pieces sit at the top, with long reads, news, interviews, and special projects below. Each format has its own card, so a long analysis and a short news item are easy to tell apart at a glance.' },
				{ type: 'image', src: '/images/businessPartner-home-top.png', alt: 'Business Partner homepage in dark mode', caption: 'The homepage in dark mode. The theme switch sits in the header.' }
			]
		},
		{
			id: 'rubrics', heading: 'Sections and filters', blocks: [
				{ type: 'paragraph', text: 'Sections group articles by topic. Inside one, readers can keep only interviews or only long reads and sort by views or reading time.' },
				{ type: 'image', src: '/images/businessPartner-screen-1.png', alt: 'Business section with format filters', caption: 'The Business section with format filters and sorting.' },
				{ type: 'paragraph', text: 'All sections work the same way: their own URL, their own title and description, and the same filters. A new topic is added in the editorial panel and appears on the site at once, with its page and an entry in the list of pages for search engines.' },
				{ type: 'image', src: '/images/businessPartner-screen-2.png', alt: 'Investing section', caption: 'The Investing section is built on the same template.' }
			]
		},
		{
			id: 'article', heading: 'The article page', blocks: [
				{ type: 'paragraph', text: 'An article has authors, a cover image, reading time, a summary, and a column of related pieces on the right. Once readers finish, they immediately see what else to read on the same topic. The text can hold “Read also” blocks and recommendation selections that the editors assemble by hand.' },
				{ type: 'image', src: '/images/businessPartner-article-v2.png', alt: 'Business Partner article page', caption: 'An article with authors, a cover, and more pieces from the same section.' }
			]
		},
		{
			id: 'admin', heading: 'The editorial panel', blocks: [
				{ type: 'paragraph', text: 'Content is managed in Strapi 5. The panel holds articles, sections, tags, authors, and experts. An article is assembled from blocks: text, heading, image, quote, video, gallery, table, list, highlighted thought, conclusion, and “Read also” selections. Blocks can go in any order, so a long read, an interview, and a short news item are built from the same set of elements.' },
				{ type: 'paragraph', text: 'Every article has a separate tab with search settings: the title and description for search engines, the canonical page address, bans on indexing and following links, and the description for social previews. Images are uploaded to S3 cloud storage, and every piece shows its views and reading time.' }
			]
		},
		{
			id: 'stack', heading: 'Technologies', blocks: [
				{ type: 'paragraph', text: 'The site is written in Next.js 16, React 19, and TypeScript, styled with Tailwind CSS 4, and the interface is assembled from shadcn/ui and Radix components. Dark mode is switched by next-themes, the carousels run on Embla, and text from the editor is cleaned by sanitize-html before it is displayed. The editorial panel runs on Strapi 5 and PostgreSQL. Both services are packaged in Docker and shipped through GitLab CI, and the search across the magazine works through the site’s own route.' }
			]
		},
		{
			id: 'seo', heading: 'Search', blocks: [
				{ type: 'paragraph', text: 'Next.js was chosen largely for search. Article and section pages are served as ready HTML, and each has its own “section/article” URL, title, description, and canonical link. The breadcrumbs on the page are duplicated in structured data, and the articles themselves are described as BlogPosting with an author, a publisher, and the experts who reviewed the piece.' },
				{ type: 'paragraph', text: 'The list of pages for search engines builds itself from articles, sections, and static pages and refreshes with every publication.' }
			]
		},
		{
			id: 'outcome', heading: 'Outcome', blocks: [
				{ type: 'paragraph', text: 'Business Partner now has everything a business publication needs. The homepage is laid out like a magazine cover, sections with filters group articles by topic, and the article page leads the reader to the next piece. The editorial team runs the content in its own panel and publishes without developers. The Next.js site serves ready pages quickly, and the URL structure, markup, and list of pages for search engines were built into the platform from the start.' }
			]
		}
	]
}
