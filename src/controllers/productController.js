import Product from '../models/Product.js'

export const getAllProducts = async (req , res) => {
  const products = await Product.find();
  res.json(products)
}

export const createProduct = async (req , res) => {
  const { name, description, price } = req.body
  
  const createdProduct = new Product({ name, description, price });
  await createdProduct.save()

  res.status(201).json(createdProduct)
}