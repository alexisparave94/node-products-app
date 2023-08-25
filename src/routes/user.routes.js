import {Router} from 'express'
import * as userController from '../controllers/userController.js'
import verifyJwt from '../middlewares/verifyJwt.js'
import {isAdmin} from '../middlewares/authorizeAction.js'
import { checkRoles } from '../middlewares/verifyRoles.js'
import { checkDucplicateUsernameAndEmail } from '../middlewares/verifySignup.js'

const router = Router()

/**
 * @openapi
 * /api/v1/users:
 *   post:
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: Testino
 *               email:
 *                 type: string
 *                 example: test@mail.com
 *               password:
 *                 type: string
 *                 example: password
 *               roles:
 *                 type: array
 *                 items: 
 *                   type: string
 *                   enum: [admin, moderator, user]
 *     responses:
 *       201:
 *         description: User Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/User"
 */

router.post('/', [verifyJwt, isAdmin, checkDucplicateUsernameAndEmail, checkRoles], userController.createUser)

export default router