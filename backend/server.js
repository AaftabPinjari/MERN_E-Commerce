import express from 'express'
import productRoutes from './routes/productRoutes.js'
// import products from './data/products.js'
import connectDB from './config/db.js'
import dotenv from 'dotenv'

const app = express()

dotenv.config()

connectDB()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('API is running')
})

app.use('/api/products', productRoutes)


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))