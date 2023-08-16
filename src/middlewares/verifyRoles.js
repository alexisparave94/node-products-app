import { ROLES } from '../models/User.js'

export const checkRoles = (req , res, next) => {
  const {roles} = req.body

  if (roles) {
    for (let i = 0; i < roles.length; i++) {
      if (!ROLES.includes(roles[i])) return res.status(422).json({ message: `Role ${roles[i]} does not exist` })
    }
  }

  next()
}