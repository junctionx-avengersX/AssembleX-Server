import { Router, Response } from 'express'

/**
 * @swagger
 * tags:
 *   name: Gilbert
 *   description: Gilbert management
 */
const router: Router = Router()

/**
 * @swagger
 *  /api/gilbert:
 *    get:
 *      summary: Select Gilbert
 *      tags: [Gilbert]
 *      responses:
 *        "200":
 *          description: A gilbert schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Gilbert'
 *
 */
router.get('/', (req, res: Response) => {
  const gilbert: Gilbert = {
    id: 'something like id',
    name: '병학',
    profileUrl: '',
    rating: 0,
  }
  res.json(gilbert)
})

export default router
