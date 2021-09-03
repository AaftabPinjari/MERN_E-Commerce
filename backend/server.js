import express from 'express'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
// import products from './data/products.js'
import { notFound, errorHandler } from './middlewares/errorMiddleware.js'
import connectDB from './config/db.js'
import dotenv from 'dotenv'

const app = express()

app.use(express.json())

dotenv.config()


const PORT = process.env.PORT || 5000
connectDB()

app.get('/', (req, res) => {
    res.send('API is running')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

//custom error handling
app.use(notFound)
app.use(errorHandler)


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))