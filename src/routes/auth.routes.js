import { Router } from 'express'
import * as authController from '../controllers/authController.js'
import { checkDucplicateUsernameAndEmail } from '../middlewares/verifySignup.js'
 
const router = Router()

/**
 * @openapi
 * /api/v1/signup:
 *   post:
 *     tags: 
 *       - Auth
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
 *     responses:
 *       201:
 *         description: User created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZGMxNzMyYTk1ZGU3YzQ5MWI3NjkwZSIsImlhdCI6MTY5Mjc4MDU4MywiZXhwIjoxNjkyNzgwNzAzfQ.qnKHmQBqG3-aEGelwnlLP93EGMgFsU5oAO8woASwLLk
 */

router.post('/signup', checkDucplicateUsernameAndEmail, authController.signup)

/**
 * @openapi
 * /api/v1/signin:
 *   post:
 *     tags: 
 *       - Auth
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: test@mail.com
 *               password:
 *                 type: string
 *                 example: password
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZGMxNzMyYTk1ZGU3YzQ5MWI3NjkwZSIsImlhdCI6MTY5Mjc4MDU4MywiZXhwIjoxNjkyNzgwNzAzfQ.qnKHmQBqG3-aEGelwnlLP93EGMgFsU5oAO8woASwLLk
 */

router.post('/signin', authController.signin)

export default router