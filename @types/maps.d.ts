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

/**
 * @swagger
 *  components:
 *    schemas:
 *      Place:
 *        type: object
 *        properties:
 *          latitude:
 *            type: number
 *          type:
 *            type: string
 *          id:
 *            type: number
 *          title:
 *            type: string
 *          x:
 *            type: number
 *          y:
 *             type: number
 *          dist:
 *            type: number
 *          totalScore:
 *            type: number
 *          sid:
 *            type: number
 *          ctg:
 *            type: string
 *          cid:
 *            type: number
 *          jibunAddress:
 *            type: string
 *          roadAddress:
 *            type: string
 *        example:
 *          type: "place"
 *          id: "11686884"
 *          title: "서울아산병원"
 *          x: "127.1079349"
 *          y: "37.5265762"
 *          dist: 0.00024022096790207243
 *          totalScore: 372.0712
 *          sid: "11686884"
 *          ctg: "종합병원"
 *          cid: "223212"
 *          jibunAddress: "서울특별시 송파구 풍납2동 388-1"
 *          roadAddress: "서울특별시 송파구 올림픽로43길 88 서울아산병원"
 */
interface Place {
  type: string
  id: number
  title: string
  x: number
  y: number
  dist: number
  totalScore: number
  sid: number
  ctg: string
  cid: number
  jibunAddress: string
  roadAddress: string
}
