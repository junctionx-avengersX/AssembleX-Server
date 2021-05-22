import * as faker from 'faker'

export const introductions = [
  "We're going safely to our destination together.",
  'Say anything party',
  'I like Kimchi, how about you?',
  'Nice to meet you :)',
  'I have cats, meow-meow',
  'college student in seoul',
  "I'll be your friend",
  "I'm Robert Gilbert",
  'we are making barrier-free world together',
]

interface GilbertInput {
  name?: string
  profileUrl?: string
  rating?: number
  maxCost?: number
  guideCount?: number
  volunteerCount?: number
  introduction?: string
}

const DEFAULT_MAX_COST = 3000

export const generateGilbert = (input?: GilbertInput) => ({
  id: faker.datatype.uuid(),
  name: input?.name || `${faker.name.firstName()} ${faker.name.lastName()}`,
  profileUrl: input?.profileUrl || faker.image.avatar(),
  rating: input?.rating || faker.datatype.number(5),
  delay: faker.datatype.number({ min: 0, max: 3, precision: 0.01 }), // delayed time
  cost: faker.datatype.number({
    min: 0,
    max: input?.maxCost ?? DEFAULT_MAX_COST, // TODO: if create DB, filter with maxCost
    precision: 100,
  }),
  guideCount: input?.guideCount || faker.datatype.number(50),
  volunteerCount: input?.volunteerCount || faker.datatype.number(5),
  introduction: input?.introduction || faker.random.arrayElement(introductions),
})
