import * as faker from 'faker'
import { Context } from '../../context'
import { GuideStatus } from './types'

export interface CreateGuideInput {
  base: string
  destination: string
  transportations: Transportation[]
  matchId: string
  gilbertId: string
  reservedTime?: Date
}

const createGuide = async (input: CreateGuideInput, context: Context) => {
  context.db
    .get('guides')
    .push({
      id: faker.datatype.uuid(),
      status: GuideStatus.WAIT,
      createdAt: new Date(),
      base: input.base,
      destination: input.destination,
      viewerId: context.viewerId,
      gilbertId: input.gilbertId,
      matchId: input.matchId,
    })
    .write()
}

export default createGuide
