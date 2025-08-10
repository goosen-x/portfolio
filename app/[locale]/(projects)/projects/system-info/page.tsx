'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Monitor, Smartphone, Cpu, Eye, Copy, RefreshCw } from 'lucide-react'
import { toast } from 'sonner'

interface SystemInfo {
	architecture: string
	platform: string
	userAgent: string
	language: string
	languages: string[]
	cookieEnabled: boolean
	onlineStatus: boolean
	screenWidth: number
	screenHeight: number
	availWidth: number
	availHeight: number
	colorDepth: number
	pixelDepth: number
	devicePixelRatio: number
	orientation: string
	touchSupport: boolean
	maxTouchPoints: number
	timezone: string
	hostname: string
	protocol: string
	port: string
	doNotTrack: string
	javaEnabled: boolean
	webdriver: boolean
	cookieSupport: boolean
	localStorage: boolean
	sessionStorage: boolean
	indexedDB: boolean
}

interface DeviceInfo {
	brand?: string
	model?: string
	type: 'desktop' | 'tablet' | 'mobile' | 'unknown'
	os: string
	osVersion?: string
	browser: string
	browserVersion?: string
	isRetina: boolean
	actualResolution: string
	logicalResolution: string
	screenSize?: string
	ppi?: number
}

const deviceDatabase = [
	// iPhone
	{
		width: 390,
		height: 844,
		devicePixelRatio: 3,
		brand: 'Apple',
		model: 'iPhone 12/13 mini',
		screenSize: '5.4"',
		ppi: 476
	},
	{
		width: 393,
		height: 852,
		devicePixelRatio: 3,
		brand: 'Apple',
		model: 'iPhone 14/15',
		screenSize: '6.1"',
		ppi: 460
	},
	{
		width: 414,
		height: 896,
		devicePixelRatio: 2,
		brand: 'Apple',
		model: 'iPhone 11/XR',
		screenSize: '6.1"',
		ppi: 326
	},
	{
		width: 414,
		height: 896,
		devicePixelRatio: 3,
		brand: 'Apple',
		model: 'iPhone 11 Pro Max/XS Max',
		screenSize: '6.5"',
		ppi: 458
	},
	{
		width: 375,
		height: 812,
		devicePixelRatio: 3,
		brand: 'Apple',
		model: 'iPhone X/XS/11 Pro',
		screenSize: '5.8"',
		ppi: 458
	},
	{
		width: 375,
		height: 667,
		devicePixelRatio: 2,
		brand: 'Apple',
		model: 'iPhone 6/6s/7/8',
		screenSize: '4.7"',
		ppi: 326
	},
	{
		width: 414,
		height: 736,
		devicePixelRatio: 3,
		brand: 'Apple',
		model: 'iPhone 6/6s/7/8 Plus',
		screenSize: '5.5"',
		ppi: 401
	},

	// iPad
	{
		width: 820,
		height: 1180,
		devicePixelRatio: 2,
		brand: 'Apple',
		model: 'iPad Air (4th gen)',
		screenSize: '10.9"',
		ppi: 264
	},
	{
		width: 834,
		height: 1194,
		devicePixelRatio: 2,
		brand: 'Apple',
		model: 'iPad Pro 11"',
		screenSize: '11"',
		ppi: 264
	},
	{
		width: 1024,
		height: 1366,
		devicePixelRatio: 2,
		brand: 'Apple',
		model: 'iPad Pro 12.9"',
		screenSize: '12.9"',
		ppi: 264
	},
	{
		width: 768,
		height: 1024,
		devicePixelRatio: 2,
		brand: 'Apple',
		model: 'iPad (9th gen)',
		screenSize: '10.2"',
		ppi: 264
	},

	// Samsung Galaxy
	{
		width: 360,
		height: 740,
		devicePixelRatio: 3,
		brand: 'Samsung',
		model: 'Galaxy S20/S21',
		screenSize: '6.2"',
		ppi: 563
	},
	{
		width: 384,
		height: 854,
		devicePixelRatio: 2.75,
		brand: 'Samsung',
		model: 'Galaxy S22',
		screenSize: '6.1"',
		ppi: 425
	},
	{
		width: 360,
		height: 780,
		devicePixelRatio: 3,
		brand: 'Samsung',
		model: 'Galaxy S10',
		screenSize: '6.1"',
		ppi: 550
	},
	{
		width: 412,
		height: 915,
		devicePixelRatio: 2.625,
		brand: 'Samsung',
		model: 'Galaxy Note 20',
		screenSize: '6.7"',
		ppi: 393
	},

	// Google Pixel
	{
		width: 393,
		height: 851,
		devicePixelRatio: 2.75,
		brand: 'Google',
		model: 'Pixel 5',
		screenSize: '6.0"',
		ppi: 432
	},
	{
		width: 411,
		height: 731,
		devicePixelRatio: 2.625,
		brand: 'Google',
		model: 'Pixel 4',
		screenSize: '5.7"',
		ppi: 444
	},

	// Common desktop resolutions
	{
		width: 1920,
		height: 1080,
		devicePixelRatio: 1,
		brand: '',
		model: 'Full HD Monitor',
		screenSize: '21.5"-27"',
		ppi: 82
	},
	{
		width: 2560,
		height: 1440,
		devicePixelRatio: 1,
		brand: '',
		model: 'QHD Monitor',
		screenSize: '27"-32"',
		ppi: 109
	},
	{
		width: 3840,
		height: 2160,
		devicePixelRatio: 1,
		brand: '',
		model: '4K Monitor',
		screenSize: '27"-43"',
		ppi: 163
	}
]

export default function SystemInfoPage() {
	const [mounted, setMounted] = useState(false)
	const [systemInfo, setSystemInfo] = useState<SystemInfo | null>(null)
	const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null)
	const [activeTab, setActiveTab] = useState('architecture')

	useEffect(() => {
		setMounted(true)
		detectSystemInfo()
	}, [])

	const detectSystemInfo = () => {
		if (typeof window === 'undefined') return

		const info: SystemInfo = {
			architecture: getArchitecture(),
			platform: navigator.platform,
			userAgent: navigator.userAgent,
			language: navigator.language,
			languages: navigator.languages
				? Array.from(navigator.languages)
				: [navigator.language],
			cookieEnabled: navigator.cookieEnabled,
			onlineStatus: navigator.onLine,
			screenWidth: screen.width,
			screenHeight: screen.height,
			availWidth: screen.availWidth,
			availHeight: screen.availHeight,
			colorDepth: screen.colorDepth,
			pixelDepth: screen.pixelDepth,
			devicePixelRatio: window.devicePixelRatio || 1,
			orientation: screen.orientation?.type || 'unknown',
			touchSupport: 'ontouchstart' in window,
			maxTouchPoints: navigator.maxTouchPoints || 0,
			timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
			hostname: window.location.hostname,
			protocol: window.location.protocol,
			port:
				window.location.port ||
				(window.location.protocol === 'https:' ? '443' : '80'),
			doNotTrack: navigator.doNotTrack || 'unknown',
			javaEnabled: navigator.javaEnabled ? navigator.javaEnabled() : false,
			webdriver: (navigator as any).webdriver || false,
			cookieSupport: navigator.cookieEnabled,
			localStorage: typeof Storage !== 'undefined',
			sessionStorage: typeof Storage !== 'undefined',
			indexedDB: typeof indexedDB !== 'undefined'
		}

		const device = detectDevice(info)

		setSystemInfo(info)
		setDeviceInfo(device)
	}

	const getArchitecture = (): string => {
		const userAgent = navigator.userAgent.toLowerCase()
		const platform = navigator.platform.toLowerCase()

		// Check for explicit 64-bit indicators
		if (
			userAgent.includes('win64') ||
			userAgent.includes('x64') ||
			userAgent.includes('x86_64')
		) {
			return '64-bit'
		}

		// Check for 32-bit indicators
		if (
			userAgent.includes('win32') ||
			userAgent.includes('i386') ||
			userAgent.includes('i686')
		) {
			return '32-bit'
		}

		// Platform-specific checks
		if (platform.includes('win64') || platform.includes('x86_64')) {
			return '64-bit'
		}

		if (platform.includes('win32') || platform.includes('i386')) {
			return '32-bit'
		}

		// Modern browsers on 64-bit systems
		if (
			userAgent.includes('chrome') ||
			userAgent.includes('firefox') ||
			userAgent.includes('edge')
		) {
			return '64-bit (assumed)'
		}

		// ARM-based systems (Apple Silicon, mobile)
		if (platform.includes('arm') || userAgent.includes('arm')) {
			return 'ARM 64-bit'
		}

		return 'Unknown'
	}

	const detectDevice = (info: SystemInfo): DeviceInfo => {
		const userAgent = info.userAgent.toLowerCase()
		let type: DeviceInfo['type'] = 'unknown'
		let os = 'Unknown'
		let osVersion = undefined
		let browser = 'Unknown'
		let browserVersion = undefined

		// Detect OS with versions
		if (userAgent.includes('windows')) {
			os = 'Windows'
			const match = userAgent.match(/windows nt ([\d.]+)/)
			if (match) {
				const version = match[1]
				// Map Windows NT versions to user-friendly names
				const windowsVersions: Record<string, string> = {
					'10.0': '10/11',
					'6.3': '8.1',
					'6.2': '8',
					'6.1': '7',
					'6.0': 'Vista',
					'5.2': 'XP 64-bit',
					'5.1': 'XP'
				}
				osVersion = windowsVersions[version] || version
			}
		} else if (userAgent.includes('mac')) {
			os = 'macOS'
			const match = userAgent.match(/mac os x ([\d_.]+)/)
			if (match) {
				osVersion = match[1].replace(/_/g, '.')
			}
		} else if (userAgent.includes('linux')) {
			os = 'Linux'
		} else if (userAgent.includes('android')) {
			os = 'Android'
			const match = userAgent.match(/android ([\d.]+)/)
			if (match) osVersion = match[1]
		} else if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
			os = 'iOS'
			const match = userAgent.match(/os ([\d_]+)/)
			if (match) osVersion = match[1].replace(/_/g, '.')
		}

		// Detect browser with versions
		if (userAgent.includes('edg/')) {
			browser = 'Edge'
			const match = userAgent.match(/edg\/([\d.]+)/)
			if (match) browserVersion = match[1]
		} else if (userAgent.includes('chrome/') && !userAgent.includes('edge')) {
			browser = 'Chrome'
			const match = userAgent.match(/chrome\/([\d.]+)/)
			if (match) browserVersion = match[1]
		} else if (userAgent.includes('firefox/')) {
			browser = 'Firefox'
			const match = userAgent.match(/firefox\/([\d.]+)/)
			if (match) browserVersion = match[1]
		} else if (userAgent.includes('safari/') && !userAgent.includes('chrome')) {
			browser = 'Safari'
			const match = userAgent.match(/version\/([\d.]+)/)
			if (match) browserVersion = match[1]
		} else if (userAgent.includes('opera') || userAgent.includes('opr/')) {
			browser = 'Opera'
			const match = userAgent.match(/(opera|opr)\/([\d.]+)/)
			if (match) browserVersion = match[2]
		}

		// Detect device type
		if (
			userAgent.includes('mobile') ||
			userAgent.includes('android') ||
			userAgent.includes('iphone')
		) {
			type = 'mobile'
		} else if (userAgent.includes('tablet') || userAgent.includes('ipad')) {
			type = 'tablet'
		} else {
			type = 'desktop'
		}

		const isRetina = info.devicePixelRatio > 1
		const logicalWidth = Math.max(info.screenWidth, info.screenHeight)
		const logicalHeight = Math.min(info.screenWidth, info.screenHeight)
		const actualWidth = logicalWidth * info.devicePixelRatio
		const actualHeight = logicalHeight * info.devicePixelRatio

		// Try to match device from database
		const matchedDevice = deviceDatabase.find(
			device =>
				Math.abs(device.width - logicalWidth) <= 2 &&
				Math.abs(device.height - logicalHeight) <= 2 &&
				Math.abs(device.devicePixelRatio - info.devicePixelRatio) < 0.1
		)

		return {
			type,
			os,
			osVersion,
			browser,
			browserVersion,
			isRetina,
			actualResolution: `${actualWidth} × ${actualHeight}`,
			logicalResolution: `${logicalWidth} × ${logicalHeight}`,
			brand: matchedDevice?.brand,
			model: matchedDevice?.model,
			screenSize: matchedDevice?.screenSize,
			ppi: matchedDevice?.ppi
		}
	}

	const copyToClipboard = (text: string, label: string) => {
		navigator.clipboard.writeText(text)
		toast.success(`${label} скопирован в буфер обмена!`)
	}

	const refresh = () => {
		detectSystemInfo()
		toast.success('Информация обновлена!')
	}

	if (!mounted || !systemInfo || !deviceInfo) {
		return (
			<div className='max-w-6xl mx-auto space-y-8'>
				<div>
					<h1 className='text-3xl font-bold tracking-tight mb-2'>
						System Info
					</h1>
					<p className='text-muted-foreground'>
						Определите разрядность системы, разрешение экрана и характеристики
						устройства
					</p>
				</div>
				<div className='animate-pulse space-y-8'>
					<div className='h-96 bg-muted rounded-lg'></div>
				</div>
			</div>
		)
	}

	return (
		<div className='max-w-6xl mx-auto space-y-8'>
			<Button onClick={refresh} variant='outline' size='sm'>
				<RefreshCw className='w-4 h-4 mr-2' />
				Обновить
			</Button>

			{/* Main Results */}
			<div className='grid md:grid-cols-3 gap-6'>
				<Card className='p-6 text-center'>
					<Cpu className='w-8 h-8 mx-auto mb-3 text-blue-600' />
					<h3 className='font-semibold mb-2'>Архитектура процессора</h3>
					<div className='text-2xl font-bold text-blue-600 mb-2'>
						{systemInfo.architecture}
					</div>
					<p className='text-sm text-muted-foreground'>
						{systemInfo.architecture.includes('64')
							? 'Поддерживает 64-битные приложения'
							: 'Только 32-битные приложения'}
					</p>
				</Card>

				<Card className='p-6 text-center'>
					<Monitor className='w-8 h-8 mx-auto mb-3 text-green-600' />
					<h3 className='font-semibold mb-2'>Разрешение экрана</h3>
					<div className='text-2xl font-bold text-green-600 mb-2'>
						{deviceInfo.logicalResolution}
					</div>
					<p className='text-sm text-muted-foreground'>
						{deviceInfo.isRetina
							? `Фактическое: ${deviceInfo.actualResolution}`
							: 'Стандартное разрешение'}
					</p>
				</Card>

				<Card className='p-6 text-center'>
					<Smartphone className='w-8 h-8 mx-auto mb-3 text-purple-600' />
					<h3 className='font-semibold mb-2'>Устройство</h3>
					<div className='text-lg font-bold text-purple-600 mb-2'>
						{deviceInfo.brand && deviceInfo.model
							? `${deviceInfo.brand} ${deviceInfo.model}`
							: deviceInfo.type}
					</div>
					<p className='text-sm text-muted-foreground'>
						{deviceInfo.screenSize
							? `Размер: ${deviceInfo.screenSize}`
							: `${deviceInfo.os}${deviceInfo.osVersion ? ` ${deviceInfo.osVersion}` : ''} • ${deviceInfo.browser}${deviceInfo.browserVersion ? ` ${deviceInfo.browserVersion}` : ''}`}
					</p>
				</Card>
			</div>

			{/* Detailed Information */}
			<Tabs value={activeTab} onValueChange={setActiveTab}>
				<TabsList className='grid grid-cols-4 w-full'>
					<TabsTrigger value='architecture'>
						<Cpu className='w-4 h-4 mr-2' />
						Архитектура
					</TabsTrigger>
					<TabsTrigger value='screen'>
						<Monitor className='w-4 h-4 mr-2' />
						Экран
					</TabsTrigger>
					<TabsTrigger value='device'>
						<Smartphone className='w-4 h-4 mr-2' />
						Устройство
					</TabsTrigger>
					<TabsTrigger value='system'>
						<Eye className='w-4 h-4 mr-2' />
						Система
					</TabsTrigger>
				</TabsList>

				<TabsContent value='architecture' className='space-y-6'>
					<Card className='p-6'>
						<h3 className='font-semibold mb-4'>Информация о процессоре</h3>
						<div className='space-y-4'>
							<div className='flex items-center justify-between p-4 bg-muted/30 rounded-lg'>
								<div>
									<p className='font-medium'>Архитектура</p>
									<p className='text-sm text-muted-foreground'>
										Разрядность процессора
									</p>
								</div>
								<div className='flex items-center gap-2'>
									<Badge
										variant={
											systemInfo.architecture.includes('64')
												? 'default'
												: 'secondary'
										}
									>
										{systemInfo.architecture}
									</Badge>
									<Button
										onClick={() =>
											copyToClipboard(systemInfo.architecture, 'Архитектура')
										}
										size='icon'
										variant='ghost'
									>
										<Copy className='w-4 h-4' />
									</Button>
								</div>
							</div>

							<div className='flex items-center justify-between p-4 bg-muted/30 rounded-lg'>
								<div>
									<p className='font-medium'>Платформа</p>
									<p className='text-sm text-muted-foreground'>
										Операционная система
									</p>
								</div>
								<div className='flex items-center gap-2'>
									<Badge variant='outline'>{systemInfo.platform}</Badge>
									<Button
										onClick={() =>
											copyToClipboard(systemInfo.platform, 'Платформа')
										}
										size='icon'
										variant='ghost'
									>
										<Copy className='w-4 h-4' />
									</Button>
								</div>
							</div>
						</div>
					</Card>

					{/* Architecture Explanation */}
					<Card className='p-6 bg-blue-50/50 dark:bg-blue-950/20'>
						<h4 className='font-semibold mb-3 text-blue-800 dark:text-blue-200'>
							Что означает разрядность?
						</h4>
						<div className='grid md:grid-cols-2 gap-4 text-sm'>
							<div>
								<h5 className='font-medium mb-2 text-blue-700 dark:text-blue-300'>
									64-битные системы
								</h5>
								<ul className='space-y-1 text-blue-600 dark:text-blue-400'>
									<li>• Поддерживают более 4 ГБ оперативной памяти</li>
									<li>• Быстрее обрабатывают большие объемы данных</li>
									<li>• Совместимы с 32-битными приложениями</li>
									<li>• Более безопасные и современные</li>
								</ul>
							</div>
							<div>
								<h5 className='font-medium mb-2 text-blue-700 dark:text-blue-300'>
									32-битные системы
								</h5>
								<ul className='space-y-1 text-blue-600 dark:text-blue-400'>
									<li>• Ограничены 4 ГБ оперативной памяти</li>
									<li>• Медленнее при больших нагрузках</li>
									<li>• Несовместимы с 64-битными программами</li>
									<li>• Устаревают и не рекомендуются</li>
								</ul>
							</div>
						</div>
					</Card>
				</TabsContent>

				<TabsContent value='screen' className='space-y-6'>
					<Card className='p-6'>
						<h3 className='font-semibold mb-4'>Характеристики экрана</h3>
						<div className='space-y-4'>
							<div className='grid md:grid-cols-2 gap-4'>
								<div className='p-4 bg-muted/30 rounded-lg'>
									<p className='font-medium mb-2'>Логическое разрешение</p>
									<p className='text-2xl font-bold text-green-600'>
										{deviceInfo.logicalResolution}
									</p>
									<p className='text-sm text-muted-foreground'>CSS пиксели</p>
								</div>

								<div className='p-4 bg-muted/30 rounded-lg'>
									<p className='font-medium mb-2'>Физическое разрешение</p>
									<p className='text-2xl font-bold text-blue-600'>
										{deviceInfo.actualResolution}
									</p>
									<p className='text-sm text-muted-foreground'>
										Реальные пиксели
									</p>
								</div>
							</div>

							<div className='grid md:grid-cols-3 gap-4'>
								<div className='p-4 bg-muted/30 rounded-lg text-center'>
									<p className='font-medium mb-1'>Pixel Ratio</p>
									<p className='text-xl font-bold'>
										{systemInfo.devicePixelRatio}x
									</p>
									<p className='text-xs text-muted-foreground'>
										{deviceInfo.isRetina ? 'Retina Display' : 'Standard'}
									</p>
								</div>

								<div className='p-4 bg-muted/30 rounded-lg text-center'>
									<p className='font-medium mb-1'>Глубина цвета</p>
									<p className='text-xl font-bold'>
										{systemInfo.colorDepth} бит
									</p>
									<p className='text-xs text-muted-foreground'>Цветопередача</p>
								</div>

								<div className='p-4 bg-muted/30 rounded-lg text-center'>
									<p className='font-medium mb-1'>Ориентация</p>
									<p className='text-xl font-bold'>{systemInfo.orientation}</p>
									<p className='text-xs text-muted-foreground'>
										Поворот экрана
									</p>
								</div>
							</div>

							{deviceInfo.ppi && (
								<div className='p-4 bg-muted/30 rounded-lg'>
									<p className='font-medium mb-2'>Плотность пикселей</p>
									<p className='text-2xl font-bold text-purple-600'>
										{deviceInfo.ppi} PPI
									</p>
									<p className='text-sm text-muted-foreground'>
										Pixels Per Inch
									</p>
								</div>
							)}
						</div>
					</Card>
				</TabsContent>

				<TabsContent value='device' className='space-y-6'>
					<Card className='p-6'>
						<h3 className='font-semibold mb-4'>Информация об устройстве</h3>
						<div className='space-y-4'>
							{deviceInfo.brand && deviceInfo.model && (
								<div className='p-4 bg-muted/30 rounded-lg'>
									<p className='font-medium mb-2'>Модель устройства</p>
									<p className='text-xl font-bold text-purple-600'>
										{deviceInfo.brand} {deviceInfo.model}
									</p>
									{deviceInfo.screenSize && (
										<p className='text-sm text-muted-foreground mt-1'>
											Размер экрана: {deviceInfo.screenSize}
										</p>
									)}
								</div>
							)}

							<div className='grid md:grid-cols-2 gap-4'>
								<div className='p-4 bg-muted/30 rounded-lg'>
									<p className='font-medium mb-2'>Тип устройства</p>
									<Badge variant='default' className='text-base px-3 py-1'>
										{deviceInfo.type === 'desktop'
											? 'Настольный ПК'
											: deviceInfo.type === 'tablet'
												? 'Планшет'
												: deviceInfo.type === 'mobile'
													? 'Мобильный'
													: 'Неизвестно'}
									</Badge>
								</div>

								<div className='p-4 bg-muted/30 rounded-lg'>
									<p className='font-medium mb-2'>Сенсорный экран</p>
									<Badge
										variant={systemInfo.touchSupport ? 'default' : 'outline'}
										className='text-base px-3 py-1'
									>
										{systemInfo.touchSupport
											? 'Поддерживается'
											: 'Не поддерживается'}
									</Badge>
								</div>
							</div>

							{systemInfo.touchSupport && (
								<div className='p-4 bg-muted/30 rounded-lg'>
									<p className='font-medium mb-2'>Мультитач</p>
									<p className='text-xl font-bold'>
										{systemInfo.maxTouchPoints > 0
											? `${systemInfo.maxTouchPoints} точек`
											: 'Не поддерживается'}
									</p>
								</div>
							)}
						</div>
					</Card>
				</TabsContent>

				<TabsContent value='system' className='space-y-6'>
					<Card className='p-6'>
						<h3 className='font-semibold mb-4'>Системная информация</h3>
						<div className='space-y-4'>
							<div className='grid md:grid-cols-2 gap-4'>
								<div className='p-4 bg-muted/30 rounded-lg'>
									<p className='font-medium mb-2'>Операционная система</p>
									<p className='text-lg font-bold'>{deviceInfo.os}</p>
									{deviceInfo.osVersion && (
										<p className='text-sm text-muted-foreground'>
											Версия: {deviceInfo.osVersion}
										</p>
									)}
								</div>

								<div className='p-4 bg-muted/30 rounded-lg'>
									<p className='font-medium mb-2'>Браузер</p>
									<p className='text-lg font-bold'>{deviceInfo.browser}</p>
									{deviceInfo.browserVersion && (
										<p className='text-sm text-muted-foreground'>
											Версия: {deviceInfo.browserVersion}
										</p>
									)}
								</div>
							</div>

							<div className='grid md:grid-cols-3 gap-4'>
								<div className='p-4 bg-muted/30 rounded-lg text-center'>
									<p className='font-medium mb-1'>Основной язык</p>
									<p className='text-lg font-bold'>{systemInfo.language}</p>
								</div>

								<div className='p-4 bg-muted/30 rounded-lg text-center'>
									<p className='font-medium mb-1'>Часовой пояс</p>
									<p className='text-lg font-bold'>{systemInfo.timezone}</p>
								</div>

								<div className='p-4 bg-muted/30 rounded-lg text-center'>
									<p className='font-medium mb-1'>Статус</p>
									<Badge
										variant={systemInfo.onlineStatus ? 'default' : 'outline'}
									>
										{systemInfo.onlineStatus ? 'Онлайн' : 'Офлайн'}
									</Badge>
								</div>
							</div>

							{/* Network & Host Info */}
							<div className='grid md:grid-cols-2 gap-4'>
								<div className='p-4 bg-muted/30 rounded-lg'>
									<p className='font-medium mb-2'>Сетевая информация</p>
									<div className='space-y-1 text-sm'>
										<p>
											<strong>Хост:</strong> {systemInfo.hostname}
										</p>
										<p>
											<strong>Протокол:</strong> {systemInfo.protocol}
										</p>
										<p>
											<strong>Порт:</strong> {systemInfo.port}
										</p>
									</div>
								</div>

								<div className='p-4 bg-muted/30 rounded-lg'>
									<p className='font-medium mb-2'>Языки браузера</p>
									<div className='flex flex-wrap gap-1'>
										{systemInfo.languages.slice(0, 4).map((lang, index) => (
											<Badge key={index} variant='outline' className='text-xs'>
												{lang}
											</Badge>
										))}
										{systemInfo.languages.length > 4 && (
											<Badge variant='secondary' className='text-xs'>
												+{systemInfo.languages.length - 4}
											</Badge>
										)}
									</div>
								</div>
							</div>

							{/* Storage & Features */}
							<div className='p-4 bg-muted/30 rounded-lg'>
								<p className='font-medium mb-3'>Поддерживаемые технологии</p>
								<div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
									<div className='text-center'>
										<Badge
											variant={
												systemInfo.cookieEnabled ? 'default' : 'destructive'
											}
											className='w-full'
										>
											Cookies
										</Badge>
									</div>
									<div className='text-center'>
										<Badge
											variant={
												systemInfo.localStorage ? 'default' : 'destructive'
											}
											className='w-full'
										>
											LocalStorage
										</Badge>
									</div>
									<div className='text-center'>
										<Badge
											variant={
												systemInfo.sessionStorage ? 'default' : 'destructive'
											}
											className='w-full'
										>
											SessionStorage
										</Badge>
									</div>
									<div className='text-center'>
										<Badge
											variant={systemInfo.indexedDB ? 'default' : 'destructive'}
											className='w-full'
										>
											IndexedDB
										</Badge>
									</div>
								</div>
							</div>

							{/* Privacy Settings */}
							<div className='p-4 bg-muted/30 rounded-lg'>
								<p className='font-medium mb-3'>Настройки приватности</p>
								<div className='grid md:grid-cols-2 gap-4 text-sm'>
									<div>
										<p>
											<strong>Do Not Track:</strong>{' '}
											{systemInfo.doNotTrack === '1'
												? 'Включен'
												: systemInfo.doNotTrack === '0'
													? 'Отключен'
													: 'Не установлен'}
										</p>
									</div>
									<div>
										<p>
											<strong>WebDriver:</strong>{' '}
											{systemInfo.webdriver ? 'Обнаружен' : 'Не обнаружен'}
										</p>
									</div>
								</div>
							</div>
						</div>
					</Card>

					{/* User Agent */}
					<Card className='p-6'>
						<h4 className='font-semibold mb-3'>User Agent</h4>
						<div className='flex items-center gap-2'>
							<code className='flex-1 p-3 bg-muted/30 rounded text-xs overflow-x-auto'>
								{systemInfo.userAgent}
							</code>
							<Button
								onClick={() =>
									copyToClipboard(systemInfo.userAgent, 'User Agent')
								}
								size='icon'
								variant='outline'
							>
								<Copy className='w-4 h-4' />
							</Button>
						</div>
					</Card>
				</TabsContent>
			</Tabs>

			{/* FAQ */}
			<Card className='p-6 bg-muted/50'>
				<h3 className='font-semibold mb-4'>Часто задаваемые вопросы</h3>
				<div className='grid md:grid-cols-2 gap-6 text-sm'>
					<div className='space-y-3'>
						<div>
							<h4 className='font-medium mb-1'>
								Зачем знать разрядность системы?
							</h4>
							<p className='text-muted-foreground'>
								При загрузке программ нужно выбирать правильную версию (32-bit
								или 64-bit). Неправильная версия может работать медленно или
								вообще не запуститься.
							</p>
						</div>
						<div>
							<h4 className='font-medium mb-1'>Зачем знать версию браузера?</h4>
							<p className='text-muted-foreground'>
								Версия браузера влияет на поддержку новых веб-технологий,
								безопасность и совместимость с сайтами. Устаревшие версии могут
								работать некорректно.
							</p>
						</div>
						<div>
							<h4 className='font-medium mb-1'>Что такое Retina Display?</h4>
							<p className='text-muted-foreground'>
								Экраны с высокой плотностью пикселей (Pixel Ratio &gt; 1), где
								физическое разрешение превышает логическое. Обеспечивают более
								четкое изображение.
							</p>
						</div>
					</div>
					<div className='space-y-3'>
						<div>
							<h4 className='font-medium mb-1'>
								Почему важно разрешение экрана?
							</h4>
							<p className='text-muted-foreground'>
								Знание точного разрешения помогает при создании веб-сайтов,
								выборе обоев, настройке игр и покупке совместимых аксессуаров.
							</p>
						</div>
						<div>
							<h4 className='font-medium mb-1'>Безопасно ли это?</h4>
							<p className='text-muted-foreground'>
								Да, вся информация получается локально в вашем браузере через
								стандартные API. Никакие данные не передаются на сервер.
							</p>
						</div>
					</div>
				</div>
			</Card>
		</div>
	)
}
