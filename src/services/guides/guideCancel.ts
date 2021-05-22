import { GuideStatus } from './types'

interface CancelGuideReturn {
  id: string
  status: GuideStatus
}

const cancelGuide = (guideId: string): CancelGuideReturn => {
  return {
    id: guideId,
    status: GuideStatus.CANCEL,
  }
}

export default cancelGuide
