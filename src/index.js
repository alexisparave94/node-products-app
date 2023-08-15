import express from 'express'
import './config/db.js'
import productsRoutes from './routes/products.routes.js'

const app = express()

app.use('/products', productsRoutes)

app.listen(process.env.PORT || 3000, () => {
  console.log('Server listening on port', process.env.PORT || 3000)
})