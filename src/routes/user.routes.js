import {Router} from 'express'
import * as userController from '../controllers/userController.js'
import verifyJwt from '../middlewares/verifyJwt.js'
import {isAdmin} from '../middlewares/authorizeAction.js'

const router = Router()

router.post('/', [verifyJwt, isAdmin],userController.createUser)

export default router