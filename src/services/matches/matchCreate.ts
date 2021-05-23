import * as faker from 'faker'
import { Context } from '../../context'
import { MatchStatus } from './types'

export interface MatchCreateInput {
  gilbertId: string
}

interface MatchCreateReturn {
  id: string
  status: MatchStatus
  estimatedTime: TimeUnit
}

const createMatch = async (
  input: MatchCreateInput,
  context: Context,
): Promise<MatchCreateReturn> => {
  const { viewerId, db } = context

  const status = MatchStatus.WAIT
  await db
    .get('matches')
    .push({
      id: faker.datatype.uuid(),
      viewerId,
      gilbertId: input.gilbertId,
      status,
      estimatedTime: {
        time: faker.datatype.number({ min: 2, max: 5, precision: 1 }),
        unit: 'min',
      },
    })
    .write()

  const match = db
    .get('matches')
    .find({ viewerId, gilbertId: input.gilbertId })
    .value()

  return {
    id: match.id,
    status: match.status,
    estimatedTime: {
      time: faker.datatype.number({ min: 2, max: 5, precision: 1 }),
      unit: 'min',
    },
  }
}

export default createMatch
