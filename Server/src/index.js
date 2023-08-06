const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('mongodb conneted')
  })
  .catch((err) => {
    console.log('error connecting database', err)
  })

app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'https://user-sector-reactjs-1jgo.onrender.com',
    ],
  })
)
app.use(express.json())

//Import routes
const sectorRoute = require('./routers/sector.router')
const userRoute = require('./routers/user.router')

app.use('/api/sector', sectorRoute)
app.use('/api/user', userRoute)

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log('server is running', port)
})
