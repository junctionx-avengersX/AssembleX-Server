import { Context } from 'context'
import { GuideStatus } from './types'

interface CancelGuideReturn {
  id: string
  status: GuideStatus
}

const cancelGuideByMatchId = async (
  matchId: string,
  context: Context,
): Promise<CancelGuideReturn> => {
  await context.db
    .get('guides')
    .find({ matchId: matchId })
    .assign({ status: GuideStatus.CANCEL })
    .write()

  const guide = context.db.get('guides').find({ matchId: matchId }).value()

  return {
    id: guide.id,
    status: guide.status,
  }
}

export default cancelGuideByMatchId
