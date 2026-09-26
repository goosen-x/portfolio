import type { CaseStudy } from './types'

export const autozorroRu: CaseStudy = {
	subtitle: 'Сайт с личным кабинетом для программы лояльности на рынке автозапчастей',
	intro: 'AutoZorro начинался как Telegram-бот, где руководители сервисов техобслуживания копили кэшбэк за товары брендов-партнёров. Со временем часть участников потеряла стабильный доступ к Telegram, и программе понадобились собственный сайт и приложение для телефона. Бот продолжает работать рядом с ними.',
	sections: [
		{
			id: 'site', heading: 'Из бота на сайт', blocks: [
				{ type: 'paragraph', text: 'Главной задачей было сохранить для участника привычный порядок действий: он закупает запчасти у брендов-партнёров, подтверждает отчёты и смотрит, как растёт баланс. В боте это была цепочка сообщений, а на сайте стало несколько экранов, которые одинаково удобно открывать с компьютера и с телефона.' },
				{ type: 'image', src: '/images/autozorro-screen-1.png', alt: 'Публичная страница программы лояльности AutoZorro', caption: 'Публичная страница рассказывает, как устроена программа, и ведёт к регистрации.' },
				{ type: 'image', src: '/images/autozorro-terms.png', alt: 'Условия участия в AutoZorro для разных ролей', caption: 'У СТО, магазина и менеджера дистрибьютора свои условия участия.' }
			]
		},
		{
			id: 'login', heading: 'Вход по номеру телефона', blocks: [
				{ type: 'paragraph', text: 'Войти в AutoZorro можно по номеру телефона. Участник сам выбирает, куда прислать код: в Telegram, звонком или по SMS. Вход занимает несколько секунд.' },
				{ type: 'image', src: '/images/autozorro-preview.png', alt: 'Экран входа в AutoZorro по номеру телефона', caption: 'Экран входа с тремя способами получить код.' }
			]
		},
		{
			id: 'cabinet', heading: 'Кабинет участника', blocks: [
				{ type: 'paragraph', text: 'В кабинете собрано всё, ради чего участник заходит на сайт: баланс по каждому бренду, отчёты о продажах, акции и новости программы. Отсюда же деньги выводятся на карту.' },
				{ type: 'image', src: '/images/autozorro-dashboard-redacted.png', alt: 'Главный экран личного кабинета AutoZorro', caption: 'На главном экране кабинета баланс, отчёты и акции брендов.' },
				{ type: 'paragraph', text: 'Больше всего времени ушло на логику вывода средств и интеграцию с партнёром, через которого деньги доходят до карты. Сам экран устроен просто: две карточки, по которым сразу видно, сколько денег можно вывести и что происходит с заявкой.' },
				{ type: 'image', src: '/images/autozorro-payout-redacted.png', alt: 'Экран вывода средств в AutoZorro', caption: 'Баланс по каждому бренду и переход к выплате на одном экране.' },
				{ type: 'image', src: '/images/autozorro-news.png', alt: 'Новости программы в кабинете AutoZorro', caption: 'Новости о новых брендах и условиях программы участник читает прямо в кабинете.' }
			]
		},
		{
			id: 'stack', heading: 'Что за кабинетом', blocks: [
				{ type: 'paragraph', text: 'Кабинет держится на нескольких связанных частях. Сайт написан на Next.js и TypeScript, интерфейс собран из компонентов shadcn/ui и оформлен на Tailwind CSS, за данные отвечают Prisma и Redis. Код для входа приходит в Telegram, звонком или по SMS на выбор участника, а деньги доходят до карты через партнёра, который занимается выплатами.' }
			]
		},
		{
			id: 'pwa', heading: 'Приложение на экране телефона', blocks: [
				{ type: 'paragraph', text: 'Сайт устанавливается на телефон как приложение и присылает уведомления. Иконка AutoZorro появляется на экране телефона рядом с мессенджерами.' }
			]
		},
		{
			id: 'outcome', heading: 'Итог', blocks: [
				{ type: 'paragraph', text: 'Бот в Telegram работает по-прежнему, а рядом с ним появились сайт и приложение на экране телефона. Участник выбирает то, что удобнее. Число пользователей выросло. От цепочки сообщений программа пришла к полноценному кабинету: баланс по каждому бренду, отчёты о продажах, акции, новости и вывод денег на карту доступны с любого устройства.' }
			]
		}
	]
}

export const autozorroEn: CaseStudy = {
	subtitle: 'A website with a personal dashboard for an auto parts loyalty program',
	intro: 'AutoZorro started as a Telegram bot where heads of car service businesses earned cashback on products of partner brands. Over time some participants lost stable access to Telegram, and the program needed its own website and a phone app. The bot keeps working alongside them.',
	sections: [
		{
			id: 'site', heading: 'From bot to website', blocks: [
				{ type: 'paragraph', text: 'The main goal was to keep the participant’s familiar order of actions: they buy parts from partner brands, confirm reports, and watch their balance grow. In the bot that was a chain of messages, and on the website it became a few screens that work equally well on a computer and on a phone.' },
				{ type: 'image', src: '/images/autozorro-screen-1.png', alt: 'AutoZorro public landing page', caption: 'The public page explains how the program works and leads to sign-up.' },
				{ type: 'image', src: '/images/autozorro-terms.png', alt: 'AutoZorro participation terms for different roles', caption: 'Service stations, shops, and distributor managers each have their own terms.' }
			]
		},
		{
			id: 'login', heading: 'Phone number sign-in', blocks: [
				{ type: 'paragraph', text: 'You can sign in to AutoZorro with a phone number. A participant picks where the code should go: Telegram, a phone call, or SMS. Signing in takes a few seconds.' },
				{ type: 'image', src: '/images/autozorro-preview.png', alt: 'AutoZorro phone number sign-in screen', caption: 'The sign-in screen with three ways to receive a code.' }
			]
		},
		{
			id: 'cabinet', heading: 'The participant dashboard', blocks: [
				{ type: 'paragraph', text: 'The dashboard holds everything a participant comes for: the balance for each brand, sales reports, promotions, and program news. Payouts to a bank card start here too.' },
				{ type: 'image', src: '/images/autozorro-dashboard-redacted.png', alt: 'AutoZorro dashboard home screen', caption: 'The dashboard home shows balances, reports, and brand promotions.' },
				{ type: 'paragraph', text: 'Most of the time went into the payout logic and the integration with the partner that delivers the money to the card. The screen itself is simple: two cards that show at once how much can be withdrawn and what is happening with the request.' },
				{ type: 'image', src: '/images/autozorro-payout-redacted.png', alt: 'AutoZorro payout screen', caption: 'Per-brand balances and the payout action on one screen.' },
				{ type: 'image', src: '/images/autozorro-news.png', alt: 'Program news in the AutoZorro dashboard', caption: 'News about new brands and program terms lives right in the dashboard.' }
			]
		},
		{
			id: 'stack', heading: 'Behind the dashboard', blocks: [
				{ type: 'paragraph', text: 'The dashboard rests on several connected parts. The site is written in Next.js and TypeScript, the interface is assembled from shadcn/ui components and styled with Tailwind CSS, and Prisma and Redis handle the data. The sign-in code arrives in Telegram, by phone call, or by SMS at the participant’s choice, and the money reaches the card through a partner that handles payouts.' }
			]
		},
		{
			id: 'pwa', heading: 'An app on the home screen', blocks: [
				{ type: 'paragraph', text: 'The site installs on a phone like an app and sends notifications. The AutoZorro icon appears on the phone screen next to the messengers.' }
			]
		},
		{
			id: 'outcome', heading: 'Outcome', blocks: [
				{ type: 'paragraph', text: 'The Telegram bot works as before, and the website and the app on the phone screen now sit next to it. Participants pick whatever suits them. The number of users has grown. From a chain of messages the program has arrived at a full dashboard: the balance for each brand, sales reports, promotions, news, and payouts to a card are available from any device.' }
			]
		}
	]
}
