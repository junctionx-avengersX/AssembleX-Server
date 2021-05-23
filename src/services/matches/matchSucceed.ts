import { Context } from '../../context'
import { MatchStatus } from './types'

const succeedMatch = async (matchId: string, context: Context) => {
  await context.db
    .get('matches')
    .find({ id: matchId })
    .assign({ status: MatchStatus.MATCH })
    .write()
}

export default succeedMatch
