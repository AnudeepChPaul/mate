console.log('hey!')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
  console.log(req)
  res.send({
    msg: `Hello ${req.body.email}, you are registered.`
  })
})

app.listen(process.env.PORT || 9000)
