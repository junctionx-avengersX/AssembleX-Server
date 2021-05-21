import axios, { AxiosRequestConfig } from 'axios'

async function getCoordinate(address: string): Promise<CoordinateRes> {
  console.log(address)
  const config: AxiosRequestConfig = {
    method: 'get',
    url: `https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query=${encodeURI(
      address,
    )}`,
    headers: {
      'X-NCP-APIGW-API-KEY-ID': 'xfi9vk6uku',
      'X-NCP-APIGW-API-KEY': 'xI5fVWyHMEzOiLChE6cVMn0DO06YgYvhs2KIgWDn',
    },
  }

  let result: MapsApiRes = {
    status: '',
    errorMessage: '',
    meta: Object,
    addresses: [],
  }

  await axios(config)
    .then(function (response) {
      result.status = response.data.status
      result.errorMessage = response.data.errorMessage
      result.meta = response.data.meta
      result.addresses = response.data.addresses
    })
    .catch(function (error) {
      console.log(error)
    })

  if (result.addresses.length === 0) {
    return null
  }

  const coordinate: CoordinateRes = {
    latitude: result.addresses[0].x,
    longitude: result.addresses[0].y,
  }

  return coordinate
}

export { getCoordinate }
