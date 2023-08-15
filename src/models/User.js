import {  Schema, model } from 'mongoose'

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

export default model('User', userSchema)