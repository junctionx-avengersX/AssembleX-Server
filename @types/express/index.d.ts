import { DatabaseSchema } from 'db/schema'
import low from 'lowdb'
import { Context } from '../../src/context'

declare global {
  namespace Express {
    interface Request {
      db: low.LowdbSync<DatabaseSchema>
      context: Context
    }
  }
}
