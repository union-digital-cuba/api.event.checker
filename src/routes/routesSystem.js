import express from 'express'
import { healthCheck, systemVersion, getHome } from '../logic/bllSystem'

export const systemRoutes = express.Router()

systemRoutes.get('/', getHome)
systemRoutes.get('/health', healthCheck)
systemRoutes.get('/version', systemVersion)
