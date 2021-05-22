import { Router, Request, Response } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import createGuide, { CreateGuideInput } from '../services/guides/guideCreate'
import cancelGuide from '../services/guides/guideCancel'

const router = Router()

router.post(
  '/api/guides/ready',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      base: Joi.string().required(),
      destination: Joi.string().required(),
      transportations: Joi.string().required(),
      reserved_time: Joi.string(),
      gilbert_id: Joi.string().required(),
    }),
  }),
  (req: Request, res: Response) => {
    res.header('Content-Type', 'application/json')
    const { reserved_time, gilbert_id: gilbertId, ...args } = req.query || {}
    const reservedTime = reserved_time as string | undefined
    if (reservedTime && isNaN(Date.parse(reservedTime))) {
      res
        .status(400)
        .json({ error: true, message: 'reserved_time should be date string' })
      return
    }

    const guideInput = {
      gilbertId,
      ...args,
      ...(reservedTime && { reservedTime: new Date(reservedTime) }),
    } as CreateGuideInput

    const guide = createGuide(guideInput)
    res.json(guide)
  },
)

router.post(
  '/api/guides/:guide_id/cancel',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      guide_id: Joi.string().required(),
    }),
  }),
  (req: Request, res: Response) => {
    const guide = cancelGuide(req.params.guide_id)
    res.json(guide)
  },
)

// router.post('/api/guides/start', (req: Request, res: Response) => {})
// router.post('/api/guides/arrive', (req: Request, res: Response) => {})

export default router
