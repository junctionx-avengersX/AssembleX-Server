import getGilberts, { GetGilbertsInput } from '../services/gilberts/getGilberts'
import { Router, Request, Response } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'

const router: Router = Router()

router.get(
  '/api/gilberts',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      base: Joi.string().required(),
      destination: Joi.string().required(),
      transportations: Joi.string().required(),
      reserved_time: Joi.string(),
      max_cost: Joi.number(),
    }),
  }),
  (req: Request, res: Response) => {
    res.header('Content-Type', 'application/json')

    const { reserved_time, max_cost, ...args } = req.query
    const maxCost = max_cost as string | undefined
    const reservedTime = reserved_time as string | undefined
    if (reservedTime && isNaN(Date.parse(reservedTime))) {
      res
        .status(400)
        .json({ error: true, message: 'reserved_time should be date string' })
      return
    }

    const gilbertInput = {
      ...(maxCost && { maxCost: parseInt(maxCost, 10) }),
      ...(reservedTime && { reservedTime: new Date(reservedTime) }),
      ...args,
    } as GetGilbertsInput

    const gilberts = getGilberts(gilbertInput)
    res.json(gilberts)
  },
)

export default router
