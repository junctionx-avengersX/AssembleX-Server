import { Context } from '../../context'
import { GuideStatus } from './types'
import { generateSteps } from './mock'

const startGuide = async (guideId: string, context: Context) => {
  const steps = await generateSteps(guideId, context)
  const guide = context.db.get('guides').find({ id: guideId }).value()
  const isReserved = guide.reservedAt > new Date()

  await context.db
    .get('guides')
    .find({ id: guideId })
    .assign({
      status: isReserved ? GuideStatus.WAIT : GuideStatus.START,
      guideSteps: steps,
      currentStep: steps[0],
    })
    .write()

  return guide
}

export default startGuide
