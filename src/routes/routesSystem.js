import express from 'express'
import { healthCheck, systemVersion, getHome } from '../logic/bllSystem'

export const systemRoutes = express.Router()

systemRoutes.get('/', getHome)

/**
 * @swagger
 * /health:
 *  get:
 *    description: Check the health of the system
 *    responses:
 *      '200':
 *        description: Get the health of the system, 'It works!' if the system is healthy of course
 */
systemRoutes.get('/health', healthCheck)

/**
 * @swagger
 * /version:
 *  get:
 *    description: Get the version of the system
 *    responses:
 *      '200':
 *        description: Get the version of the system
 */
systemRoutes.get('/version', systemVersion)
