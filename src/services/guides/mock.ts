import * as faker from 'faker'
import { Context } from 'context'
import { Transportation } from './types'

// 우편번호(zipcode) - 주(state) - 시(city,town) - 길(steet, avenue..)- 번지(no)
export const generateSteps = async (
  guideId: string,
  context: Context,
): Promise<GuideStep[]> => {
  // https://rawgit.com/Marak/faker.js/master/examples/browser/index.html
  const guide = context.db.get('guides').find({ id: guideId }).value()

  const city = faker.address.city()
  const getAddress = () => `${city}, ${faker.address.streetAddress()}`
  const getEstimatedTime = (transportation: Transportation) => {
    const time =
      transportation === Transportation.WALK
        ? faker.datatype.number({ min: 2, max: 10, precision: 1 })
        : faker.datatype.number({ min: 10, max: 30, precision: 1 })
    return { time, unit: 'min' as const }
  }
  const getTransportation = () =>
    faker.random.arrayElement(Object.keys(Transportation)) as Transportation

  const step1Destination = getAddress()
  const step1Transportation = getTransportation()
  const step1: GuideStep = {
    base: guide.base,
    destination: step1Destination,
    transportation: step1Transportation,
    estimatedTime: getEstimatedTime(step1Transportation),
  }

  const step2Destination = getAddress()
  const step2Transportation = getTransportation()
  const step2: GuideStep = {
    base: step1Destination,
    destination: step2Destination,
    transportation: step2Transportation,
    estimatedTime: getEstimatedTime(step2Transportation),
  }

  const step3Transportation = getTransportation()
  const step3: GuideStep = {
    base: step2Destination,
    destination: guide.destination,
    transportation: step3Transportation,
    estimatedTime: getEstimatedTime(step3Transportation),
  }

  return [step1, step2, step3]
}
