import {Router} from 'express'
import * as userController from '../controllers/userController.js'
import verifyJwt from '../middlewares/verifyJwt.js'
import {isAdmin} from '../middlewares/authorizeAction.js'
import { checkRoles } from '../middlewares/verifyRoles.js'
import { checkDucplicateUsernameAndEmail } from '../middlewares/verifySignup.js'

const router = Router()

router.post('/', [verifyJwt, isAdmin, checkDucplicateUsernameAndEmail, checkRoles],userController.createUser)

export default router