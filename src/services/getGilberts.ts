import * as faker from 'faker'

export interface GetGilbertsInput {
  base: string
  destination: string
  transportations: Transportation[]
  reservedTime?: Date
}

interface GilbertUser extends Gilbert {
  delay: number
}

const FAKE_GILBERTS_COUNT = 10

const getGilberts = (_input: GetGilbertsInput): GilbertUser[] => {
  const gilberts: GilbertUser[] = []
  for (let idx = 0; idx < FAKE_GILBERTS_COUNT; idx++) {
    gilberts.push({
      id: faker.datatype.uuid(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      profileUrl: faker.image.avatar(),
      rating: faker.datatype.number(5),
      delay: faker.datatype.number({ min: 0, max: 3, precision: 0.01 }), // delayed time
    })
  }

  return gilberts
}

export default getGilberts
