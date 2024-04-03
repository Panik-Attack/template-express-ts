import express from 'express'
import * as dotenv from 'dotenv'

dotenv.config()
const app = express()
app.use(express.json())


const PORT = process.env.PORT

app.get('/', (_req, res) => {
  res.send('Hello WorldSS!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})