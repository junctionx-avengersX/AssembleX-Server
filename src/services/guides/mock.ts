import * as faker from 'faker'
import { Context } from 'context'
import { Transportation } from './types'

const getTransportation = (prevStep?: GuideStep) => {
  let availableTransportations = Object.keys(Transportation)
  // if user walked in prev step, then give other transportation
  if (prevStep?.transportation === Transportation.WALK) {
    availableTransportations = Object.keys(Transportation).filter(
      (transportation) => transportation !== Transportation.WALK,
    )
  }

  return faker.random.arrayElement(availableTransportations) as Transportation
}

const getAddress = (city: string, transportation: Transportation) => {
  let suffix = ''
  if (transportation === Transportation.SUBWAY) {
    suffix = 'Station'
  }
  if (transportation === Transportation.BUS) {
    suffix = 'Stop'
  }

  const defaultAddress = `${city}, ${faker.address.streetName()}`
  return suffix ? `${defaultAddress} ${suffix}` : defaultAddress
}

const getEstimatedTime = (transportation: Transportation) => {
  const time =
    transportation === Transportation.WALK
      ? faker.datatype.number({ min: 2, max: 10, precision: 1 })
      : faker.datatype.number({ min: 10, max: 30, precision: 1 })
  return { time, unit: 'min' as const }
}

// 우편번호(zipcode) - 주(state) - 시(city,town) - 길(steet, avenue..)- 번지(no)
export const generateSteps = async (
  guideId: string,
  context: Context,
): Promise<GuideStep[]> => {
  // https://rawgit.com/Marak/faker.js/master/examples/browser/index.html
  const guide = context.db.get('guides').find({ id: guideId }).value()

  const city = faker.address.city()
  const step1Transportation = getTransportation()
  const step1Destination = getAddress(city, step1Transportation)
  const step1: GuideStep = {
    base: guide.base,
    destination: step1Destination,
    transportation: step1Transportation,
    estimatedTime: getEstimatedTime(step1Transportation),
  }

  const step2Transportation = getTransportation()
  const step2Destination = getAddress(city, step2Transportation)
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
