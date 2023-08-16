import express from 'express'
import './config/db.js'

import {createRoles} from './libs/initalSetup.js'

import productsRoutes from './routes/products.routes.js'
import authRoutes from './routes/auth.routes.js'
import usersRoutes from './routes/user.routes.js'

const app = express()
createRoles()

app.use(express.json())

app.use('/api/v1/products', productsRoutes)
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/users', usersRoutes)

app.listen(process.env.PORT || 3000, () => {
  console.log('Server listening on port', process.env.PORT || 3000)
})