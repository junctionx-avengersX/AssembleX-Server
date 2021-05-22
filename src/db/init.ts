import fs from 'fs'
import FileSync from 'lowdb/adapters/FileSync'
import low from 'lowdb'
import { join } from 'path'
import { DatabaseSchema } from './schema'

const createFile = (dbPath: string) => {
  const tableNames: Array<keyof DatabaseSchema> = [
    'gilberts',
    'guides',
    'matches',
    'users',
  ]

  const schemas = {}
  tableNames.forEach((tableName) => {
    Object.assign(schemas, { [tableName]: [] })
  })
  fs.writeFileSync(dbPath, JSON.stringify(schemas))
}

export const initDb = () => {
  const dbPath = join(__dirname, 'data.json')
  createFile(dbPath)

  // Use JSON file for storage
  const adapter = new FileSync<DatabaseSchema>(dbPath)
  const db = low(adapter)
  return db
}
