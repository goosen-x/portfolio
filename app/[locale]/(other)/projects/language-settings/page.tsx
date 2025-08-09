'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'
import { Languages, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'

interface Language {
  code: string
  name: string
  nativeName: string
  flag: string
  description: string
  rtl?: boolean
  inDevelopment?: boolean
}

const languages: Language[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    description: 'United States'
  },
  {
    code: 'ru',
    name: 'Russian',
    nativeName: 'Русский',
    flag: '🇷🇺',
    description: 'Россия'
  },
  {
    code: 'he',
    name: 'Hebrew',
    nativeName: 'עברית',
    flag: '🇮🇱',
    description: 'ישראל',
    rtl: true,
    inDevelopment: true
  }
]

export default function LanguageSettingsPage() {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  const handleLanguageChange = (newLocale: string) => {
    // Replace the locale in the current pathname
    const newPathname = pathname.replace(`/${locale}/`, `/${newLocale}/`)
    router.push(newPathname)
  }
  
  if (!mounted) {
    return (
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Language Settings</h1>
          <p className="text-muted-foreground">
            Choose your preferred language for the interface.
          </p>
        </div>
        <div className="animate-pulse">
          <div className="h-10 bg-muted rounded w-32 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-40 bg-muted rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Language Settings</h1>
        <p className="text-muted-foreground">
          Choose your preferred language for the interface.
        </p>
      </div>
      
      <div className="grid gap-4">
        <h2 className="text-lg font-semibold">Select Language</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {languages.map((language) => {
            const isActive = locale === language.code
            
            return (
              <Card
                key={language.code}
                className={cn(
                  "transition-all",
                  language.inDevelopment 
                    ? "opacity-50 cursor-not-allowed" 
                    : "cursor-pointer hover:shadow-md",
                  isActive && "ring-2 ring-accent"
                )}
                onClick={() => !language.inDevelopment && handleLanguageChange(language.code)}
              >
                <CardContent className="p-6 relative">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="text-4xl">
                      {language.flag}
                    </div>
                    <div>
                      <h3 className="font-semibold">{language.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {language.nativeName}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {language.description}
                      </p>
                    </div>
                    {language.inDevelopment ? (
                      <div className="text-xs text-muted-foreground font-medium">
                        In Development
                      </div>
                    ) : isActive ? (
                      <div className="flex items-center space-x-1 text-accent">
                        <Check className="w-4 h-4" />
                        <span className="text-xs font-medium">Current</span>
                      </div>
                    ) : null}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
      
      <div className="bg-muted/20 rounded-lg p-6 space-y-4">
        <h2 className="text-lg font-semibold">Language Features</h2>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <Check className="w-5 h-5 text-green-500 mt-0.5" />
            <div>
              <div className="font-medium">Automatic Content Translation</div>
              <div className="text-sm text-muted-foreground">
                All interface elements are automatically translated to your selected language
              </div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Check className="w-5 h-5 text-green-500 mt-0.5" />
            <div>
              <div className="font-medium">RTL Support</div>
              <div className="text-sm text-muted-foreground">
                Full right-to-left layout support for Hebrew and Arabic languages
              </div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Check className="w-5 h-5 text-green-500 mt-0.5" />
            <div>
              <div className="font-medium">Persistent Selection</div>
              <div className="text-sm text-muted-foreground">
                Your language preference is saved and remembered for future visits
              </div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Check className="w-5 h-5 text-green-500 mt-0.5" />
            <div>
              <div className="font-medium">SEO Optimized</div>
              <div className="text-sm text-muted-foreground">
                Each language version is properly indexed by search engines
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-sm text-muted-foreground">
        <p>
          Note: Some content like blog posts may not be available in all languages. 
          When content is not available in your selected language, it will be shown in the original language.
        </p>
      </div>
    </div>
  )
}