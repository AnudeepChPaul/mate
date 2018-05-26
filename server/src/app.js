const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
// const config = require('./config/config')
const config = {
  port: process.env.PORT || 9000
};

// const { sequelize } = require('./models')

const app = require('express')()
const server = require('http').Server(app)
// const io = require('socket.io')(server)

// app.use(morgan('combined'))
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)
// require('./ioevents')(io)

// mongodb version
// const mongo = require('./models/index')
// mongo.mongoClient.connect((err, client) => {
//   if (err) throw err

//   const db = client.db(config.db.name)
//   mongo.workerDb = db

  app.listen(config.port)
  console.log(`Server started at ${config.port}.`)
})

// sequelize.sync({ force: false }).then(() => {
//   server.listen(config.port)
//   console.log(`Server started at ${config.port}.`)
// })
