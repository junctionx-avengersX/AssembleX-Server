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
  createdAt: Date
}

// Add new table to schema and don't forget add data to data/db.json!
export interface DatabaseSchema {
  users: UserSchema[]
  gilberts: GilbertSchema[]
  guides: GuideSchema[]
  matches: MatchSchema[]
}
