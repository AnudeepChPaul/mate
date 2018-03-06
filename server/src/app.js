const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')
const mongo = require('./models/index')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

mongo.mongoClient.connect((err, client) => {
  if (err) throw err

  const db = client.db(config.db.name)
  mongo.workerDb = db

  app.listen(config.port)
  console.log(`Server started at ${config.port}.`)
})
