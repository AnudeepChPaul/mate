// const config = require('./../config/config')

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const db = {}

// const mongoClient = new MongoClient(config.db.url)

// db.mongoClient = mongoClient
// db.MongoClient = MongoClient

// module.exports = db

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

fs
  .readdirSync(__dirname)
  .filter((file) => file !== 'index.js')
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

db.Sequelize = Sequelize
db.sequelize = sequelize

module.exports = db
