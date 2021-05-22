import { DatabaseSchema } from 'db/schema'
import low from 'lowdb'

declare global {
  namespace Express {
    interface Request {
      db: low.LowdbSync<DatabaseSchema>
    }
  }
}
