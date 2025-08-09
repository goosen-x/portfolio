'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useTranslations, useLocale } from 'next-intl'
import { ArrowRight, Palette, Spline, Grid3X3, Box, Hash, FileCode } from 'lucide-react'

const tools = [
  {
    id: 'css-clamp-calculator',
    icon: Hash,
    category: 'css'
  },
  {
    id: 'color-converter',
    icon: Palette,
    category: 'design'
  },
  {
    id: 'bezier-curve',
    icon: Spline,
    category: 'css'
  },
  {
    id: 'flexbox-generator',
    icon: Box,
    category: 'css'
  },
  {
    id: 'grid-generator',
    icon: Grid3X3,
    category: 'css'
  },
  {
    id: 'css-specificity',
    icon: FileCode,
    category: 'css'
  }
]

interface RelatedToolsProps {
  currentTool: string
  category?: string
}

export function RelatedTools({ currentTool, category = 'css' }: RelatedToolsProps) {
  const t = useTranslations('widgets')
  const locale = useLocale()
  
  // Get related tools (same category or just different tools)
  const relatedTools = tools
    .filter(tool => tool.id !== currentTool)
    .filter(tool => category ? tool.category === category : true)
    .slice(0, 3)

  if (relatedTools.length === 0) {
    return null
  }

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-lg">
          {locale === 'ru' ? 'Похожие инструменты' : locale === 'he' ? 'כלים דומים' : 'Related Tools'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 sm:grid-cols-3">
          {relatedTools.map((tool) => {
            const Icon = tool.icon
            const title = t(`${tool.id.replace(/-/g, '')}.title` as any)
            
            return (
              <Link
                key={tool.id}
                href={`/${locale}/projects/${tool.id}`}
                className="group flex items-center gap-3 rounded-lg border p-3 transition-colors hover:bg-accent"
              >
                <Icon className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
                <div className="flex-1">
                  <p className="text-sm font-medium leading-tight">{title}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
              </Link>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}