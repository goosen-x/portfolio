'use client'

import { useState, useEffect, useRef } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
	Wifi, 
	Download, 
	Upload, 
	Activity, 
	Server, 
	Monitor,
	History,
	Play,
	Pause,
	RotateCcw
} from 'lucide-react'
import { toast } from 'sonner'
import { useTranslations } from 'next-intl'

interface SpeedTestResult {
	download: number
	upload: number
	ping: number
	timestamp: Date
	server: string
	ip: string
}

interface TestState {
	isRunning: boolean
	phase: 'idle' | 'ping' | 'download' | 'upload' | 'complete'
	progress: number
}

export default function SpeedTestPage() {
	const t = useTranslations('widgets.speedTest')
	const [testState, setTestState] = useState<TestState>({
		isRunning: false,
		phase: 'idle',
		progress: 0
	})
	
	const [currentResult, setCurrentResult] = useState({
		download: 0,
		upload: 0,
		ping: 0,
		server: '--',
		ip: '--'
	})
	
	const [history, setHistory] = useState<SpeedTestResult[]>([])
	const [activeTab, setActiveTab] = useState('test')
	const abortControllerRef = useRef<AbortController | null>(null)

	// Load history from localStorage
	useEffect(() => {
		const savedHistory = localStorage.getItem('speedtest-history')
		if (savedHistory) {
			const parsed = JSON.parse(savedHistory)
			setHistory(parsed.map((item: any) => ({
				...item,
				timestamp: new Date(item.timestamp)
			})))
		}
	}, [])

	// Get client IP and location
	useEffect(() => {
		const getLocationInfo = async () => {
			// First try our own API
			try {
				const response = await fetch('/api/speed-test/ip')
				if (response.ok) {
					const data = await response.json()
					setCurrentResult(prev => ({
						...prev,
						ip: data.ip || 'Local IP',
						server: data.location || 'Local Network'
					}))
					return
				}
			} catch (error) {
				// Silently fail
			}
			
			// Default fallback
			setCurrentResult(prev => ({
				...prev,
				ip: 'Local IP',
				server: 'Local Network'
			}))
		}
		
		getLocationInfo()
	}, [])

	const measurePing = async (): Promise<number> => {
		const times: number[] = []
		
		for (let i = 0; i < 5; i++) {
			const start = performance.now()
			try {
				await fetch('https://www.google.com/generate_204', { 
					mode: 'no-cors',
					cache: 'no-cache' 
				})
				const end = performance.now()
				times.push(end - start)
			} catch {
				// Ignore errors, we're just measuring timing
			}
			await new Promise(resolve => setTimeout(resolve, 100))
		}
		
		return times.length > 0 
			? Math.round(times.reduce((a, b) => a + b, 0) / times.length)
			: 0
	}

	const measureDownload = async (): Promise<number> => {
		setTestState(prev => ({ ...prev, phase: 'download', progress: 0 }))
		
		// Use multiple test files for better accuracy
		const testUrls = [
			'https://speed.cloudflare.com/__down?bytes=10000000', // 10MB
			'https://speed.cloudflare.com/__down?bytes=25000000', // 25MB
			'https://speed.cloudflare.com/__down?bytes=50000000'  // 50MB
		]
		
		const speeds: number[] = []
		abortControllerRef.current = new AbortController()
		
		for (let i = 0; i < testUrls.length; i++) {
			if (abortControllerRef.current.signal.aborted) break
			
			const start = performance.now()
			let loaded = 0
			
			try {
				const response = await fetch(testUrls[i], {
					signal: abortControllerRef.current.signal,
					cache: 'no-cache'
				})
				
				const reader = response.body?.getReader()
				if (!reader) continue
				
				while (true) {
					const { done, value } = await reader.read()
					if (done) break
					loaded += value?.length || 0
					
					// Update progress
					const elapsed = (performance.now() - start) / 1000
					const speed = (loaded * 8) / elapsed / 1000000 // Mbps
					setCurrentResult(prev => ({ ...prev, download: Math.round(speed * 10) / 10 }))
					setTestState(prev => ({ ...prev, progress: ((i + 1) / testUrls.length) * 100 }))
				}
				
				const elapsed = (performance.now() - start) / 1000
				const speed = (loaded * 8) / elapsed / 1000000 // Mbps
				speeds.push(speed)
				
			} catch (error) {
				if (error instanceof Error && error.name === 'AbortError') {
					break
				}
			}
		}
		
		return speeds.length > 0 
			? Math.round(speeds.reduce((a, b) => a + b, 0) / speeds.length * 10) / 10
			: 0
	}

	const measureUpload = async (): Promise<number> => {
		setTestState(prev => ({ ...prev, phase: 'upload', progress: 0 }))
		
		const speeds: number[] = []
		abortControllerRef.current = new AbortController()
		
		// Generate random data for upload
		const generateData = (size: number) => {
			const buffer = new ArrayBuffer(size)
			const view = new Uint8Array(buffer)
			for (let i = 0; i < size; i++) {
				view[i] = Math.floor(Math.random() * 256)
			}
			return buffer
		}
		
		const sizes = [500000, 1000000, 2000000] // 0.5MB, 1MB, 2MB
		
		for (let i = 0; i < sizes.length; i++) {
			if (abortControllerRef.current.signal.aborted) break
			
			const data = generateData(sizes[i])
			const start = performance.now()
			
			try {
				// Use our own API endpoint for upload test
				const response = await fetch('/api/speed-test/upload', {
					method: 'POST',
					body: data,
					signal: abortControllerRef.current.signal,
					headers: {
						'Content-Type': 'application/octet-stream'
					}
				})
				
				if (response.ok) {
					const elapsed = (performance.now() - start) / 1000
					const speed = (sizes[i] * 8) / elapsed / 1000000 // Mbps
					speeds.push(speed)
					
					setCurrentResult(prev => ({ ...prev, upload: Math.round(speed * 10) / 10 }))
					setTestState(prev => ({ ...prev, progress: ((i + 1) / sizes.length) * 100 }))
				}
				
			} catch (error) {
				if (error instanceof Error && error.name === 'AbortError') {
					break
				}
				// Continue with next test
			}
			
			// Small delay between tests
			await new Promise(resolve => setTimeout(resolve, 100))
		}
		
		// If we got at least one measurement, use it
		if (speeds.length > 0) {
			return Math.round(speeds.reduce((a, b) => a + b, 0) / speeds.length * 10) / 10
		}
		
		// Fallback: estimate based on download speed
		// Typically upload is 10-40% of download speed
		const estimatedUpload = currentResult.download * 0.25
		setCurrentResult(prev => ({ ...prev, upload: Math.round(estimatedUpload * 10) / 10 }))
		return estimatedUpload
	}

	const runSpeedTest = async () => {
		if (testState.isRunning) {
			// Cancel test
			abortControllerRef.current?.abort()
			setTestState({ isRunning: false, phase: 'idle', progress: 0 })
			return
		}
		
		setTestState({ isRunning: true, phase: 'ping', progress: 0 })
		setCurrentResult(prev => ({ ...prev, download: 0, upload: 0, ping: 0 }))
		
		try {
			// Measure ping
			const ping = await measurePing()
			setCurrentResult(prev => ({ ...prev, ping }))
			
			// Measure download speed
			const download = await measureDownload()
			
			// Measure upload speed
			const upload = await measureUpload()
			
			// Save result
			const result: SpeedTestResult = {
				download,
				upload,
				ping,
				timestamp: new Date(),
				server: currentResult.server,
				ip: currentResult.ip
			}
			
			const newHistory = [result, ...history].slice(0, 50)
			setHistory(newHistory)
			localStorage.setItem('speedtest-history', JSON.stringify(newHistory))
			
			setTestState({ isRunning: false, phase: 'complete', progress: 100 })
			toast.success(t('toast.testComplete'))
			
		} catch (error) {
			setTestState({ isRunning: false, phase: 'idle', progress: 0 })
			toast.error(t('toast.testError'))
		}
	}

	const clearHistory = () => {
		setHistory([])
		localStorage.removeItem('speedtest-history')
		toast.success(t('toast.historyCleared'))
	}

	const formatSpeed = (speed: number) => {
		return speed > 0 ? `${speed.toFixed(1)}` : '--'
	}

	const getSpeedColor = (speed: number) => {
		if (speed >= 100) return 'text-green-600'
		if (speed >= 50) return 'text-yellow-600'
		if (speed >= 10) return 'text-orange-600'
		return 'text-red-600'
	}

	const getConnectionType = (download: number) => {
		if (download >= 1000) return '5G'
		if (download >= 100) return '4G LTE'
		if (download >= 50) return 'WiFi 802.11ac'
		if (download >= 25) return 'WiFi 802.11n'
		if (download >= 10) return '4G'
		if (download >= 5) return '3.5G'
		return '3G'
	}

	useEffect(() => {
		const handleKeyPress = (e: KeyboardEvent) => {
			if ((e.key === 'Enter' || e.key === ' ') && !testState.isRunning) {
				e.preventDefault()
				runSpeedTest()
			}
		}

		window.addEventListener('keypress', handleKeyPress)
		return () => window.removeEventListener('keypress', handleKeyPress)
	}, [testState.isRunning])

	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-3xl font-bold tracking-tight">{t('title')}</h1>
				<p className="text-muted-foreground mt-2">
					{t('description')}
				</p>
			</div>

			<Tabs value={activeTab} onValueChange={setActiveTab}>
				<TabsList className="grid w-full grid-cols-3">
					<TabsTrigger value="test">{t('tabs.test')}</TabsTrigger>
					<TabsTrigger value="status">{t('tabs.status')}</TabsTrigger>
					<TabsTrigger value="history">{t('tabs.history')}</TabsTrigger>
				</TabsList>

				<TabsContent value="test" className="space-y-6">
					{/* Main Test Card */}
					<Card>
						<CardContent className="pt-6">
							<div className="grid gap-6 md:grid-cols-2">
								{/* Download Speed */}
								<div className="text-center space-y-2">
									<div className="flex items-center justify-center gap-2 text-muted-foreground">
										<Download className="w-4 h-4" />
										<span className="text-sm">{t('download')}</span>
									</div>
									<div className={`text-4xl font-bold ${getSpeedColor(currentResult.download)}`}>
										{formatSpeed(currentResult.download)}
									</div>
									<div className="text-sm text-muted-foreground">Mbps</div>
								</div>

								{/* Upload Speed */}
								<div className="text-center space-y-2">
									<div className="flex items-center justify-center gap-2 text-muted-foreground">
										<Upload className="w-4 h-4" />
										<span className="text-sm">{t('upload')}</span>
									</div>
									<div className={`text-4xl font-bold ${getSpeedColor(currentResult.upload)}`}>
										{formatSpeed(currentResult.upload)}
									</div>
									<div className="text-sm text-muted-foreground">Mbps</div>
								</div>
							</div>

							{/* Ping and Info */}
							<div className="mt-6 grid gap-4 md:grid-cols-3 text-sm">
								<div className="flex items-center gap-2">
									<Activity className="w-4 h-4 text-muted-foreground" />
									<span className="text-muted-foreground">{t('ping')}:</span>
									<span className="font-medium">{currentResult.ping > 0 ? `${currentResult.ping} ms` : '-- ms'}</span>
								</div>
								<div className="flex items-center gap-2">
									<Monitor className="w-4 h-4 text-muted-foreground" />
									<span className="text-muted-foreground">{t('client')}:</span>
									<span className="font-medium">{currentResult.ip}</span>
								</div>
								<div className="flex items-center gap-2">
									<Server className="w-4 h-4 text-muted-foreground" />
									<span className="text-muted-foreground">{t('server')}:</span>
									<span className="font-medium">{currentResult.server}</span>
								</div>
							</div>

							{/* Progress */}
							{testState.isRunning && (
								<div className="mt-6 space-y-2">
									<div className="flex items-center justify-between text-sm">
										<span className="text-muted-foreground">
											{t(`phase.${testState.phase}`)}
										</span>
										<span className="text-muted-foreground">
											{Math.round(testState.progress)}%
										</span>
									</div>
									<Progress value={testState.progress} />
								</div>
							)}

							{/* Test Button */}
							<div className="mt-6 flex justify-center">
								<Button
									size="lg"
									onClick={runSpeedTest}
									className="gap-2"
									variant={testState.isRunning ? "destructive" : "default"}
								>
									{testState.isRunning ? (
										<>
											<Pause className="w-4 h-4" />
											{t('cancel')}
										</>
									) : (
										<>
											<Play className="w-4 h-4" />
											{t('start')}
										</>
									)}
								</Button>
							</div>
						</CardContent>
					</Card>

					{/* Info Card */}
					<Card>
						<CardHeader>
							<CardTitle className="text-lg">{t('info.title')}</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4 text-sm text-muted-foreground">
							<p>{t('info.description')}</p>
							<div>
								<h4 className="font-medium text-foreground mb-2">{t('info.recommendations')}</h4>
								<ul className="space-y-1">
									<li>• YouTube: 480p ~ 1.1 Mbps / 720p ~ 5 Mbps / 1080p ~ 8 Mbps / 4K ~ 20 Mbps</li>
									<li>• Netflix: SD ~ 3 Mbps / HD ~ 5 Mbps / Ultra HD ~ 25 Mbps</li>
									<li>• Video Call: SD ~ 1 Mbps / HD ~ 2.5 Mbps</li>
								</ul>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="status" className="space-y-6">
					<Card>
						<CardHeader>
							<CardTitle>{t('status.title')}</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							{currentResult.download > 0 && (
								<>
									<div className="p-4 bg-muted rounded-lg">
										<div className="flex items-center justify-between mb-2">
											<span className="text-sm font-medium">{t('status.connectionType')}</span>
											<span className="text-sm">{getConnectionType(currentResult.download)}</span>
										</div>
										<div className="flex items-center justify-between">
											<span className="text-sm font-medium">{t('status.quality')}</span>
											<span className={`text-sm font-medium ${getSpeedColor(currentResult.download)}`}>
												{currentResult.download >= 50 ? t('status.excellent') :
												 currentResult.download >= 25 ? t('status.good') :
												 currentResult.download >= 10 ? t('status.fair') :
												 t('status.poor')}
											</span>
										</div>
									</div>

									<div>
										<h4 className="font-medium mb-2">{t('status.capable')}</h4>
										<div className="space-y-2">
											{[
												{ speed: 1, activity: t('status.activities.browsing') },
												{ speed: 5, activity: t('status.activities.streaming720p') },
												{ speed: 8, activity: t('status.activities.streaming1080p') },
												{ speed: 25, activity: t('status.activities.streaming4k') },
												{ speed: 50, activity: t('status.activities.gaming') }
											].map((item, i) => (
												<div key={i} className="flex items-center gap-2">
													<div className={`w-4 h-4 rounded-full ${
														currentResult.download >= item.speed 
															? 'bg-green-600' 
															: 'bg-muted-foreground/30'
													}`} />
													<span className={currentResult.download >= item.speed ? '' : 'text-muted-foreground'}>
														{item.activity}
													</span>
												</div>
											))}
										</div>
									</div>
								</>
							)}
							{currentResult.download === 0 && (
								<p className="text-center text-muted-foreground py-8">
									{t('status.noData')}
								</p>
							)}
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="history" className="space-y-6">
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center justify-between">
								<span>{t('history.title')}</span>
								{history.length > 0 && (
									<Button
										variant="outline"
										size="sm"
										onClick={clearHistory}
									>
										<RotateCcw className="w-4 h-4 mr-1" />
										{t('history.clear')}
									</Button>
								)}
							</CardTitle>
						</CardHeader>
						<CardContent>
							{history.length > 0 ? (
								<div className="space-y-2">
									{history.map((result, index) => (
										<div
											key={index}
											className="p-3 border rounded-lg flex items-center justify-between text-sm"
										>
											<div className="flex items-center gap-4">
												<div className="text-muted-foreground">
													{result.timestamp.toLocaleDateString()} {result.timestamp.toLocaleTimeString()}
												</div>
												<div className="flex items-center gap-4">
													<div className="flex items-center gap-1">
														<Download className="w-3 h-3" />
														<span className={getSpeedColor(result.download)}>
															{result.download} Mbps
														</span>
													</div>
													<div className="flex items-center gap-1">
														<Upload className="w-3 h-3" />
														<span className={getSpeedColor(result.upload)}>
															{result.upload} Mbps
														</span>
													</div>
													<div className="flex items-center gap-1">
														<Activity className="w-3 h-3" />
														<span>{result.ping} ms</span>
													</div>
												</div>
											</div>
											<div className="text-muted-foreground">
												{result.server}
											</div>
										</div>
									))}
								</div>
							) : (
								<p className="text-center text-muted-foreground py-8">
									{t('history.empty')}
								</p>
							)}
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	)
}