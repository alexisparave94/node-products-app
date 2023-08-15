import { Schema, model } from 'mongoose'

const roleSchema = new Schema({
  name: String
}, {
  versionKey: true
})

export default model('Role', roleSchema)

