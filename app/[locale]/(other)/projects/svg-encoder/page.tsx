'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Copy, Check, Upload } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function SVGEncoderPage() {
	const [svgInput, setSvgInput] = useState('')
	const [encodedResult, setEncodedResult] = useState('')
	const [cssResult, setCssResult] = useState('')
	const [quotes, setQuotes] = useState<'single' | 'double'>('double')
	const [backgroundColor, setBackgroundColor] = useState('white')
	const [copiedField, setCopiedField] = useState<string | null>(null)
	const [isDragging, setIsDragging] = useState(false)

	const exampleSvg = `<svg>
  <circle r="50" cx="50" cy="50" fill="tomato"/>
  <circle r="41" cx="47" cy="50" fill="orange"/>
  <circle r="33" cx="48" cy="53" fill="gold"/>
  <circle r="25" cx="49" cy="51" fill="yellowgreen"/>
  <circle r="17" cx="52" cy="50" fill="lightseagreen"/>
  <circle r="9" cx="55" cy="48" fill="teal"/>
</svg>`

	const symbols = /[\r\n%#()<>?[\\\]^`{|}]/g

	const getQuotesConfig = () => {
		const double = '"'
		const single = "'"
		return {
			level1: quotes === 'double' ? double : single,
			level2: quotes === 'double' ? single : double
		}
	}

	const addNameSpace = (data: string) => {
		const quotesConfig = getQuotesConfig()
		if (data.indexOf('http://www.w3.org/2000/svg') < 0) {
			data = data.replace(/<svg/g, `<svg xmlns=${quotesConfig.level2}http://www.w3.org/2000/svg${quotesConfig.level2}`)
		}
		return data
	}

	const encodeSVG = (data: string) => {
		// Use single quotes instead of double to avoid encoding
		if (quotes === 'double') {
			data = data.replace(/"/g, "'")
		} else {
			data = data.replace(/'/g, '"')
		}

		data = data.replace(/>\s{1,}</g, '><')
		data = data.replace(/\s{2,}/g, ' ')

		return data.replace(symbols, encodeURIComponent)
	}

	const getResults = () => {
		if (!svgInput) {
			setEncodedResult('')
			setCssResult('')
			return
		}

		const namespaced = addNameSpace(svgInput)
		const encoded = encodeSVG(namespaced)
		const quotesConfig = getQuotesConfig()
		
		setEncodedResult(encoded)
		const css = `background-image: url(${quotesConfig.level1}data:image/svg+xml,${encoded}${quotesConfig.level1});`
		setCssResult(css)
	}

	const handleEncodedChange = (value: string) => {
		const cleaned = value.trim()
			.replace(/background-image:\s{0,}url\(/, '')
			.replace(/["']{0,}data:image\/svg\+xml,/, '')
			.replace(/["']\);{0,}$/, '')
		
		try {
			setSvgInput(decodeURIComponent(cleaned))
		} catch (e) {
			// Invalid encoded value
		}
	}

	const copyToClipboard = (text: string, field: string) => {
		navigator.clipboard.writeText(text).then(() => {
			setCopiedField(field)
			setTimeout(() => setCopiedField(null), 2000)
		})
	}

	const handleDragOver = (e: React.DragEvent) => {
		e.preventDefault()
		setIsDragging(true)
	}

	const handleDragLeave = () => {
		setIsDragging(false)
	}

	const handleDrop = (e: React.DragEvent) => {
		e.preventDefault()
		setIsDragging(false)
		
		const file = e.dataTransfer.files[0]
		if (file && file.type === 'image/svg+xml') {
			const reader = new FileReader()
			reader.onload = (e) => {
				setSvgInput(e.target?.result as string)
			}
			reader.readAsText(file)
		}
	}

	useEffect(() => {
		getResults()
	}, [svgInput, quotes])

	return (
		<div className="max-w-6xl mx-auto">
			<h1 className="text-2xl font-bold mb-2">SVG URL Encoder</h1>
			<p className="text-muted-foreground mb-6">
				Encode SVG for use in CSS background-image property. Drag & drop SVG files or paste code.
			</p>

			<div className="mb-6">
				<Card className="p-4">
					<div className="flex items-center gap-6">
						<span className="font-medium">Quotes:</span>
						<RadioGroup value={quotes} onValueChange={(v) => setQuotes(v as 'single' | 'double')}>
							<div className="flex items-center space-x-4">
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="single" id="single" />
									<Label htmlFor="single">Single</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="double" id="double" />
									<Label htmlFor="double">Double</Label>
								</div>
							</div>
						</RadioGroup>
					</div>
				</Card>
			</div>

			<div className="grid gap-6 lg:grid-cols-2">
				<div 
					className={cn(
						"relative",
						isDragging && "opacity-75"
					)}
					onDragOver={handleDragOver}
					onDragLeave={handleDragLeave}
					onDrop={handleDrop}
				>
					<Card className="p-6 h-full">
						<div className="flex items-center justify-between mb-4">
							<h3 className="font-semibold">Insert SVG:</h3>
							<Button
								size="sm"
								variant="outline"
								onClick={() => setSvgInput(exampleSvg)}
							>
								Example
							</Button>
						</div>
						<textarea
							value={svgInput}
							onChange={(e) => setSvgInput(e.target.value)}
							className="w-full h-64 p-3 font-mono text-sm border rounded-md bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary"
							placeholder="Paste your SVG code here or drag & drop an SVG file..."
							spellCheck={false}
						/>
						{isDragging && (
							<div className="absolute inset-0 flex items-center justify-center bg-background/80 rounded-lg">
								<div className="text-center">
									<Upload className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
									<p className="text-sm font-medium">Drop SVG file here</p>
								</div>
							</div>
						)}
					</Card>
				</div>

				<Card className="p-6">
					<div className="flex items-center justify-between mb-4">
						<h3 className="font-semibold">Take encoded:</h3>
						<Button
							size="sm"
							variant="outline"
							onClick={() => copyToClipboard(encodedResult, 'encoded')}
							disabled={!encodedResult}
						>
							{copiedField === 'encoded' ? (
								<Check className="h-4 w-4 text-green-500" />
							) : (
								<Copy className="h-4 w-4" />
							)}
						</Button>
					</div>
					<textarea
						value={encodedResult}
						onChange={(e) => handleEncodedChange(e.target.value)}
						className="w-full h-64 p-3 font-mono text-sm border rounded-md bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary"
						placeholder="Encoded result will appear here..."
						spellCheck={false}
					/>
					<p className="text-xs text-muted-foreground mt-2">
						You can edit this field to decode back to SVG
					</p>
				</Card>

				<Card className="p-6">
					<div className="flex items-center justify-between mb-4">
						<h3 className="font-semibold">Ready for CSS:</h3>
						<Button
							size="sm"
							variant="outline"
							onClick={() => copyToClipboard(cssResult, 'css')}
							disabled={!cssResult}
						>
							{copiedField === 'css' ? (
								<Check className="h-4 w-4 text-green-500" />
							) : (
								<Copy className="h-4 w-4" />
							)}
						</Button>
					</div>
					<textarea
						value={cssResult}
						readOnly
						className="w-full h-64 p-3 font-mono text-sm border rounded-md bg-muted resize-none"
						placeholder="CSS result will appear here..."
						spellCheck={false}
					/>
				</Card>

				<Card className="p-6">
					<h3 className="font-semibold mb-4">Preview:</h3>
					<div className="mb-4">
						<span className="text-sm font-medium mr-2">Background:</span>
						<div className="inline-flex gap-2">
							{[
								{ color: 'white', label: 'White', class: 'bg-white border' },
								{ color: 'silver', label: 'Silver', class: 'bg-gray-400' },
								{ color: 'black', label: 'Black', class: 'bg-black' }
							].map((bg) => (
								<button
									key={bg.color}
									onClick={() => setBackgroundColor(bg.color)}
									className={cn(
										"w-8 h-8 rounded-md transition-all",
										bg.class,
										backgroundColor === bg.color && "ring-2 ring-primary ring-offset-2"
									)}
									title={bg.label}
								>
									<span className="sr-only">{bg.label}</span>
								</button>
							))}
						</div>
					</div>
					<div 
						className="h-64 rounded-md border flex items-center justify-center"
						style={{ backgroundColor }}
					>
						<div 
							className="w-32 h-32"
							style={{ 
								backgroundImage: cssResult ? cssResult.replace('background-image: ', '').replace(';', '') : '',
								backgroundRepeat: 'no-repeat',
								backgroundPosition: 'center',
								backgroundSize: 'contain'
							}}
						/>
					</div>
				</Card>
			</div>
		</div>
	)
}