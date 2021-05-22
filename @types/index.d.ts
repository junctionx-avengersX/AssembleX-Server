enum Transportation {
  BUS = 'BUS',
  TAXI = 'TAXI',
  SUBWAY = 'SUBWAY',
  WALK = 'WALK',
}

interface User {
  id: string
  name: string
  profileUrl: string
}

interface Gilbert extends User {
  rating: number
  guideCount: number
}
