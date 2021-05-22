# Gilbert Server

## run project

- `npm install`
- `npm run dev`

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
