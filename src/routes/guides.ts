import { Router, Request, Response } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import startGuide from '../services/guides/guideStart'

const router = Router()

router.post(
  '/api/guides/:guide_id/start',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      guide_id: Joi.string().required(),
    }),
  }),
  async (req: Request, res: Response) => {
    res.header('Content-Type', 'application/json')
    const { guide_id: guideId } = req.params
    const guide = await startGuide(guideId, req.context)
    const accumulated: number = guide.guideSteps.reduce(
      // @ts-ignore
      (prev, curr) => prev.estimatedTime.time + curr.estimatedTime.time,
      0,
    )

    res.json({
      id: guide.id,
      base: guide.base,
      destination: guide.destination,
      steps: guide.guideSteps,
      totalEstimatedTime: { time: accumulated, unit: 'min' },
    })
  },
)
// router.post('/api/guides/arrive', (req: Request, res: Response) => {})

export default router
