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
//   mongo.workerDb = d

class Store {
  constructor() {
    this.data = []
  }
  
  get(id) {
      return id ? this.data.filter(el => (el.id === id)): this.data.concat();
  }
  
  set(data) {
    this.data.push(data);
  }
  
  update(id, data) {
    let index = this.data.findIndex(el => (el.id === id));
    
    if(index !== null || index !== undefined) {
      this.data[index] = data;
    }
  }
  
  delete(id) {
    let index = this.data.findIndex(el => (el.id === id));
    
    if(index !== null || index !== undefined) {
      this.data.splice(index, 1);
    }
  }
}

const storage = new Store();
// get: localhost:9000/data/
// get: localhost:9000/data/id
app.get('/data', function(req, res) {
  try {
      res.send({
      success: true,
      result: {
          data: storage.get(req.params.id)
        }
      }
   } catch(e) {
      res.send({
      error: true,
      result: {
          data: null,
          msg: 'error occurred'
      }
   }
  
});
app.post('/data', function(req, res) {
    try {
      let data = storage.get(req.params.id) || null;
      
      if(!data) {
          // read the form body req.body
          // set the data to the array
      }
      
      res.send({
        success: true,
        result: {
            data: data
          }
      }
   } catch(e) {
      res.send({
        error: true,
        result: {
            data: null,
            msg: 'error occurred'
        }
      });
  }
});

app.listen(config.port,
  console.log(`Server started at ${config.port}.`)
           
})

// sequelize.sync({ force: false }).then(() => {
//   server.listen(config.port)
//   console.log(`Server started at ${config.port}.`)
// })
