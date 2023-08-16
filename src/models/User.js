import {  Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'

export const ROLES = ['admin', 'moderator', 'user']

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