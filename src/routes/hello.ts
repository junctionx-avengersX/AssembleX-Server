import { Router, Response } from 'express'

/**
 * @swagger
 * tags:
 *   name: Hello
 *   description: Just Hello
 */
const router: Router = Router()

/**
 * @swagger
 *  /api/hello:
 *    get:
 *      summary: Say Hello
 *      tags: [Hello]
 *      responses:
 *        "200":
 *          description: Say hello
 *          content:
 *            application/json
 */
router.get('/', (req, res: Response) => {
  res.json('hello world')
})

export default router
