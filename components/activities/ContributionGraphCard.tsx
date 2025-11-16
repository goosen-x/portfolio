'use client'

import { Card } from '@/components/ui/card'
import { ContributionGraph, type ContributionData } from '@/components/smoothui/contribution-graph'
import { Github } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

interface GitHubContribution {
	date: string
	count: number
	level: 0 | 1 | 2 | 3 | 4
}

export function ContributionGraphCard() {
	const t = useTranslations('activities.github')
	const [contributions, setContributions] = useState<ContributionData[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)
	const [stats, setStats] = useState({
		total: 0,
		average: 0,
		activeDays: 0,
		maxDay: 0
	})
	const currentYear = new Date().getFullYear()
	const username = 'goosen-x'

	useEffect(() => {
		const fetchGitHubData = async () => {
			try {
				const response = await fetch(
					`https://github-contributions-api.jogruber.de/v4/${username}?y=last`
				)

				if (!response.ok) {
					throw new Error('Failed to fetch GitHub data')
				}

				const data = await response.json()

				if (data.contributions && Array.isArray(data.contributions)) {
					// Flatten contributions array
					let flatContributions: GitHubContribution[] = []

					data.contributions.forEach((item: any) => {
						if (item.contributions && Array.isArray(item.contributions)) {
							flatContributions = [...flatContributions, ...item.contributions]
						} else if (item.date) {
							flatContributions.push(item)
						}
					})

					if (flatContributions.length === 0 && data.contributions.length > 0) {
						flatContributions = data.contributions
					}

					// Filter for current year
					const yearStart = new Date(currentYear, 0, 1)
					const yearEnd = new Date(currentYear, 11, 31)

					const yearContributions = flatContributions
						.filter((c: GitHubContribution) => {
							const date = new Date(c.date)
							return date >= yearStart && date <= yearEnd
						})
						.sort(
							(a: GitHubContribution, b: GitHubContribution) =>
								new Date(a.date).getTime() - new Date(b.date).getTime()
						)

					setContributions(yearContributions)

					// Calculate stats
					const total = yearContributions.reduce((sum, c) => sum + c.count, 0)
					const activeDays = yearContributions.filter(c => c.count > 0).length
					const maxDay = Math.max(...yearContributions.map(c => c.count), 0)
					const average = Math.round(total / 365)

					setStats({
						total,
						average,
						activeDays,
						maxDay
					})
				}
			} catch (err) {
				console.error('Error fetching GitHub data:', err)
				setError(err instanceof Error ? err.message : 'An error occurred')
			} finally {
				setLoading(false)
			}
		}

		fetchGitHubData()
	}, [currentYear, username])

	if (loading) {
		return (
			<Card className='md:col-span-2 lg:col-span-4 p-6 bg-card/50'>
				<div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6'>
					<div className='flex items-center gap-3'>
						<div className='p-2 rounded-lg bg-green-500/10'>
							<Github className='w-6 h-6 text-green-600 dark:text-green-500' />
						</div>
						<div>
							<Skeleton className='h-7 w-48 mb-2' />
							<Skeleton className='h-4 w-32' />
						</div>
					</div>
					<Skeleton className='h-10 w-32' />
				</div>
				<Skeleton className='h-40 w-full' />
			</Card>
		)
	}

	if (error || contributions.length === 0) {
		return (
			<Card className='md:col-span-2 lg:col-span-4 p-6 bg-card/50'>
				<div className='flex items-center gap-3'>
					<div className='p-2 rounded-lg bg-green-500/10'>
						<Github className='w-6 h-6 text-green-600 dark:text-green-500' />
					</div>
					<h3 className='text-xl font-bold'>{t('title')}</h3>
				</div>
				<div className='flex items-center justify-center h-40 mt-4'>
					<p className='text-muted-foreground'>{t('error')}</p>
				</div>
			</Card>
		)
	}

	return (
		<Card className='md:col-span-2 lg:col-span-4 p-6 bg-card/50'>
			<div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6'>
				<div className='flex items-center gap-3'>
					<div className='p-2 rounded-lg bg-green-500/10'>
						<Github className='w-6 h-6 text-green-600 dark:text-green-500' />
					</div>
					<div>
						<h3 className='text-xl font-bold'>{t('title')}</h3>
						<p className='text-sm text-muted-foreground'>{currentYear} Activity</p>
					</div>
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

			<div className='overflow-x-auto flex justify-center'>
				<ContributionGraph
					data={contributions}
					year={currentYear}
					showLegend={true}
					showTooltips={true}
					className='border rounded-lg p-4'
				/>
			</div>

			{/* Stats Grid */}
			<div className='grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 mt-6 border-t'>
				<div className='text-center'>
					<div className='text-2xl font-bold text-green-600 dark:text-green-500'>
						{stats.total}
					</div>
					<p className='text-xs text-muted-foreground mt-1'>{t('stats.total')}</p>
				</div>
				<div className='text-center'>
					<div className='text-2xl font-bold text-green-600 dark:text-green-500'>
						{stats.average}
					</div>
					<p className='text-xs text-muted-foreground mt-1'>{t('stats.average')}</p>
				</div>
				<div className='text-center'>
					<div className='text-2xl font-bold text-green-600 dark:text-green-500'>
						{stats.activeDays}
					</div>
					<p className='text-xs text-muted-foreground mt-1'>{t('stats.activeDays')}</p>
				</div>
				<div className='text-center'>
					<div className='text-2xl font-bold text-green-600 dark:text-green-500'>
						{stats.maxDay}
					</div>
					<p className='text-xs text-muted-foreground mt-1'>{t('stats.maxDay')}</p>
				</div>
			</div>
		</Card>
	)
}
