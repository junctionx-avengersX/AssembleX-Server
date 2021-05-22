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

  const result: MapsApiRes = {
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

async function getAddress(query: string) {
  const url = `https://map.naver.com/v5/api/instantSearch?lang=ko&caller=pcweb&types=place,address,bus&coords=37.526575025997396,127.10793256759645&query=${encodeURI(
    query,
  )}`
  const config: AxiosRequestConfig = {
    method: 'get',
    url: url,
  }

  const res = {
    place: null,
  }

  await axios(config)
    .then(function (response) {
      console.log(response.data.place)
      console.log(response.data.ac)
      res.place = response.data.place
    })
    .catch(function (error) {
      console.log(error)
    })

  return res
}

export { getCoordinate, getAddress }
