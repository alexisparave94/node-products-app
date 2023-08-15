import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import secret from '../config/secretKey.js'
import Roles from '../models/Roles.js'

export const signup = async (req, res) => {
  const { username, email, password} = req.body
  const newUser = new User({ 
    username,
    email, 
    password: await User.encryptPassword(password)
  })

  const userRole = await Roles.findOne({name: 'user'})
  newUser.roles.push(userRole._id)

  const createdUser = await newUser.save()

  const token = jwt.sign({ id: createdUser._id }, secret.SECRET, {
    expiresIn: 120 // 2 minutes
  })

  res.status(201).json({ token })
}

export const signin = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })
  if (!user) return res.status(401).json({message: 'Invalid credentials'})

  const match = await User.comparePassword(password, user.password)
  if (!match) return res.status(401).json({message: 'Invalid credentials here'})

  const token = jwt.sign({ id: user._id }, secret.SECRET,{
    expiresIn: 120 // 2 minutes
  })

  res.json({token})
}