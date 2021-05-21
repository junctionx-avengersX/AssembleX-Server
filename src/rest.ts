import { Router } from 'express'

export function createRestRouter() {
  const router = Router()

  router.get('/', (req, res) => res.send('This is Gilbert Server'))

  return router
}
