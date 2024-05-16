import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import { dbConnect } from './config/mongo'
import router from './routes/index.routes'
dotenv.config()

const PORT = process.env.PORT
const app = express()
app.use(express.json())
app.use(router)
app.use( cors()) 
dotenv.config()
dbConnect()


app.get('/', (_req, res) => {
  res.send('Hello WorldSS!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})