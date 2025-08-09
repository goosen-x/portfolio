import { neon } from '@neondatabase/serverless'

// Handle missing DATABASE_URL during build time
const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL

// Create mock sql function for when database is not configured
const mockSql = Object.assign(
	async () => {
		console.warn('Database not configured, returning empty result')
		return []
	},
	{
		unsafe: () => {
			console.warn('Database not configured, returning empty result')
			return []
		}
	}
)

let sql: any

try {
	sql = databaseUrl ? neon(databaseUrl, {
		fetchOptions: {
			// Add timeout to prevent hanging
			signal: AbortSignal.timeout(5000),
		}
	}) : mockSql
} catch (error) {
	console.error('Error initializing database connection:', error)
	sql = mockSql
}

export { sql }

if (!databaseUrl) {
	console.warn('DATABASE_URL is not set. Database features will be disabled.')
}