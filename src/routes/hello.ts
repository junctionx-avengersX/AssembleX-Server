import { UserType } from '../db/schema'
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
router.get('/api/hello', (req, res: Response) => {
  req.db
    .get('users')
    .push({
      id: 'sample',
      name: 'hi',
      userType: UserType.NORMAL,
      profileUrl: 'sisi',
    })
    .write()

  res.json('hello world')
})

export default router
