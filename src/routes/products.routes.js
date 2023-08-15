import { Router } from 'express'
import * as productController from '../controllers/productController.js'

const router = Router()

router.get('/', productController.getAllProducts)

router.get('/:productId', productController.getProduct)

router.post('/', productController.createProduct)

router.put('/:productId', productController.updateProduct)

router.delete('/:productId', productController.deleteProduct)

export default router