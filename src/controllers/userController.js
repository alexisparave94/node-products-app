import User from "../models/User.js"
import Role from "../models/Roles.js"

export const createUser = async (req, res) => {
  const { username, email, password, roles } = req.body

  const newUser = new User({ 
    username,
    email,
    password: await User.encryptPassword(password)
  })

  if (roles) {
    const foundRoles = await Role.find({ name: { $in: roles } })
    newUser.roles = foundRoles.map(role => role._id)
  } else {
    const role = await Role.findOne({ name: 'user'})
    newUser.roles = [ role._id ]
  }

  const createdUser = await newUser.save()
  res.status(201).json(createdUser)
}