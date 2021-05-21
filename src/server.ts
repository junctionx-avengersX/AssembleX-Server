import express from 'express'
import { createRestRouter } from './rest'

const app = express()

app.set('port', process.env.PORT || 3000)

const router = createRestRouter()
app.use(router)

app.listen(app.get('port'), () => {
  console.log(
    '🔥 App is running at http://localhost:%d in %s mode',
    app.get('port'),
    app.get('env'),
  )
  console.log('Press CTRL-C to stop\n')
})
