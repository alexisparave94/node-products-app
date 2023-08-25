import {  Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'

export const ROLES = ['admin', 'moderator', 'user']

/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         username:
 *           type: string
 *           example: Testino
 *         email:
 *           type: string
 *           example: test@mail.com
 *         roles:
 *           type: array
 *           items:
 *             type: string
 */



const userSchema = new Schema({
  username: { type: String, require: true, unique: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  roles: [{
    ref: 'Role',
    type: Schema.Types.ObjectId
  }]
}, {
  versionKey: false,
  timestamps: true
})

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, salt)
}

userSchema.statics.comparePassword = async (receivedPassword, password) => {
  return await bcrypt.compare(receivedPassword, password)
}

export default model('User', userSchema)