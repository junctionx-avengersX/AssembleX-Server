# Gilbert Server

## run project

- `npm install`
- `npm run dev`

## naming convention

- file: {resource}{Behavior}
  - is for file search
  - ex) `gilbertCreate.ts`
- function: {behavior}{Resource}
  - ex) `const createGilbert = () => {}`

## lowdb

- you can find sample code in hello router

```
// Set some defaults
db.defaults({ posts: [], user: {} })
  .write()

// Add a post
db.get('posts')
  .push({ id: 1, title: 'lowdb is awesome'})
  .write()

// Set a user name using Lodash shorthand syntax
db.set('user.name', 'typicode')
  .write()
```
