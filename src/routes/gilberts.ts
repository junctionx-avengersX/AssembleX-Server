import { Router, Response } from 'express'
import Gilbert from '../models/Gilbert'

/**
 * @swagger
 * tags:
 *   name: Gilberts
 *   description: Get Gilbert List
 */
const router: Router = Router()

/**
 * @swagger
 *  /api/gilbert:
 *    get:
 *      summary: Get Gilberts
 *      tags: [Gilbert]
 *      responses:
 *        "200":
 *          description: gilberts schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Gilbert'
 */
router.get('/', (req, res: Response) => {
  res.json(new Gilbert('병학', 'byunghak@gmail.com'))
})

export default router
