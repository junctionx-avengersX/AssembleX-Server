import { Router, Response } from 'express'
import Gilbert from '../models/Gilbert'

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
 */
router.get('/', (req, res: Response) => {
  res.json(new Gilbert('병학', 'byunghak@gmail.com'))
})

export default router
