import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'

const app = express()
const PORT = process.env.PORT || 5000
dotenv.config()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

mongoose.set('strictQuery', false)
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server started on port: http://localhost:${PORT}`)
    })
  )
  .catch((error) => console.log(error.message))

app.use('/posts', postRoutes)
app.use('/users', userRoutes)
