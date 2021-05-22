/**
 * @swagger
 *  components:
 *    schemas:
 *      AddressReq:
 *        type: object
 *        required:
 *          - address
 *        properties:
 *          address:
 *            type: string
 *        example:
 *           address: 서울시 중구 시청역
 */
interface AddressReq {
  address: string
}

/**
 * @swagger
 *  components:
 *    schemas:
 *      CoordinateRes:
 *        type: object
 *        required:
 *          - latitude
 *          - longitude
 *        properties:
 *          latitude:
 *            type: number
 *          longitude:
 *            type: number
 *        example:
 *           latitude: 0
 *           longitude: 0
 */
interface CoordinateRes {
  latitude: number
  longitude: number
}

interface MapsApiRow {
  roadAddress: string
  jibunAddress: string
  englishAddress: string
  addressElements: Array
  x: number
  y: number
  distance: number
}

interface MapsApiRes {
  status: string
  meta: Object
  addresses: Array<MapsApiRow>
  errorMessage: string
}
