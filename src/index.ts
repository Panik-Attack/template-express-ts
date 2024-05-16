import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import { dbConnect } from './config/mongo'

const PORT = process.env.PORT
const app = express()
dotenv.config()
app.use(express.json())
app.use( cors()) 
dotenv.config()
dbConnect()


app.get('/', (_req, res) => {
  res.send('Hello WorldSS!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})