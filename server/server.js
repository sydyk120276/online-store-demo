import 'dotenv/config.js'
import express from 'express'
import cors from 'cors'
import axios from 'axios'


const PORT = process.env.PORT || 5000

const server = express()
server.use(cors())

server.get('/api/v1/store', async (req, res) => {
  try {
    axios('https://jsonplaceholder.typicode.com/users')
      .then((response) => res.json(response.data))
  } catch (err) {
    console.log(err)
  }
})

server.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}`)
})