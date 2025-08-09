'use client'

import { useState, useEffect } from 'react'
import { SunMoon, Sun, Moon, Monitor, Sparkles, Move, Circle, Square, Ban } from 'lucide-react'
import useThemeWithTransition, { TransitionType } from '@/lib/hooks/useThemeWithTransition'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'

const themes = [
  {
    value: 'light',
    label: 'Light',
    icon: Sun,
    description: 'Bright theme for daytime use'
  },
  {
    value: 'dark',
    label: 'Dark',
    icon: Moon,
    description: 'Dark theme for nighttime use'
  },
  {
    value: 'system',
    label: 'System',
    icon: Monitor,
    description: 'Follow system preference'
  }
]

const transitions: {
  value: TransitionType
  label: string
  icon: React.ComponentType<{ className?: string }>
  description: string
}[] = [
  {
    value: 'fade',
    label: 'Fade',
    icon: Sparkles,
    description: 'Smooth fade transition'
  },
  {
    value: 'scale',
    label: 'Scale',
    icon: Square,
    description: 'Scale in/out effect'
  },
  {
    value: 'slide',
    label: 'Slide',
    icon: Move,
    description: 'Slide from side'
  },
  {
    value: 'circle',
    label: 'Circle',
    icon: Circle,
    description: 'Expanding circle from click'
  },
  {
    value: 'none',
    label: 'None',
    icon: Ban,
    description: 'Instant switch'
  }
]

export default function ThemeSettingsPage() {
  const { theme, setTheme, transitionType, setTransitionType } = useThemeWithTransition()
  const [supportsViewTransitions, setSupportsViewTransitions] = useState(true)
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
    setSupportsViewTransitions(
      typeof document !== 'undefined' && 
      'startViewTransition' in document
    )
  }, [])
  
  // Function to trigger a theme change preview when transition type changes
  const handleTransitionTypeChange = (newType: TransitionType) => {
    setTransitionType(newType)
    
    // Trigger a preview by temporarily switching theme
    if (mounted && supportsViewTransitions && newType !== 'none') {
      // Create a fake click event for the preview
      const fakeEvent = {
        currentTarget: {
          getBoundingClientRect: () => ({
            left: window.innerWidth / 2 - 50,
            top: window.innerHeight / 2 - 50,
            width: 100,
            height: 100
          })
        }
      } as React.MouseEvent
      
      // Switch to opposite theme and back for preview
      const currentTheme = theme
      const previewTheme = currentTheme === 'dark' ? 'light' : 'dark'
      
      setTheme(previewTheme, fakeEvent)
      setTimeout(() => {
        setTheme(currentTheme!, fakeEvent)
      }, 600)
    }
  }
  
  // Avoid hydration mismatch by not rendering theme-dependent content until mounted
  if (!mounted) {
    return (
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Theme Settings</h1>
          <p className="text-muted-foreground">
            Customize the appearance of the site with your preferred theme.
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
    <>
      <div className="grid gap-4">
        <h2 className="text-lg font-semibold">Select Theme</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {themes.map((themeOption) => {
            const Icon = themeOption.icon
            const isActive = theme === themeOption.value
            
            return (
              <Card
                key={themeOption.value}
                className={cn(
                  "cursor-pointer transition-all hover:shadow-md",
                  isActive && "ring-2 ring-accent"
                )}
                onClick={(e) => setTheme(themeOption.value, e)}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className={cn(
                      "p-3 rounded-full",
                      isActive ? "bg-accent text-accent-foreground" : "bg-muted"
                    )}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{themeOption.label}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {themeOption.description}
                      </p>
                    </div>
                    {isActive && (
                      <div className="text-xs text-accent font-medium">
                        Active
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
      
      <div className="grid gap-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Transition Effect</h2>
            <p className="text-sm text-muted-foreground">
              Choose how the theme changes. The effect will preview automatically when selected.
            </p>
          </div>
          {mounted && supportsViewTransitions && transitionType !== 'none' && (
            <button
              onClick={() => {
                const fakeEvent = {
                  currentTarget: {
                    getBoundingClientRect: () => ({
                      left: window.innerWidth / 2 - 50,
                      top: window.innerHeight / 2 - 50,
                      width: 100,
                      height: 100
                    })
                  }
                } as React.MouseEvent
                
                const currentTheme = theme
                const previewTheme = currentTheme === 'dark' ? 'light' : 'dark'
                
                setTheme(previewTheme, fakeEvent)
                setTimeout(() => {
                  setTheme(currentTheme!, fakeEvent)
                }, 600)
              }}
              className="px-4 py-2 text-sm bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors"
            >
              Preview Again
            </button>
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {transitions.map((transition) => {
            const Icon = transition.icon
            const isActive = transitionType === transition.value
            
            return (
              <button
                key={transition.value}
                className={cn(
                  "p-4 rounded-lg border-2 transition-all hover:shadow-sm",
                  "flex flex-col items-center text-center space-y-2",
                  isActive 
                    ? "border-accent bg-accent/10" 
                    : "border-border hover:border-accent/50"
                )}
                onClick={() => handleTransitionTypeChange(transition.value)}
              >
                <Icon className={cn(
                  "w-6 h-6",
                  isActive && "text-accent"
                )} />
                <div>
                  <div className="text-sm font-medium">{transition.label}</div>
                  <div className="text-xs text-muted-foreground">{transition.description}</div>
                </div>
              </button>
            )
          })}
        </div>
        {!supportsViewTransitions && (
          <div className="text-sm text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/20 p-3 rounded-lg">
            View Transitions API is not supported in your browser. The transitions will fall back to instant switching.
          </div>
        )}
      </div>
      
      <div className="bg-muted/20 rounded-lg p-6 space-y-4">
        <h2 className="text-lg font-semibold">Theme Preview</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-background border rounded" />
            <div className="flex-1">
              <div className="font-medium">Background</div>
              <div className="text-sm text-muted-foreground">Main background color</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-foreground rounded" />
            <div className="flex-1">
              <div className="font-medium">Foreground</div>
              <div className="text-sm text-muted-foreground">Main text color</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-accent rounded" />
            <div className="flex-1">
              <div className="font-medium">Accent</div>
              <div className="text-sm text-muted-foreground">Accent color for highlights</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-muted rounded" />
            <div className="flex-1">
              <div className="font-medium">Muted</div>
              <div className="text-sm text-muted-foreground">Muted backgrounds and borders</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-sm text-muted-foreground">
        <p>
          The theme preference is saved locally and will persist across sessions.
          {mounted && theme === 'system' && ' Your system is currently in ' + (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') + ' mode.'}
        </p>
      </div>
    </>
  )
}