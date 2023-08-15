import { Router } from 'express'
import * as authController from '../controllers/authController.js'

const router = Router()

router.post('/signup', authController.signup)

router.post('/signin', authController.signin)

export default router