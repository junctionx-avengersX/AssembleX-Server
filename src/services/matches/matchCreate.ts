import * as faker from 'faker'
import { Context } from 'types'

export enum MatchStatus {
  WAITING = 'WAITING',
  CANCELED = 'CANCELED',
  MATCHED = 'MATCHED',
}

export interface MatchCreateInput {
  gilbertId: string
}

interface MatchCreateReturn {
  id: string
  status: MatchStatus
  estimatedTime: string
}

const createMatch = async (
  input: MatchCreateInput,
  context: Context,
): Promise<MatchCreateReturn> => {
  const { viewerId, db } = context

  const status = MatchStatus.WAITING
  const estimatedTime = '10min' // TODO: Fix hard coding
  await db
    .get('matches')
    .push({
      id: faker.datatype.uuid(),
      viewerId,
      gilbertId: input.gilbertId,
      status,
      estimatedTime,
    })
    .write()

  const match = db
    .get('matches')
    .find({ viewerId, gilbertId: input.gilbertId })
    .value()

  return {
    id: match.id,
    status: match.status,
    estimatedTime: match.estimatedTime,
  }
}

export default createMatch
