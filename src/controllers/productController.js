import Product from '../models/Product.js'

export const getAllProducts = async (req , res) => {
  const products = await Product.find();
  res.json(products)
}

export const getProduct = async (req , res) => {
  const product = await Product.findById(req.params.productId);

  if (!product) return res.status(404).json({message: 'Product not found'})

  res.json(product)
}

export const createProduct = async (req , res) => {
  const { name, description, price } = req.body
  
  const createdProduct = new Product({ name, description, price });
  await createdProduct.save()

  res.status(201).json(createdProduct)
}

export const updateProduct = async (req, res) => {
  const { productId } = req.params
  const { name, description, price } = req.body
  const product = await Product.findByIdAndUpdate(productId, { name, description, price })

  if (!product) return res.status(404).json({ message: 'Product not found' })

  const updatedProduct = await Product.findById(productId)

  res.json(updatedProduct)
}

export const deleteProduct = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.productId)

  if (!product) return res.status(404).json({ message: 'Product not found' })

  res.sendStatus(204)
}