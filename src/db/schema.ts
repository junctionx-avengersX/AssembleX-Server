export enum UserType {
  NORMAL = 'NORMAL',
  GILBERT = 'GILBERT',
}

interface UserSchema extends User {
  userType: UserType
}

interface GilbertSchema extends Gilbert {
  userId: string
  userType: UserType
}

interface MatchSchema extends Match {
  id: string
  viewerId: string
  gilbertId: string
}

interface GuideSchema extends Guide {
  viewerId: string
  gilbertId: string
  matchId: string
  createdAt: Date
  reservedAt: Date
}

// Add new table to schema and don't forget add data to db/data.json!
export interface DatabaseSchema {
  users: UserSchema[]
  gilberts: GilbertSchema[]
  guides: GuideSchema[]
  matches: MatchSchema[]
}
