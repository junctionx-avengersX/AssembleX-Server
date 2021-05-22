import * as faker from 'faker'

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
const DEFAULT_MAX_COST = 3000

const getGilberts = (input: GetGilbertsInput): GilbertUser[] => {
  const gilberts: GilbertUser[] = []
  for (let idx = 0; idx < FAKE_GILBERTS_COUNT; idx++) {
    gilberts.push({
      id: faker.datatype.uuid(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      profileUrl: faker.image.avatar(),
      rating: faker.datatype.number(5),
      delay: faker.datatype.number({ min: 0, max: 3, precision: 0.01 }), // delayed time
      cost: faker.datatype.number({
        min: 0,
        max: input.maxCost ?? DEFAULT_MAX_COST,
        precision: 100,
      }),
    })
  }

  return gilberts
}

export default getGilberts
