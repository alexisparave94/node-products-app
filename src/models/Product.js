import { Schema, model } from 'mongoose'

/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         _id: 
 *           type: string
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         name: 
 *           type: string
 *           example: Tommy V  
 *         description:
 *           type: string
 *           example: This is a description
 *         price:
 *           type: integer
 *           example: 200
 *         created_at:
 *           type: string
 *           example: 2023-08-15T03:18:46.721Z
 *         updated_at:
 *           type: string
 *           example: 2023-08-15T03:18:46.721Z
 */

const productSchema = new Schema({
  name: String,
  description: String,
  price: Number
}, {
  timestamps: true,
  versionKey: false
})

export default model('Product', productSchema)