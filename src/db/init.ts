import FileSync from 'lowdb/adapters/FileSync'
import low from 'lowdb'
import { join } from 'path'
import { DatabaseSchema } from './schema'

export const initDb = () => {
  // Use JSON file for storage
  const adapter = new FileSync<DatabaseSchema>(
    join(__dirname, '../data/db.json'),
  )
  const db = low(adapter)
  return db
}
