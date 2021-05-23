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

## 🧚‍♀️ lowdb

- add schema type to db/schema.ts
- add schema name to tableNames in db/init.ts
- examples

if you want get value, then use `value()` at last.
if you want mutate value, then use `write` at last with `async-await`.

```
// get
db.get('users').find({id: userId}).value()
db.get('users').find({ name }).value()

// create
await db.get('users').push({ id: 'test-id', name:'tester'}).write()

// update
await db.get('users').find({id: userId}).assign({ name: 'what'}).write()

// delete
await db.get('users').remove({id: userId}).write()
```

- data.json will be initialized whenever you start server
