import { config } from 'dotenv'
import path from 'path'

// Load environment variables FIRST
config({ path: path.join(process.cwd(), '.env.local') })

// Now we can safely import after env vars are loaded
async function testConnection() {
	console.log('Testing database connection...')
	console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'Set' : 'Not set')
	console.log('POSTGRES_URL:', process.env.POSTGRES_URL ? 'Set' : 'Not set')
	
	// Dynamically import after env vars are loaded
	const { sql } = await import('../db/connection')
	
	try {
		const result = await sql`SELECT NOW() as current_time`
		console.log('✅ Database connected successfully!')
		console.log('Current database time:', result[0].current_time)
		
		// Test if tables exist
		const tables = await sql`
			SELECT tablename 
			FROM pg_tables 
			WHERE schemaname = 'public'
			ORDER BY tablename
		`
		
		console.log('\nExisting tables:')
		tables.forEach((table: any) => {
			console.log(`- ${table.tablename}`)
		})
		
		if (tables.length === 0) {
			console.log('\n⚠️  No tables found. Please run the schema.sql in your Neon Console.')
		}
		
	} catch (error) {
		console.error('❌ Database connection failed:', error)
	}
}

testConnection()