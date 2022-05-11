import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

import { version, description, author } from '../package.json'
import { consoleInfo } from './utils/handleConsole'
import { systemRoutes } from './routes/routesSystem'

// cargando puertos de configuracion
const PORT = process.env.PORT || 3000
const SERVER = process.env.SERVER || 'localhost'

// extendiendo de https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'API Event Checker',
      description: description,
      contact: {
        name: author,
      },
      servers: [`http://${SERVER}:${PORT}`, `https://api-event-checker.herokuapp.com`],
    },
  },
  apis: ['src/routes/*.js'],
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)

const app = express()

// cargando las variables de entorno
dotenv.config()

// configurando express
app.set('port', PORT)
app.set('json spaces', 2)

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use(systemRoutes)

app.use(express.static('dist'))

app.listen(PORT, () => {
  consoleInfo(`API v${version}, Server Started at: http://${SERVER}:${PORT} ☕`)
})
