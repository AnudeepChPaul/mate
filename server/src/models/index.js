
const config = require('./../config/config')

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const db = {}

const mongoClient = new MongoClient(config.db.url)

db.mongoClient = mongoClient
db.MongoClient = MongoClient

module.exports = db
