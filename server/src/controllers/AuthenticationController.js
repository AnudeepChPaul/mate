const User = require('../models/User')
const mongo = require('../models/index')

module.exports = {
  async register (req, res) {
    const newUser = User.create(req.body)
    const collection = await User.getCollection(mongo.workerDb)

    collection.insertOne(newUser, (err, recordData) => {
      if (err) {
        res.status(400).send({
          error: true,
          data: {
            error: 'duplicate_key_error'
          }
        })
      } else {
        res.send({
          success: true,
          data: {
            userId: recordData.ops[0]._id
          }
        })
      }
    })
  }
}
