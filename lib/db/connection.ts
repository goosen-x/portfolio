import { neon } from '@neondatabase/serverless'

// Handle missing DATABASE_URL during build time
const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL


// Create mock sql function for when database is not configured
const mockSql = Object.assign(
	async () => {
		throw new Error('Database not configured')
	},
	{
		unsafe: () => {
			throw new Error('Database not configured')
		}
	}
)

export const sql = databaseUrl ? neon(databaseUrl) : mockSql

if (!databaseUrl) {
	console.warn('DATABASE_URL is not set. Database features will be disabled.')
}