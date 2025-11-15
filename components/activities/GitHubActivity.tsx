'use client'

import { useEffect, useState } from 'react'
import ActivityCalendar from 'react-activity-calendar'
import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { GitBranch, Github } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

interface Contribution {
	date: string
	count: number
	level: 0 | 1 | 2 | 3 | 4
}

interface GitHubActivityProps {
	username: string
}

export function GitHubActivity({ username }: GitHubActivityProps) {
	const t = useTranslations('activities.github')
	const [contributions, setContributions] = useState<Contribution[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)
	const [stats, setStats] = useState({
		total: 0,
		year: new Date().getFullYear()
	})

	useEffect(() => {
		const fetchGitHubData = async () => {
			try {
				// Using GitHub GraphQL API through a proxy
				const response = await fetch(
					`https://github-contributions-api.jogruber.de/v4/${username}?y=last`
				)

				if (!response.ok) {
					throw new Error('Failed to fetch GitHub data')
				}

				const data = await response.json()

				if (data.total) {
					// API returns total contributions
					setStats({
						total: data.total.lastYear || 0,
						year: new Date().getFullYear()
					})
				}

				if (data.contributions && Array.isArray(data.contributions)) {
					// Flatten contributions array if it's nested by year
					let flatContributions: Contribution[] = []

					data.contributions.forEach((item: any) => {
						if (item.contributions && Array.isArray(item.contributions)) {
							flatContributions = [...flatContributions, ...item.contributions]
						} else if (item.date) {
							flatContributions.push(item)
						}
					})

					// If still no contributions, use the data as is
					if (flatContributions.length === 0 && data.contributions.length > 0) {
						flatContributions = data.contributions
					}

					// Take only last 365 days
					const oneYearAgo = new Date()
					oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1)

					const recentContributions = flatContributions
						.filter((c: Contribution) => new Date(c.date) > oneYearAgo)
						.sort(
							(a: Contribution, b: Contribution) =>
								new Date(a.date).getTime() - new Date(b.date).getTime()
						)

					setContributions(recentContributions)

					// Calculate total if not provided
					if (!data.total?.lastYear) {
						const total = recentContributions.reduce(
							(sum, c) => sum + c.count,
							0
						)
						setStats(prev => ({ ...prev, total }))
					}
				}
			} catch (err) {
				console.error('Error fetching GitHub data:', err)
				setError(err instanceof Error ? err.message : 'An error occurred')
			} finally {
				setLoading(false)
			}
		}

		fetchGitHubData()
	}, [username])

	if (loading) {
		return (
			<Card className='p-6'>
				<div className='flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3'>
					<div className='flex items-center gap-3'>
						<div className='p-2 rounded-lg bg-green-500/10'>
							<Github className='w-5 h-5 text-green-700 dark:text-green-400' />
						</div>
						<h2 className='text-2xl font-bold'>{t('title')}</h2>
					</div>
					<Skeleton className='h-5 w-24' />
				</div>

				<div className='space-y-6'>
					{/* Activity Calendar Skeleton */}
					<div className='overflow-x-auto pb-2'>
						<div className='inline-block'>
							<div className='grid grid-flow-col gap-[5px]'>
								{/* Generate 52 weeks of skeleton */}
								{Array.from({ length: 52 }).map((_, weekIndex) => (
									<div key={weekIndex} className='grid grid-rows-7 gap-[5px]'>
										{Array.from({ length: 7 }).map((_, dayIndex) => (
											<Skeleton
												key={`${weekIndex}-${dayIndex}`}
												className='w-[14px] h-[14px] rounded-sm'
											/>
										))}
									</div>
								))}
							</div>
							{/* Total count skeleton */}
							<div className='mt-2 flex justify-center'>
								<Skeleton className='h-4 w-48' />
							</div>
						</div>
					</div>

					{/* Stats Grid Skeleton */}
					<div className='grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t'>
						{Array.from({ length: 4 }).map((_, index) => (
							<div key={index} className='text-center'>
								<Skeleton className='h-8 w-12 mx-auto mb-2' />
								<Skeleton className='h-4 w-24 mx-auto' />
							</div>
						))}
					</div>
				</div>
			</Card>
		)
	}

	if (error || contributions.length === 0) {
		return (
			<Card className='p-6'>
				<div className='flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3'>
					<div className='flex items-center gap-3'>
						<div className='p-2 rounded-lg bg-green-500/10'>
							<Github className='w-5 h-5 text-green-700 dark:text-green-400' />
						</div>
						<h2 className='text-2xl font-bold'>{t('title')}</h2>
					</div>
				</div>
				<div className='flex items-center justify-center h-[250px]'>
					<p className='text-muted-foreground'>{t('error')}</p>
				</div>
			</Card>
		)
	}

	const theme = {
		light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
		dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
	}

	const activeDays = contributions.filter(d => d.count > 0).length
	const maxContributions = Math.max(...contributions.map(d => d.count))
	const avgContributions = Math.round(stats.total / 365)

	return (
		<Card className='p-6'>
			<div className='flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3'>
				<div className='flex items-center gap-3'>
					<div className='p-2 rounded-lg bg-green-500/10'>
						<Github className='w-5 h-5 text-green-700 dark:text-green-400' />
					</div>
					<h2 className='text-2xl font-bold'>{t('title')}</h2>
				</div>
				<Link
					href={`https://github.com/${username}`}
					target='_blank'
					rel='noopener noreferrer'
					className='text-sm text-muted-foreground hover:text-primary transition-colors'
				>
					{t('viewProfile')} →
				</Link>
			</div>

			<div className='space-y-6'>
				<div className='overflow-x-auto pb-2'>
					<ActivityCalendar
						data={contributions}
						theme={theme}
						showWeekdayLabels
						blockSize={14}
						blockMargin={5}
						fontSize={14}
						hideColorLegend={false}
						hideTotalCount={false}
						weekStart={1}
						labels={{
							totalCount: `{{count}} ${t('contributionsText')}`
						}}
					/>
				</div>

				<div className='grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t'>
					<div className='text-center'>
						<div className='text-2xl font-bold text-primary'>{stats.total}</div>
						<p className='text-xs text-muted-foreground'>{t('stats.total')}</p>
					</div>
					<div className='text-center'>
						<div className='text-2xl font-bold text-primary'>
							{avgContributions}
						</div>
						<p className='text-xs text-muted-foreground'>
							{t('stats.average')}
						</p>
					</div>
					<div className='text-center'>
						<div className='text-2xl font-bold text-primary'>{activeDays}</div>
						<p className='text-xs text-muted-foreground'>
							{t('stats.activeDays')}
						</p>
					</div>
					<div className='text-center'>
						<div className='text-2xl font-bold text-primary'>
							{maxContributions}
						</div>
						<p className='text-xs text-muted-foreground'>{t('stats.maxDay')}</p>
					</div>
				</div>
			</div>
		</Card>
	)
}
