import {  Schema, model } from 'mongoose'

const userSchema = new Schema({
  username: { type: String, require: true, unique: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true }
}, {
  versionKey: false
})

export default model('User', userSchema)