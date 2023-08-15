import Product from '../models/Product.js'

export const getAllProducts = async (req , res) => {
  const products = await Product.find();
  res.json(products)
}