import Product from '../models/Product.js'

export const getAllProducts = async (req , res) => {
  const products = await Product.find();
  res.json(products)
}

export const getProduct = async (req , res) => {
  const product = await Product.findById(req.params.id);

  if (!product) return res.status(404).json({message: 'Product not found'})

  res.json(product)
}

export const createProduct = async (req , res) => {
  const { name, description, price } = req.body
  
  const createdProduct = new Product({ name, description, price });
  await createdProduct.save()

  res.status(201).json(createdProduct)
}