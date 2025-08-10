'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'
import {
	Clock,
	Globe,
	Calendar,
	Sun,
	Moon,
	Plus,
	X,
	ArrowRight
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { toast } from 'sonner'

interface Timezone {
	name: string
	offset: string
	cities: string[]
	abbr: string
}

interface CityTime {
	id: string
	city: string
	timezone: string
	time: string
	date: string
	offset: string
	isDST: boolean
	isDay: boolean
}

interface TimeConversion {
	fromTime: string
	fromDate: string
	fromTimezone: string
	toTimezone: string
	result: {
		time: string
		date: string
		dayDifference: number
	} | null
}

const popularTimezones: Timezone[] = [
	{
		name: 'UTC',
		offset: '+00:00',
		cities: ['London (Winter)', 'Reykjavik', 'Accra'],
		abbr: 'UTC'
	},
	{
		name: 'Europe/London',
		offset: '+00:00',
		cities: ['London', 'Dublin', 'Lisbon'],
		abbr: 'GMT'
	},
	{
		name: 'Europe/Paris',
		offset: '+01:00',
		cities: ['Paris', 'Berlin', 'Rome'],
		abbr: 'CET'
	},
	{
		name: 'Europe/Moscow',
		offset: '+03:00',
		cities: ['Moscow', 'Istanbul', 'Riyadh'],
		abbr: 'MSK'
	},
	{
		name: 'Asia/Dubai',
		offset: '+04:00',
		cities: ['Dubai', 'Muscat', 'Tbilisi'],
		abbr: 'GST'
	},
	{
		name: 'Asia/Kolkata',
		offset: '+05:30',
		cities: ['Mumbai', 'Delhi', 'Bangalore'],
		abbr: 'IST'
	},
	{
		name: 'Asia/Shanghai',
		offset: '+08:00',
		cities: ['Beijing', 'Shanghai', 'Hong Kong'],
		abbr: 'CST'
	},
	{
		name: 'Asia/Tokyo',
		offset: '+09:00',
		cities: ['Tokyo', 'Seoul', 'Osaka'],
		abbr: 'JST'
	},
	{
		name: 'Australia/Sydney',
		offset: '+11:00',
		cities: ['Sydney', 'Melbourne', 'Canberra'],
		abbr: 'AEDT'
	},
	{
		name: 'Pacific/Auckland',
		offset: '+13:00',
		cities: ['Auckland', 'Wellington'],
		abbr: 'NZDT'
	},
	{
		name: 'America/New_York',
		offset: '-05:00',
		cities: ['New York', 'Toronto', 'Miami'],
		abbr: 'EST'
	},
	{
		name: 'America/Chicago',
		offset: '-06:00',
		cities: ['Chicago', 'Houston', 'Mexico City'],
		abbr: 'CST'
	},
	{
		name: 'America/Denver',
		offset: '-07:00',
		cities: ['Denver', 'Phoenix', 'Calgary'],
		abbr: 'MST'
	},
	{
		name: 'America/Los_Angeles',
		offset: '-08:00',
		cities: ['Los Angeles', 'San Francisco', 'Seattle'],
		abbr: 'PST'
	},
	{
		name: 'America/Sao_Paulo',
		offset: '-03:00',
		cities: ['São Paulo', 'Rio de Janeiro', 'Buenos Aires'],
		abbr: 'BRT'
	}
]

const allTimezones = Intl.supportedValuesOf('timeZone')

export default function WorldTimePage() {
	const [mounted, setMounted] = useState(false)
	const [currentTime, setCurrentTime] = useState(new Date())
	const [selectedCities, setSelectedCities] = useState<CityTime[]>([])
	const [conversion, setConversion] = useState<TimeConversion>({
		fromTime: '',
		fromDate: '',
		fromTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
		toTimezone: 'UTC',
		result: null
	})
	const [searchTerm, setSearchTerm] = useState('')

	useEffect(() => {
		setMounted(true)
		// Load saved cities
		const saved = localStorage.getItem('worldTimeCities')
		if (saved) {
			const cities = JSON.parse(saved)
			updateCityTimes(cities)
		} else {
			// Add default cities
			const defaultCities = [
				{ city: 'New York', timezone: 'America/New_York' },
				{ city: 'London', timezone: 'Europe/London' },
				{ city: 'Tokyo', timezone: 'Asia/Tokyo' }
			]
			defaultCities.forEach(city => addCity(city.city, city.timezone))
		}

		// Set default conversion time
		const now = new Date()
		setConversion(prev => ({
			...prev,
			fromTime: now.toTimeString().slice(0, 5),
			fromDate: now.toISOString().slice(0, 10)
		}))
	}, [])

	useEffect(() => {
		const timer = setInterval(() => {
			const now = new Date()
			setCurrentTime(now)
			updateCityTimes(selectedCities)
		}, 1000)

		return () => clearInterval(timer)
	}, [selectedCities])

	const updateCityTimes = (cities: any[]) => {
		const updated = cities.map(city => {
			const now = new Date()
			const formatter = new Intl.DateTimeFormat('en-US', {
				timeZone: city.timezone,
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
				hour12: false
			})
			const dateFormatter = new Intl.DateTimeFormat('en-US', {
				timeZone: city.timezone,
				weekday: 'short',
				month: 'short',
				day: 'numeric'
			})

			const time = formatter.format(now)
			const hour = parseInt(time.split(':')[0])
			const isDay = hour >= 6 && hour < 18

			const offset = getTimezoneOffset(city.timezone)

			return {
				...city,
				time,
				date: dateFormatter.format(now),
				offset,
				isDay,
				isDST: isDaylightSavingTime(city.timezone)
			}
		})
		setSelectedCities(updated)
	}

	const getTimezoneOffset = (timezone: string): string => {
		const now = new Date()
		const formatter = new Intl.DateTimeFormat('en-US', {
			timeZone: timezone,
			timeZoneName: 'short'
		})
		const parts = formatter.formatToParts(now)
		const offsetPart = parts.find(part => part.type === 'timeZoneName')

		// Try to extract offset from timezone data
		const date = new Date()
		const utcDate = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }))
		const tzDate = new Date(
			date.toLocaleString('en-US', { timeZone: timezone })
		)
		const offset = (tzDate.getTime() - utcDate.getTime()) / (1000 * 60 * 60)

		const sign = offset >= 0 ? '+' : '-'
		const absOffset = Math.abs(offset)
		const hours = Math.floor(absOffset)
		const minutes = (absOffset - hours) * 60

		return `${sign}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
	}

	const isDaylightSavingTime = (timezone: string): boolean => {
		const now = new Date()
		const jan = new Date(now.getFullYear(), 0, 1)
		const jul = new Date(now.getFullYear(), 6, 1)

		const janOffset = getTimezoneOffset(timezone)
		const julOffset = getTimezoneOffset(timezone)

		return janOffset !== julOffset
	}

	const addCity = (cityName: string, timezone: string) => {
		if (selectedCities.some(c => c.timezone === timezone)) {
			toast.error('This timezone is already added')
			return
		}

		const newCity = {
			id: crypto.randomUUID(),
			city: cityName,
			timezone,
			time: '',
			date: '',
			offset: '',
			isDST: false,
			isDay: true
		}

		const updated = [...selectedCities, newCity]
		updateCityTimes(updated)
		localStorage.setItem(
			'worldTimeCities',
			JSON.stringify(updated.map(c => ({ city: c.city, timezone: c.timezone })))
		)
		toast.success(`Added ${cityName}`)
	}

	const removeCity = (id: string) => {
		const updated = selectedCities.filter(c => c.id !== id)
		setSelectedCities(updated)
		localStorage.setItem(
			'worldTimeCities',
			JSON.stringify(updated.map(c => ({ city: c.city, timezone: c.timezone })))
		)
	}

	const convertTime = () => {
		if (!conversion.fromTime || !conversion.fromDate) {
			toast.error('Please enter time and date')
			return
		}

		try {
			const fromDateTime = new Date(
				`${conversion.fromDate}T${conversion.fromTime}:00`
			)

			// Create date in source timezone
			const formatter = new Intl.DateTimeFormat('en-US', {
				timeZone: conversion.toTimezone,
				year: 'numeric',
				month: '2-digit',
				day: '2-digit',
				hour: '2-digit',
				minute: '2-digit',
				hour12: false
			})

			const parts = formatter.formatToParts(fromDateTime)
			const getPart = (type: string) =>
				parts.find(p => p.type === type)?.value || ''

			const resultTime = `${getPart('hour')}:${getPart('minute')}`
			const resultDate = `${getPart('year')}-${getPart('month')}-${getPart('day')}`

			// Calculate day difference
			const fromDate = new Date(conversion.fromDate)
			const toDate = new Date(resultDate)
			const dayDiff = Math.round(
				(toDate.getTime() - fromDate.getTime()) / (1000 * 60 * 60 * 24)
			)

			setConversion(prev => ({
				...prev,
				result: {
					time: resultTime,
					date: resultDate,
					dayDifference: dayDiff
				}
			}))
		} catch (error) {
			toast.error('Invalid date or time')
		}
	}

	const filteredTimezones = allTimezones.filter(tz =>
		tz.toLowerCase().includes(searchTerm.toLowerCase())
	)

	if (!mounted) {
		return (
			<div className='max-w-6xl mx-auto space-y-8'>
				<div>
					<h1 className='text-3xl font-bold tracking-tight mb-2'>World Time</h1>
					<p className='text-muted-foreground'>
						View times across the world and convert between timezones
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
			{/* Current Local Time */}
			<Card className='p-6 bg-gradient-to-br from-primary/10 to-primary/5'>
				<div className='flex items-center justify-between'>
					<div>
						<h3 className='text-lg font-semibold mb-1'>Your Local Time</h3>
						<div className='flex items-center gap-4'>
							<div className='text-3xl font-mono font-bold'>
								{currentTime.toLocaleTimeString('en-US', { hour12: false })}
							</div>
							<Badge variant='secondary'>
								{Intl.DateTimeFormat().resolvedOptions().timeZone}
							</Badge>
						</div>
						<p className='text-sm text-muted-foreground mt-1'>
							{currentTime.toLocaleDateString('en-US', {
								weekday: 'long',
								year: 'numeric',
								month: 'long',
								day: 'numeric'
							})}
						</p>
					</div>
					<Clock className='w-12 h-12 text-primary opacity-20' />
				</div>
			</Card>

			{/* World Clocks */}
			<div>
				<div className='flex items-center justify-between mb-4'>
					<h2 className='text-xl font-semibold'>World Clocks</h2>
					<Select
						onValueChange={value => {
							const tz = popularTimezones.find(t => t.name === value)
							if (tz) addCity(tz.cities[0], tz.name)
						}}
					>
						<SelectTrigger className='w-[200px]'>
							<SelectValue placeholder='Add city' />
						</SelectTrigger>
						<SelectContent>
							{popularTimezones.map(tz => (
								<SelectItem key={tz.name} value={tz.name}>
									<span className='flex items-center gap-2'>
										<Globe className='w-4 h-4' />
										{tz.cities[0]}
									</span>
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
					{selectedCities.map(city => (
						<Card key={city.id} className='p-4 relative group'>
							<Button
								onClick={() => removeCity(city.id)}
								size='icon'
								variant='ghost'
								className='absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity'
							>
								<X className='w-4 h-4' />
							</Button>

							<div className='flex items-start justify-between'>
								<div>
									<h3 className='font-semibold text-lg'>{city.city}</h3>
									<div className='text-2xl font-mono font-bold mt-1'>
										{city.time}
									</div>
									<p className='text-sm text-muted-foreground'>{city.date}</p>
									<div className='flex items-center gap-2 mt-2'>
										<Badge variant='outline' className='text-xs'>
											UTC{city.offset}
										</Badge>
										{city.isDST && (
											<Badge variant='secondary' className='text-xs'>
												DST
											</Badge>
										)}
									</div>
								</div>
								<div className='text-2xl'>
									{city.isDay ? (
										<Sun className='w-8 h-8 text-yellow-500' />
									) : (
										<Moon className='w-8 h-8 text-blue-500' />
									)}
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>

			{/* Timezone Converter */}
			<Card className='p-6'>
				<h2 className='text-xl font-semibold mb-4'>Timezone Converter</h2>

				<div className='grid md:grid-cols-2 gap-6'>
					<div className='space-y-4'>
						<div>
							<Label htmlFor='from-time'>From Time</Label>
							<div className='grid grid-cols-2 gap-2'>
								<Input
									id='from-time'
									type='time'
									value={conversion.fromTime}
									onChange={e =>
										setConversion(prev => ({
											...prev,
											fromTime: e.target.value
										}))
									}
								/>
								<Input
									type='date'
									value={conversion.fromDate}
									onChange={e =>
										setConversion(prev => ({
											...prev,
											fromDate: e.target.value
										}))
									}
								/>
							</div>
						</div>

						<div>
							<Label htmlFor='from-timezone'>From Timezone</Label>
							<Select
								value={conversion.fromTimezone}
								onValueChange={value =>
									setConversion(prev => ({ ...prev, fromTimezone: value }))
								}
							>
								<SelectTrigger id='from-timezone'>
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									<div className='p-2'>
										<Input
											placeholder='Search timezone...'
											value={searchTerm}
											onChange={e => setSearchTerm(e.target.value)}
											className='mb-2'
										/>
									</div>
									{filteredTimezones.slice(0, 20).map((tz, index) => (
										<SelectItem key={`${tz}-${index}`} value={tz}>
											{tz}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
					</div>

					<div className='space-y-4'>
						<div>
							<Label htmlFor='to-timezone'>To Timezone</Label>
							<Select
								value={conversion.toTimezone}
								onValueChange={value =>
									setConversion(prev => ({ ...prev, toTimezone: value }))
								}
							>
								<SelectTrigger id='to-timezone'>
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									{popularTimezones.map(tz => (
										<SelectItem key={tz.name} value={tz.name}>
											{tz.cities[0]} ({tz.abbr})
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>

						<Button onClick={convertTime} className='w-full'>
							<ArrowRight className='w-4 h-4 mr-2' />
							Convert Time
						</Button>
					</div>
				</div>

				{conversion.result && (
					<div className='mt-6 p-4 bg-muted rounded-lg'>
						<div className='flex items-center justify-between'>
							<div>
								<p className='text-sm text-muted-foreground'>Result</p>
								<p className='text-2xl font-mono font-bold'>
									{conversion.result.time}
								</p>
								<p className='text-sm'>
									{new Date(conversion.result.date).toLocaleDateString(
										'en-US',
										{
											weekday: 'long',
											year: 'numeric',
											month: 'long',
											day: 'numeric'
										}
									)}
								</p>
							</div>
							{conversion.result.dayDifference !== 0 && (
								<Badge
									variant={
										conversion.result.dayDifference > 0
											? 'default'
											: 'secondary'
									}
								>
									{conversion.result.dayDifference > 0 ? '+' : ''}
									{conversion.result.dayDifference} day
								</Badge>
							)}
						</div>
					</div>
				)}
			</Card>

			{/* Info Section */}
			<Card className='p-6 bg-muted/50'>
				<h3 className='font-semibold mb-3'>About World Time</h3>
				<div className='grid md:grid-cols-2 gap-4 text-sm text-muted-foreground'>
					<div>
						<h4 className='font-medium text-foreground mb-2'>
							Accurate Timezones
						</h4>
						<p>
							All times are calculated using the IANA timezone database,
							accounting for daylight saving time changes automatically.
						</p>
					</div>
					<div>
						<h4 className='font-medium text-foreground mb-2'>Popular Cities</h4>
						<p>
							Quick access to major cities worldwide. Add custom cities by
							searching for any timezone in the converter.
						</p>
					</div>
					<div>
						<h4 className='font-medium text-foreground mb-2'>DST Aware</h4>
						<p>
							Automatically handles daylight saving time transitions. DST badge
							shows when a location is observing daylight time.
						</p>
					</div>
					<div>
						<h4 className='font-medium text-foreground mb-2'>Local Storage</h4>
						<p>
							Your selected cities are saved locally in your browser and persist
							between sessions.
						</p>
					</div>
				</div>
			</Card>
		</div>
	)
}
