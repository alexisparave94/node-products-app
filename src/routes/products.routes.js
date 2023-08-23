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

/**
 * @openapi
 * /api/v1/products:
 *   post:
 *     tags:
 *       - Products
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Product 10
 *               description:
 *                 type: string
 *                 example: This is a description
 *               price:
 *                 type: integer
 *                 example: 400
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Product"
 */

router.post('/', [verifyJwt, isModerator], productController.createProduct)

/**
 * @openapi
 * /api/v1/products/{productId}:
 *   put:
 *     tags:
 *       - Products
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: productId
 *         in: path
 *         description: ID of product to return
 *         require: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Product 1
 *               description:
 *                 type: string
 *                 example: This is a description
 *               price:
 *                 type: integer
 *                 example: 200
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

router.put('/:productId',[verifyJwt, isModerator], productController.updateProduct)

/** 
 * @openapi
 * /api/v1/products/{productId}:
 *   delete:
 *     tags:
 *       - Products
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: productId
 *         in: path
 *         description: Id of product to delete
 *         require: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: No Content
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


router.delete('/:productId', [verifyJwt, isAdmin], productController.deleteProduct)

export default router