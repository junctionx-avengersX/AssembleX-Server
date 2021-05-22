import { generateGilbert } from './mocks'

export interface GetGilbertsInput {
  base: string
  destination: string
  transportations: Transportation[]
  reservedTime?: Date
  maxCost?: number
}

interface GilbertUser extends Gilbert {
  delay: number
  cost: number
}

const FAKE_GILBERTS_COUNT = 10

const getGilberts = (input: GetGilbertsInput): GilbertUser[] => {
  const gilberts: GilbertUser[] = []
  for (let idx = 0; idx < FAKE_GILBERTS_COUNT; idx++) {
    const gilbert = generateGilbert({ maxCost: input.maxCost })
    gilberts.push(gilbert)
  }
  return gilberts
}

export default getGilberts
