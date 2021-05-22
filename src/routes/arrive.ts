import { Router, Request, Response } from 'express'
import { postReview } from '../services/arrive'

const router: Router = Router()

router.post(
  '/api/guides/:guide_id/arrive',
  async (req: Request, res: Response) => {
    res.json(postReview(req.params.guide_id, req.body.rating))
  },
)

export default router
