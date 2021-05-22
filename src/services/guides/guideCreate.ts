import * as faker from 'faker'
import { GuideStatus } from './types'

export interface CreateGuideInput {
  base: string
  destination: string
  transportations: Transportation[]
  reservedTime?: Date
  viewerId: string
  gilbertId: string
}

interface CreateGuideReturn {
  id: string
  status: GuideStatus
  createdAt: Date
}

const createGuide = (_input: CreateGuideInput): CreateGuideReturn => {
  return {
    id: faker.datatype.uuid(),
    status: GuideStatus.READY,
    createdAt: new Date(),
  }
}

export default createGuide
