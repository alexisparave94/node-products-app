import { Router } from 'express'
import * as productController from '../controllers/productController.js'
import verifyJwt from '../middlewares/verifyJwt.js'

const router = Router()

router.get('/', productController.getAllProducts)

router.get('/:productId', productController.getProduct)

router.post('/', verifyJwt, productController.createProduct)

router.put('/:productId',verifyJwt, productController.updateProduct)

router.delete('/:productId', verifyJwt, productController.deleteProduct)

export default router