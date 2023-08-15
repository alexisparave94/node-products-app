import { Router } from 'express'
import * as productController from '../controllers/productController.js'

const router = Router()

router.get('/', productController.getAllProducts)

router.get('/:id', (req, res) => {
  res.send('Product')
})

router.post('/', productController.createProduct)

router.put('/:id', (req, res) => {
  res.send('Update Product')
})

router.delete('/:id', (req, res) => {
  res.send('Delete Product')
})

export default router