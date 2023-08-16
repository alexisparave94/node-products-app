import Roles from "../models/Roles.js"
import User from "../models/User.js"

export const isModerator = async (req, res, next) => {
  const user = await User.findById(req.userId)

  const roles = await Roles.find({ _id: { $in: user.roles } })

  if (roles.some(role => role.name === 'moderator')) return next()

  res.status(403).json({message: 'Unforbidden action'})
}

export const isAdmin = async (req, res, next) => {
  const user = await User.findById(req.userId)

  const roles = await Roles.find({ _id: { $in: user.roles } })

  if (roles.some(role => role.name === 'admin')) return next()

  res.status(403).json({message: 'Unforbidden action'})
}