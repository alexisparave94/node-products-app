import User from "../models/User.js"

export const checkDucplicateUsernameAndEmail = async (req, res, next) => {
  const user = await User.findOne({ username: req.body.username })
  if (user) return res.status(422).json({ message: 'The username already exist' })

  const email = await User.findOne({ email: req.body.email })
  if (email) return res.status(422).json({ message: 'The email is already exist' })

  next()
}