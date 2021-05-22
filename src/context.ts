import { DatabaseSchema } from 'db/schema'
import low from 'lowdb'

export interface Context {
  db: low.LowdbSync<DatabaseSchema>
  viewerId?: string
}
