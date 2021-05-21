import getGilberts, { GetGilbertsInput } from '../services/getGilberts'
import { Router, Request, Response } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'

/**
 * @swagger
 * tags:
 *   name: Gilberts
 *   description: Get Gilbert List
 */
const router: Router = Router()

/**
 * @swagger
 *  /api/gilberts:
 *    get:
 *      summary: Get Gilberts
 *      tags: [Gilbert]
 *      responses:
 *        "200":
 *          description: success to get gilberts!
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Gilbert'
 *        "400":
 *          description: missing params or got wrong parameter type
 */
router.get(
  '/api/gilberts',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      base: Joi.string().required(),
      destination: Joi.string().required(),
      reserved_time: Joi.string(),
      transportations: Joi.array().required(),
    }),
  }),
  (req: Request, res: Response) => {
    const { reserved_time, ...args } = req.query
    const reservedTime = reserved_time as string | undefined
    if (reservedTime && isNaN(Date.parse(reservedTime))) {
      res
        .status(400)
        .json({ error: true, message: 'reserved_time should be date string' })
      return
    }

    const gilbertInput = {
      ...(reservedTime && { reservedTime: new Date(reservedTime) }),
      ...args,
    } as GetGilbertsInput

    const gilberts = getGilberts(gilbertInput)
    res.json(gilberts)
  },
)

export default router
