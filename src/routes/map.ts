import { getCoordinate } from '../apis/naverMaps'
import { Router, Response } from 'express'

/**
 * @swagger
 * tags:
 *   name: Maps
 *   description: Map Api
 */
const router: Router = Router()

/**
 * @swagger
 *  /api/maps/{address}:
 *    get:
 *      summary: Select Maps
 *      parameters:
 *       - in: path
 *         name: address
 *         required: true
 *         description: 도로명 수준의 주소 입력 (자세하게 입력 안하면 결과가 나오지 않습니다)
 *         schema:
 *           type: string
 *      tags: [Maps]
 *      responses:
 *        "200":
 *          description: A Maps schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/CoordinateRes'
 *
 */
router.get('/:address', async (req, res: Response) => {
  console.log(req.params.address)
  const coordinate: CoordinateRes = await getCoordinate(req.params.address)
  if (coordinate === null) res.json('Not Found')
  else res.json(coordinate)
})

export default router
