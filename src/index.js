import express from 'express'
import './config/db.js'
import productsRoutes from './routes/products.routes.js'
import authRoutes from './routes/auth.routes.js'

const app = express()

app.use(express.json())

app.use('/api/v1/products', productsRoutes)
app.use('/api/v1', authRoutes)

app.listen(process.env.PORT || 3000, () => {
  console.log('Server listening on port', process.env.PORT || 3000)
})