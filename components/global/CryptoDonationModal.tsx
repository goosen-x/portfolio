'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import { CryptoDonation } from './CryptoDonation'
import { Bitcoin } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

interface CryptoDonationModalProps {
  variant?: 'default' | 'sidebar'
}

export function CryptoDonationModal({ variant = 'default' }: CryptoDonationModalProps) {
  const t = useTranslations('CryptoDonation')
  const [open, setOpen] = useState(false)

  if (variant === 'sidebar') {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="default" size="sm" className="w-full justify-start">
            <Bitcoin className="w-4 h-4 mr-2" />
            {t('supportWithCrypto')}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>{t('title')}</DialogTitle>
            <DialogDescription>
              {t('subtitle')}
            </DialogDescription>
          </DialogHeader>
          <CryptoDonation />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="group flex items-center gap-2 relative">
          <div className="relative">
            <div className="absolute inset-0 rounded-lg opacity-0 scale-110 bg-gradient-to-br from-accent/20 to-accent/5 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 blur-sm" />
            <div className="relative p-1.5 rounded-lg border border-border/50 text-muted-foreground group-hover:border-accent/50 group-hover:text-accent transition-all duration-300">
              <Bitcoin className="w-3.5 h-3.5" />
            </div>
          </div>
          <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-all duration-300 whitespace-nowrap">
            {t('supportWithCrypto')}
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{t('title')}</DialogTitle>
          <DialogDescription>
            {t('subtitle')}
          </DialogDescription>
        </DialogHeader>
        <CryptoDonation />
      </DialogContent>
    </Dialog>
  )
}