import { DatabaseSchema } from 'db/schema'
import low from 'lowdb'
import { Context } from '../../src/types'

declare global {
  namespace Express {
    interface Request {
      db: low.LowdbSync<DatabaseSchema>
      context: Context
    }
  }
}
