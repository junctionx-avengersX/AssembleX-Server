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
 *          name:
 *            type: string
 *          email:
 *            type: string
 *            format: email
 *            description: Email for the user, needs to be unique.
 *        example:
 *           name: byunghak
 *           email: byunghak@email.com
 */

class Gilbert {
  name: string
  email: string
  constructor(name, email) {
    this.name = name
    this.email = email
  }
}

export default Gilbert
