import { Router } from 'express'
import * as productController from '../controllers/productController.js'

const router = Router()

router.get('/', productController.getAllProducts)

router.get('/:id', productController.getProduct)

router.post('/', productController.createProduct)

router.put('/:id', productController.updateProduct)

router.delete('/:id', (req, res) => {
  res.send('Delete Product')
})

export default router