import jwt from 'jsonwebtoken'
import secretKey from '../config/secretKey.js'
import User from '../models/User.js'

export default async (req, res, next) => {
  const token = req.headers['authorization'].split(' ')[1]

  if (!token) return res.status(401).json({message: 'Unauthorized'})

  try {
    const decoded = jwt.verify(token, secretKey.SECRET)
    req.userId = decoded.id 
  
    const user = await User.findById(req.userId)
  
    if (!user) return res.status(401).json({message: 'Unauthorized'})
  
    next()
  } catch (error) {
    return res.status(401).json({ message: error.message })
  }
}