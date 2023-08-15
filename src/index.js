import express from 'express'
import './config/db.js'
import productsRoutes from './routes/products.routes.js'

const app = express()

app.use(express.json())

app.use('/api/v1/products', productsRoutes)

app.listen(process.env.PORT || 3000, () => {
  console.log('Server listening on port', process.env.PORT || 3000)
})