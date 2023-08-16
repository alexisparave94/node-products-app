import { Router } from 'express'
import * as authController from '../controllers/authController.js'
import { checkDucplicateUsernameAndEmail } from '../middlewares/verifySignup.js'
 
const router = Router()

router.post('/signup', checkDucplicateUsernameAndEmail, authController.signup)

router.post('/signin', authController.signin)

export default router