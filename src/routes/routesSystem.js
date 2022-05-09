import express from 'express'
import { healthCheck, systemVersion } from '../logic/bllSystem'

export const systemRoutes = express.Router()

systemRoutes.get('/health', healthCheck)
systemRoutes.get('/version', systemVersion)
