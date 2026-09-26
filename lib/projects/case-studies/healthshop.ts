import type { CaseStudy } from './types'

export const healthshopRu: CaseStudy = {
	subtitle: 'Интернет-магазин дистрибьютора Nature’s Sunshine за неделю',
	intro: 'Дистрибьютору продукции Nature’s Sunshine нужен был собственный магазин, и как можно скорее. Первая версия с каталогом, корзиной и панелью администратора была готова через неделю, включая дизайн интерфейса.',
	sections: [
		{
			id: 'order', heading: 'Главная страница', blocks: [
				{ type: 'paragraph', text: 'Главная работает как витрина. Вверху шапка с навигацией по разделам «Продукты», «Доставка и оплата» и «Контакты» и кнопкой корзины со счётчиком товаров. Под ней первый экран с крупным заголовком и фотографией бренда. Ниже идут готовые наборы и популярные товары, откуда покупатель переходит в каталог.' },
				{ type: 'image', src: '/images/healthshop-home-16x10.png', alt: 'Главная страница магазина Nature’s Sunshine', caption: 'Главная страница магазина.' }
			]
		},
		{
			id: 'catalog', heading: 'Каталог с фильтрами', blocks: [
				{ type: 'paragraph', text: 'Каталог фильтруется по категориям и по цене: до 1000 рублей, от 1000 до 3000 и больше 3000. Товары сортируются по цене в обе стороны и по алфавиту, а кнопка «Показать ещё» подгружает следующую порцию. Из карточки по кнопке «Подробнее» открывается описание с ценой, где сразу можно выбрать количество.' },
				{ type: 'image', src: '/images/healthshop-filters-16x10.png', alt: 'Каталог с фильтром по цене и меню сортировки', caption: 'Фильтр по цене и сортировка в каталоге.' }
			]
		},
		{
			id: 'cart', heading: 'Корзина и заказ', blocks: [
				{ type: 'paragraph', text: 'В корзине собрана таблица заказа: название, категория, количество, цена и сумма по каждой позиции, внизу итог и кнопка «Оформить заказ». Количество меняется прямо в строке. Заказ сразу прилетает дистрибьютору на почту и в Telegram, а продажу он завершает уже в разговоре с клиентом.' },
				{ type: 'image', src: '/images/healthshop-cart-16x10.png', alt: 'Корзина с тремя товарами и итоговой суммой', caption: 'Корзина с итоговой суммой заказа.' }
			]
		},
		{
			id: 'admin', heading: 'Панель администратора', blocks: [
				{ type: 'paragraph', text: 'Панель администратора написана под задачи этого магазина. В ней дистрибьютор добавляет товары, меняет цены и категории и смотрит статистику по заявкам. Обновлять каталог он может в любой момент своими руками.' }
			]
		},
		{
			id: 'stack', heading: 'Стек и переезд', blocks: [
				{ type: 'paragraph', text: 'Интерфейс собран на Next.js, TypeScript, Tailwind CSS и shadcn/ui, сервер работает на Express и MongoDB. Сначала магазин работал на Vercel, позже переехал на собственный сервер с настроенным CI/CD.' }
			]
		},
		{
			id: 'seo', heading: 'SEO с первого дня', blocks: [
				{ type: 'paragraph', text: 'Домен был совсем новый, поэтому поисковая структура появилась раньше самого магазина. Набор поисковых запросов разбит на группы, и под них выстроены категории и карточки товаров. Метаданные, разметка, список страниц для поисковиков и настройки индексации были готовы к запуску.' },
				{ type: 'paragraph', text: 'За неделю проект прошёл путь от пустого репозитория до первых заказов, которые дистрибьютор получал прямо в Telegram.' }
			]
		}
	]
}

export const healthshopEn: CaseStudy = {
	subtitle: 'An online store for a Nature’s Sunshine distributor in one week',
	intro: 'A distributor of Nature’s Sunshine products needed their own store, and fast. The first version with a catalog, cart, and admin panel was ready in one week, interface design included.',
	sections: [
		{
			id: 'order', heading: 'The homepage', blocks: [
				{ type: 'paragraph', text: 'The homepage works as a storefront. At the top is a header with navigation to Products, Delivery and payment, and Contacts, plus a cart button with an item counter. Below it comes the first screen with a large headline and a brand photo. Ready-made bundles and popular products follow, leading the visitor into the catalog.' },
				{ type: 'image', src: '/images/healthshop-home-16x10.png', alt: 'Nature’s Sunshine store homepage', caption: 'The store homepage.' }
			]
		},
		{
			id: 'catalog', heading: 'A catalog with filters', blocks: [
				{ type: 'paragraph', text: 'The catalog filters by category and by price: under 1,000 rubles, 1,000 to 3,000, and over 3,000. Products sort by price in both directions and alphabetically, and the “Show more” button loads the next batch. The “Details” button opens a description with the price, where the quantity can be picked right away.' },
				{ type: 'image', src: '/images/healthshop-filters-16x10.png', alt: 'Catalog with a price filter and the sorting menu', caption: 'The price filter and sorting in the catalog.' }
			]
		},
		{
			id: 'cart', heading: 'Cart and order', blocks: [
				{ type: 'paragraph', text: 'The cart collects the order in a table: name, category, quantity, price, and the sum for each item, with the total and a “Place order” button below. Quantity changes right in the row. The order lands in the distributor’s email and Telegram instantly, and the sale is closed in a conversation with the customer.' },
				{ type: 'image', src: '/images/healthshop-cart-16x10.png', alt: 'Cart with three products and the total', caption: 'The cart with the order total.' }
			]
		},
		{
			id: 'admin', heading: 'A custom admin panel', blocks: [
				{ type: 'paragraph', text: 'The admin panel was written for this store specifically. The distributor adds products, changes prices and categories, and checks order statistics there, and can update the catalog at any time.' }
			]
		},
		{
			id: 'stack', heading: 'Stack and migration', blocks: [
				{ type: 'paragraph', text: 'The interface is built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui, and the server runs on Express and MongoDB. The store started on Vercel and later moved to a dedicated server with CI/CD.' }
			]
		},
		{
			id: 'seo', heading: 'SEO from day one', blocks: [
				{ type: 'paragraph', text: 'The domain was brand new, so the search structure came before the store itself. The set of search queries was split into groups, and categories and product cards follow them. Metadata, markup, the list of pages for search engines, and indexing settings were all ready at launch.' },
				{ type: 'paragraph', text: 'In one week the project went from an empty repository to the first orders arriving straight in the distributor’s Telegram.' }
			]
		}
	]
}
