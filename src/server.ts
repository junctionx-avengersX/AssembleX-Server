import express, { Router } from 'express'
import { errors } from 'celebrate'
import cors from 'cors'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import options from './config/swagger'

import hello from './routes/hello'
import maps from './routes/map'
import gilbertsRouter from './routes/gilberts'
import { initDb } from './db/init'

const app = express()

const specs = swaggerJsdoc(options)

app.use(cors())
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true }),
)

app.set('port', process.env.PORT || 3000)

// add 'db' instance to request context, so use anywhere in router
app.use((req, res, next) => {
  const db = initDb()
  req.db = db
  next()
})

const router_ = Router()
router_.use('/api-docs', swaggerUi.serve)
router_.use(hello)
router_.use('/api/maps', maps)

// '/api/gilberts'
router_.use(gilbertsRouter)

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
