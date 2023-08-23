import { Router } from 'express'
import * as productController from '../controllers/productController.js'
import verifyJwt from '../middlewares/verifyJwt.js'
import { isAdmin, isModerator } from '../middlewares/authorizeAction.js'

const router = Router()

/**
 * @openapi
 * /api/v1/products:
 *   get:
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *                   name:
 *                     type: string
 *                     example: Product 1
 *                   description:
 *                     type: string
 *                     example: This is a description
 *                   price:
 *                     type: integer
 *                     example: 200
 *                   created_at:
 *                     type: string
 *                     example: 2023-08-15T03:18:46.721Z
 *                   updated_at:
 *                     type: string
 *                     example: 2023-08-15T03:18:46.721Z
 */
router.get('/', productController.getAllProducts)

router.get('/:productId', productController.getProduct)

router.post('/', [verifyJwt, isModerator], productController.createProduct)

router.put('/:productId',[verifyJwt, isModerator], productController.updateProduct)

router.delete('/:productId', [verifyJwt, isAdmin], productController.deleteProduct)

export default router