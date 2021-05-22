import { celebrate, Joi, Segments } from 'celebrate'
import { Request, Response, Router } from 'express'
import createMatch from '../services/matches/matchCreate'

const router = Router()

router.post(
  '/api/matches/ready',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      base: Joi.string().required(),
      destination: Joi.string().required(),
      transportations: Joi.string().required(),
      reserved_time: Joi.string(),
      gilbert_id: Joi.string().required(),
    }),
  }),
  async (req: Request, res: Response) => {
    res.header('Content-Type', 'application/json')
    const { reserved_time, gilbert_id: gilbertId, ...args } = req.query || {}
    const reservedTime = reserved_time as string | undefined
    if (reservedTime && isNaN(Date.parse(reservedTime))) {
      res
        .status(400)
        .json({ error: true, message: 'reserved_time should be date string' })
      return
    }

    const match = await createMatch(
      { gilbertId: gilbertId as string },
      req.context,
    )
    res.json(match)
  },
)

export default router
