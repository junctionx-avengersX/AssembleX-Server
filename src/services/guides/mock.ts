import { Context } from 'context'

const generateSteps = (guideId: string, context: Context): GuideStep[] => {
  const guide = context.db.get('guides').find({ id: guideId }).value()
  const step1Dest = 'Bus Stop in front of Ori Station'
  const step1: GuideStep = {
    base: guide.base,
    destination: step1Dest,
    estimatedTime: '2min',
    transportation: Transportation.WALK,
    isPassed: false,
  }

  const step2Dest = 'Bundang SNUniv Hospital Station'
  const step2: GuideStep = {
    base: step1Dest,
    destination: step2Dest,
    estimatedTime: '15min',
    transportation: Transportation.BUS,
    isPassed: false,
  }

  const step3: GuideStep = {
    base: step2Dest,
    destination: guide.destination,
    estimatedTime: '4min',
    transportation: Transportation.WALK,
    isPassed: false,
  }

  return [step1, step2, step3]
}

export default generateSteps
