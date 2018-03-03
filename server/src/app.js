console.log('hey!')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/status', (req, res) => {
  res.send({
    msg: `server's up and running`
  })
})

app.listen(process.env.PORT || 9000)
