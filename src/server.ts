import express, { Router } from 'express'
import cors from 'cors'

import bodyParser from 'body-parser'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import options from './config/swagger'

import hello from './routes/hello'
import maps from './routes/map'
import gilbertsRouter from './routes/gilberts'
import { errors } from 'celebrate'

const app = express()

const specs = swaggerJsdoc(options)

app.use(cors())
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true }),
)

app.set('port', process.env.PORT || 3000)

const router_ = Router()
router_.use('/api-docs', swaggerUi.serve)
router_.use('/api/hello', hello)
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
