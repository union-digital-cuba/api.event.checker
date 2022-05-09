import { healthCheck } from '../logic/bllSystem'

const express = require('express')
const router = express.Router()

router.get('/health', healthCheck)
