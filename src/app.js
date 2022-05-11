import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { version } from '../package.json'
import { consoleInfo } from './utils/handleConsole'
import { systemRoutes } from './routes/routesSystem'

const app = express()

// cargando las variables de entorno
dotenv.config()

const PORT = process.env.PORT || 3000
const SERVER = process.env.SERVER || 'localhost'

// configurando express
app.set('port', PORT)
app.set('json spaces', 2)

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.use(systemRoutes)

app.use(express.static('dist'))

app.listen(PORT, () => {
  consoleInfo(`API v${version}, Server Started at: http://${SERVER}:${PORT} ☕`)
})
