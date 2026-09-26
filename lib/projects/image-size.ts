import { readFileSync } from 'node:fs'
import { join } from 'node:path'

export function getPngSize(src: string) {
	try {
		const buf = readFileSync(join(process.cwd(), 'public', src))
		return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) }
	} catch {
		return { width: 1440, height: 900 }
	}
}
