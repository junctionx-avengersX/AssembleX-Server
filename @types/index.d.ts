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

/**
 * @swagger
 *  components:
 *    schemas:
 *      Gilbert:
 *        type: object
 *        required:
 *          - name
 *          - email
 *        properties:
 *          rating:
 *            type: number
 *        example:
 *           id: something like id
 *           name: byunghak
 *           profileUrl: https://avatars.githubusercontent.com/u/84581726?s=200&v=4
 *           rating: 5
 */
interface Gilbert extends User {
  rating: number
}
