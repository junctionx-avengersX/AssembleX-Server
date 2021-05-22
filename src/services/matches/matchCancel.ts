import { Context } from 'context'
import { MatchStatus } from './types'

interface CancelMatchReturn {
  id: string
  status: MatchStatus
}

const cancelMatch = async (
  matchId: string,
  context: Context,
): Promise<CancelMatchReturn> => {
  await context.db
    .get('matches')
    .find({ id: matchId })
    .assign({ status: MatchStatus.CANCEL })
    .write()

  const match = context.db.get('matches').find({ id: matchId }).value()

  return {
    id: match.id,
    status: match.status,
  }
}

export default cancelMatch
