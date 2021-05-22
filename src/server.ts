import * as faker from 'faker'
import express, { Router } from 'express'
import { errors } from 'celebrate'
import cors from 'cors'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import options from './config/swagger'
import bodyParser from 'body-parser'

import maps from './routes/map'
import arrive from './routes/arrive'
import gilbertsRouter from './routes/gilberts'
import guidesRouter from './routes/guides'
import matchesRouter from './routes/matches'
import { initDb } from './db/init'
import { UserType } from './db/schema'

const app = express()

const specs = swaggerJsdoc(options)

app.use(cors())
app.use(bodyParser())
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true }),
)

app.set('port', process.env.PORT || 3000)

// add 'db' instance to request context, so use anywhere in router
app.use(async (req, res, next) => {
  const db = initDb()
  const fakeId = faker.datatype.uuid()
  // TODO: implement login with jwt
  await db
    .get('users')
    .push({
      id: fakeId,
      name: 'lover',
      userType: UserType.NORMAL,
      profileUrl: 'https://cdn.fakercloud.com/avatars/okandungel_128.jpg',
    })
    .write()

  const user = db.get('users').find({ id: fakeId }).value()
  req.db = db
  req.context = {
    // viewer means 'current login user'
    viewerId: user.id,
    db,
  }
  next()
})

const router_ = Router()
router_.use('/api-docs', swaggerUi.serve)
router_.use(maps)
router_.use(arrive)

// '/api/gilberts'
router_.use(gilbertsRouter)
// '/api/matched'
router_.use(matchesRouter)
// '/api/guides'
router_.use(guidesRouter)

app.use(router_)
app.use(errors())

app.listen(app.get('port'), () => {
  console.log(
    '🔥 App is running at http://localhost:%d in %s mode',
    app.get('port'),
    app.get('env'),
  )
  console.log('Press CTRL-C to stop\n')
})
