import mongoose from 'mongoose'
import { config } from 'dotenv'
config()

export default mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('DB connected'))
  .catch(err => console.log(err))