import express, { Router } from 'express'
import cors from 'cors'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import options from './config/swagger'

import maps from './routes/map'
import gilbertsRouter from './routes/gilberts'
import guidesRouter from './routes/guides'
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
router_.use(maps)

// '/api/gilberts'
router_.use(gilbertsRouter)
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
