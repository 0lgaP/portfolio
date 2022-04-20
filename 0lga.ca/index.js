const PORT = 8000
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())

const {F_SERVICE, F_TEMPLATE, F_UID} = process.env

app.get('/contact', (req, res) => {
  res.json({id: F_SERVICE, template: F_TEMPLATE, u_id: F_UID})
})

app.listen(8000, () => console.log(`Server is running on port ${PORT}`))