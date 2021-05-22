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
}

interface Guide {
  id: string
  status: GuideStatus
  viewerId: string
  gilbertId: string
  createdAt: Date
  arrivedAt?: Date
}
