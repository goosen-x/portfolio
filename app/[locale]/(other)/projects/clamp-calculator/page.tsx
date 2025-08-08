'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Copy, Check, AlertCircle } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'

export default function ClampCalculatorPage() {
	const [unit, setUnit] = useState<'px' | 'rem'>('rem')
	const [minValue, setMinValue] = useState(16)
	const [maxValue, setMaxValue] = useState(24)
	const [minViewport, setMinViewport] = useState(375)
	const [maxViewport, setMaxViewport] = useState(1440)
	const [copied, setCopied] = useState(false)
	const [errors, setErrors] = useState<string[]>([])

	const toRem = (value: number) => +(value / 16).toFixed(3)
	const toPx = (value: number) => +(value * 16).toFixed(3)

	const variablePart = (maxValue - minValue) / (maxViewport - minViewport)
	const constant = parseFloat(((maxValue - maxViewport * variablePart) / 16).toFixed(3))
	
	const result = `clamp(${toRem(minValue)}rem,${constant ? ` ${constant}rem +` : ''} ${parseFloat((100 * variablePart).toFixed(2))}vw, ${toRem(maxValue)}rem)`

	const validate = () => {
		const newErrors: string[] = []
		
		if (minViewport < 0 || maxViewport < 1) {
			newErrors.push('Please make sure all the viewport values are positive numbers and the max viewport is greater than 0')
		}
		if (minValue >= maxValue) {
			newErrors.push('Min value must be less than max value')
		}
		if (minViewport >= maxViewport) {
			newErrors.push('Min viewport must be less than max viewport')
		}
		if ([minValue, maxValue, minViewport, maxViewport].some(v => isNaN(v))) {
			newErrors.push('Please make sure all fields are filled with numbers')
		}
		
		setErrors(newErrors)
	}

	const copyToClipboard = () => {
		navigator.clipboard.writeText(result).then(() => {
			setCopied(true)
			setTimeout(() => setCopied(false), 2000)
		})
	}

	const handleValueChange = (value: number, setter: (v: number) => void) => {
		if (unit === 'rem') {
			setter(toPx(value))
		} else {
			setter(value)
		}
	}

	useEffect(() => {
		validate()
	}, [minValue, maxValue, minViewport, maxViewport])

	// Save to URL
	useEffect(() => {
		if ([minValue, maxValue, minViewport, maxViewport].some(v => isNaN(v))) return
		
		const params = new URLSearchParams()
		params.set('values', `${minValue},${maxValue},${minViewport},${maxViewport}`)
		window.history.replaceState({}, '', `?${params.toString()}`)
	}, [minValue, maxValue, minViewport, maxViewport])

	// Load from URL
	useEffect(() => {
		const params = new URLSearchParams(window.location.search)
		const values = params.get('values')?.split(',').map(Number)
		
		if (values && values.length === 4 && values.every(v => !isNaN(v))) {
			setMinValue(values[0])
			setMaxValue(values[1])
			setMinViewport(values[2])
			setMaxViewport(values[3])
		}
	}, [])

	return (
		<div className="max-w-4xl mx-auto">
			<h1 className="text-2xl font-bold mb-2">CSS Clamp Calculator</h1>
			<p className="text-muted-foreground mb-6">
				Create fluid typography and spacing that scales smoothly between viewport sizes.
			</p>

			<div className="grid gap-6 md:grid-cols-2">
				<Card className="p-6">
					<div className="flex items-center justify-between mb-4">
						<h3 className="font-semibold">Values</h3>
						<RadioGroup value={unit} onValueChange={(v) => setUnit(v as 'px' | 'rem')}>
							<div className="flex items-center space-x-4">
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="px" id="px" />
									<Label htmlFor="px">px</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="rem" id="rem" />
									<Label htmlFor="rem">rem</Label>
								</div>
							</div>
						</RadioGroup>
					</div>

					<div className="space-y-4">
						<div>
							<Label htmlFor="min-value">Min</Label>
							<div className="relative">
								<Input
									id="min-value"
									type="number"
									step="any"
									value={unit === 'px' ? minValue : toRem(minValue)}
									onChange={(e) => handleValueChange(parseFloat(e.target.value) || 0, setMinValue)}
									className="pr-12"
								/>
								<span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
									{unit}
								</span>
							</div>
							<p className="text-xs text-muted-foreground mt-1">
								Can be negative, e.g. for margins or positioning
							</p>
						</div>

						<div>
							<Label htmlFor="max-value">Max</Label>
							<div className="relative">
								<Input
									id="max-value"
									type="number"
									step="any"
									value={unit === 'px' ? maxValue : toRem(maxValue)}
									onChange={(e) => handleValueChange(parseFloat(e.target.value) || 0, setMaxValue)}
									className="pr-12"
								/>
								<span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
									{unit}
								</span>
							</div>
						</div>
					</div>
				</Card>

				<Card className="p-6">
					<h3 className="font-semibold mb-4">Viewport</h3>
					<div className="space-y-4">
						<div>
							<Label htmlFor="min-viewport">Min</Label>
							<div className="relative">
								<Input
									id="min-viewport"
									type="number"
									step="any"
									min="0"
									value={minViewport}
									onChange={(e) => setMinViewport(parseFloat(e.target.value) || 0)}
									className="pr-12"
								/>
								<span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
									px
								</span>
							</div>
						</div>

						<div>
							<Label htmlFor="max-viewport">Max</Label>
							<div className="relative">
								<Input
									id="max-viewport"
									type="number"
									step="any"
									min="0"
									value={maxViewport}
									onChange={(e) => setMaxViewport(parseFloat(e.target.value) || 0)}
									className="pr-12"
								/>
								<span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
									px
								</span>
							</div>
						</div>
					</div>
				</Card>
			</div>

			{errors.length > 0 && (
				<Alert variant="destructive" className="mt-6">
					<AlertCircle className="h-4 w-4" />
					<AlertDescription>
						<strong>Oh no, there are errors:</strong>
						<ul className="list-disc list-inside mt-2">
							{errors.map((error, index) => (
								<li key={index}>{error}</li>
							))}
						</ul>
					</AlertDescription>
				</Alert>
			)}

			<Card className="mt-6 p-6">
				<h3 className="font-semibold mb-4">Result</h3>
				<div className="bg-muted rounded-lg p-4 font-mono text-sm flex items-center justify-between">
					<code>{result}</code>
					<Button
						size="sm"
						variant="outline"
						onClick={copyToClipboard}
						className="ml-4"
					>
						{copied ? (
							<Check className="h-4 w-4 text-green-500" />
						) : (
							<Copy className="h-4 w-4" />
						)}
					</Button>
				</div>
			</Card>

			<Card className="mt-6 p-6">
				<h3 className="font-semibold mb-4">Live Example</h3>
				<p 
					className="text-lg leading-relaxed"
					style={{ fontSize: result }}
					contentEditable
					suppressContentEditableWarning
				>
					This text uses the calculated clamp formula. Try editing this text or resize your browser window to see how it scales smoothly between the minimum and maximum values! 🎨
				</p>
			</Card>
		</div>
	)
}