import type { CaseStudy } from './types'

export const rentmetalRu: CaseStudy = {
	subtitle: 'Каталог металлопроката с калькуляторами веса и доставки',
	intro: 'Покупатель металлопроката обычно точно знает, что ему нужно: уголок 50×5, двенадцать метров, доставка в Подольск. Сайт RentMetal сделан так, чтобы с таким запросом можно было самому найти позицию, посчитать вес и стоимость доставки и сразу отправить заказ.',
	sections: [
		{
			id: 'catalog', heading: 'Каталог', blocks: [
				{ type: 'paragraph', text: 'Ассортимент разложен по разделам и категориям: арматура, балка, уголок, круг, лист, трубы. У каждой позиции своя карточка, которую можно положить в корзину.' },
				{ type: 'image', src: '/images/rentmetal-home-clean.png', alt: 'Главная страница RentMetal', caption: 'Главная ведёт в основные разделы проката и к заявке.' },
				{ type: 'paragraph', text: 'В каталоге больше трёх тысяч позиций, цены меняются постоянно, поэтому управление ассортиментом с первого дня ведётся в панели администратора на Payload CMS. Менеджер сам правит товары, цены, наличие, описания и фотографии.' },
				{ type: 'image', src: '/images/rentmetal-screen-1-clean.png', alt: 'Раздел сортового проката в каталоге RentMetal', caption: 'Сортовой прокат по категориям.' }
			]
		},
		{
			id: 'calculators', heading: 'Метры, тонны и доставка', blocks: [
				{ type: 'paragraph', text: 'Металл заказывают то в метрах, то в килограммах, то в тоннах, и пересчитывать одно в другое вручную неудобно. Калькулятор металла берёт профиль, марку стали и размеры и выдаёт вес, длину и примерную стоимость.' },
				{ type: 'image', src: '/images/rentmetal-screen-3-clean.png', alt: 'Калькулятор веса и стоимости металла', caption: 'Калькулятор знает десяток профилей, от круга до профильной трубы.' },
				{ type: 'paragraph', text: 'Второй калькулятор считает доставку. Покупатель вводит адрес и выбирает машину, сайт определяет расстояние от МКАД и показывает цену по тарифу.' },
				{ type: 'image', src: '/images/rentmetal-delivery-calculator.png', alt: 'Калькулятор доставки с адресом, выбором машины и картой', caption: 'Адрес, тип машины и маршрут на карте.' }
			]
		},
		{
			id: 'orders', heading: 'Заказ', blocks: [
				{ type: 'paragraph', text: 'Товар попадает в корзину прямо из каталога. Корзина открывается боковой панелью, запоминается в браузере и не пропадает при перезагрузке страницы. Для каждой позиции хранятся наименование, размер, марка стали, количество и цена за тонну.' },
				{ type: 'paragraph', text: 'Оформление проходит в три шага: корзина, форма заказа и страница подтверждения. В форме обязательны имя и телефон, а адрес доставки, почту и комментарий покупатель добавляет по желанию. К заявке можно приложить файлы, например спецификацию, чертёж, таблицу или PDF.' },
				{ type: 'paragraph', text: 'Заказы и обратные звонки принимает один обработчик, и каждая заявка получает свой номер. Менеджеру на почту и в Telegram приходит полный состав заказа вместе с вложениями. Ему остаётся перезвонить покупателю и договориться об условиях.' }
			]
		},
		{
			id: 'seo', heading: 'Как металл ищут в поиске', blocks: [
				{ type: 'paragraph', text: 'Металл ищут очень конкретно: «швеллер 16П цена», «лист оцинкованный 0,5». Под такие запросы собран набор ключевых фраз, и по нему выстроены категории и карточки товаров. Технически настроены метаданные, список страниц для поисковиков, правила индексации и разметка товаров.' },
				{ type: 'image', src: '/images/rentmetal-screen-2-clean.png', alt: 'Страница «Доставка и оплата» на сайте RentMetal', caption: 'Страница доставки и оплаты отвечает на вопросы, которые обычно задают менеджеру по телефону.' }
			]
		},
		{
			id: 'stack', heading: 'Под капотом', blocks: [
				{ type: 'paragraph', text: 'Сайт и панель администратора работают в одном приложении на Next.js и Payload CMS с PostgreSQL. Проект развёрнут на собственном сервере, обновления выпускаются автоматически. Часть иллюстраций на сайте создана генеративными моделями.' },
				{ type: 'paragraph', text: 'Страницы каталога уже индексируются, а заявки с сайта приходят менеджеру в Telegram. Поменять цену на арматуру теперь можно за минуту, прямо в панели администратора.' }
			]
		}
	]
}

export const rentmetalEn: CaseStudy = {
	subtitle: 'A rolled metal catalog with weight and delivery calculators',
	intro: 'Someone buying rolled metal usually knows exactly what they need: a 50×5 angle, twelve meters, delivered to Podolsk. The RentMetal website lets them take that request, find the item, work out the weight and delivery cost, and send the order right away.',
	sections: [
		{
			id: 'catalog', heading: 'The catalog', blocks: [
				{ type: 'paragraph', text: 'The range is organized into sections and categories: rebar, beams, angles, rounds, sheets, pipes. Every item has its own card that goes straight into the cart.' },
				{ type: 'image', src: '/images/rentmetal-home-clean.png', alt: 'RentMetal homepage', caption: 'The homepage leads to the main product sections and the inquiry form.' },
				{ type: 'paragraph', text: 'The catalog holds more than three thousand items and prices change all the time, so inventory management has lived in a Payload CMS admin panel from day one. A manager updates products, prices, stock, descriptions, and photos without help.' },
				{ type: 'image', src: '/images/rentmetal-screen-1-clean.png', alt: 'Long products section in the RentMetal catalog', caption: 'Long products by category.' }
			]
		},
		{
			id: 'calculators', heading: 'Meters, tons, and delivery', blocks: [
				{ type: 'paragraph', text: 'Metal gets ordered in meters, kilograms, or tons, and converting between them by hand is tedious. The metal calculator takes the profile, steel grade, and dimensions and returns weight, length, and an estimated price.' },
				{ type: 'image', src: '/images/rentmetal-screen-3-clean.png', alt: 'Metal weight and price calculator', caption: 'The calculator handles about ten profiles, from round bar to square tube.' },
				{ type: 'paragraph', text: 'The second calculator handles delivery. The buyer enters an address and picks a truck, and the site works out the distance from the Moscow Ring Road and shows the price at the chosen rate.' },
				{ type: 'image', src: '/images/rentmetal-delivery-calculator.png', alt: 'Delivery calculator with address, truck type, and map', caption: 'Address, truck type, and the route on a map.' }
			]
		},
		{
			id: 'orders', heading: 'Orders', blocks: [
				{ type: 'paragraph', text: 'A product goes into the cart straight from the catalog. The cart opens as a side panel, is remembered in the browser, and survives a page reload. Each item keeps its name, size, steel grade, quantity, and price per ton.' },
				{ type: 'paragraph', text: 'Checkout takes three steps: the cart, the order form, and a confirmation page. The form requires a name and a phone number, while the delivery address, email, and a comment are optional. Files can be attached to the request, such as a specification, a drawing, a spreadsheet, or a PDF.' },
				{ type: 'paragraph', text: 'Orders and callback requests go through one handler, and every request gets its own number. The manager receives the full order with attachments by email and in Telegram. All that is left is to call the buyer and agree on terms.' }
			]
		},
		{
			id: 'seo', heading: 'How people search for metal', blocks: [
				{ type: 'paragraph', text: 'People search for metal very specifically, like “channel 16P price” or “galvanized sheet 0.5”. A set of keywords was built around such queries, and categories and product cards follow it. Technically, metadata, the list of pages for search engines, indexing rules, and product markup are all set up.' },
				{ type: 'image', src: '/images/rentmetal-screen-2-clean.png', alt: 'RentMetal delivery and payment page', caption: 'The delivery and payment page answers questions buyers usually ask a manager over the phone.' }
			]
		},
		{
			id: 'stack', heading: 'Under the hood', blocks: [
				{ type: 'paragraph', text: 'The site and the admin panel run as one Next.js and Payload CMS application on PostgreSQL. It is deployed to a dedicated server, with updates released automatically. Some of the illustrations on the site were made with generative models.' },
				{ type: 'paragraph', text: 'Catalog pages are already indexed, and inquiries from the site reach a manager in Telegram. Changing the price of rebar now takes a minute in the admin panel.' }
			]
		}
	]
}
