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
 *                 $ref: "#/components/schemas/Product"
 */
router.get('/', productController.getAllProducts)

/**
 * @openapi
 * /api/v1/products/{productId}:
 *   get:
 *     tags:
 *       - Products
 *     parameters:
 *       - name: productId
 *         in: path
 *         description: ID of product to return
 *         require: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Product"
 *       404:
 *         description: Product not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Product not found
 */
router.get('/:productId', productController.getProduct)

router.post('/', [verifyJwt, isModerator], productController.createProduct)

router.put('/:productId',[verifyJwt, isModerator], productController.updateProduct)

router.delete('/:productId', [verifyJwt, isAdmin], productController.deleteProduct)

export default router