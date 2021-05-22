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

// Add new table to schema and don't forget add data to data/db.json!
export interface DatabaseSchema {
  users: UserSchema[]
  gilberts: GilbertSchema[]
}
