import {  Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'

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

export default model('User', userSchema)