enum Transportation {
  BUS = 'BUS',
  TAXI = 'TAXI',
  SUBWAY = 'SUBWAY',
  WALK = 'WALK',
}

/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - name
 *          - email
 *        properties:
 *          name:
 *            type: string
 *          email:
 *            type: string
 *            format: email
 *            description: Email for the user, needs to be unique.
 *        example:
 *           id: 0
 *           name: byunghak
 *           profileUrl: https://avatars.githubusercontent.com/u/84581726?s=200&v=4
 */
interface User {
  id: string
  name: string
  profileUrl: string
}

interface Gilbert extends User {
  rating: number
  guideCount?: number
  volunteerCount?: number
  introduction: string
  verified: boolean
}

interface TimeUnit {
  time: number
  unit: 'min' | 'hour'
}

interface GuideStep {
  base: string
  destination: string
  estimatedTime: TimeUnit // hour and minutes
  transportation: Transportation
}

interface Guide {
  id: string
  base: string
  destination: string
  status: GuideStatus
  transportations: Transportation[]
  guideSteps?: GuideStep[]
  currentStep?: GuideStep
  arrivedAt?: Date
}

interface Match {
  status: MatchStatus
  estimatedTime: TimeUnit // hour and minutes
}
