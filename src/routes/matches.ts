import { celebrate, Joi, Segments } from 'celebrate'
import { Request, Response, Router } from 'express'
import cancelGuideByMatchId from '../services/guides/guideCancel'
import createGuide, { CreateGuideInput } from '../services/guides/guideCreate'
import cancelMatch from '../services/matches/matchCancel'
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
    const { reserved_time, gilbert_id, ...args } = req.query
    const gilbertId = gilbert_id as string | undefined
    const reservedTime = reserved_time as string | undefined

    // check validate
    if (reservedTime && isNaN(Date.parse(reservedTime))) {
      res
        .status(400)
        .json({ error: true, message: 'reserved_time should be date string' })
      return
    }

    // create match
    const match = await createMatch(
      { gilbertId: gilbertId as string },
      req.context,
    )

    // create guide
    const createGuideInput = {
      gilbertId,
      matchId: match.id,
      ...args,
      ...(reservedTime && { reservedTime: new Date(reservedTime) }),
    } as CreateGuideInput
    const guide = await createGuide(createGuideInput, req.context)
    const response = { match, guide: { id: guide.id } }
    res.json(response)
  },
)

router.post(
  '/api/matches/:match_id/cancel',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      match_id: Joi.string().required(),
    }),
  }),
  async (req: Request, res: Response) => {
    res.header('Content-Type', 'application/json')
    const match = await cancelMatch(req.params.match_id, req.context)
    await cancelGuideByMatchId(match.id, req.context)
    res.json(match)
  },
)

export default router
