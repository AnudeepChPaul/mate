// const User = require('../models/User')
// const mongo = require('../models/index')

// module.exports = {
//   async register (req, res) {
//     const newUser = User.create(req.body)
//     const collection = await User.getCollection(mongo.workerDb)

//     try {
//       const insertedData = await collection.insertOne(newUser)
//       res.send({
//         success: true,
//         data: {
//           userId: insertedData.ops[0]._id
//         }
//       })
//     } catch (err) {
//       res.status(400).send({
//         error: true,
//         data: {
//           error: 'duplicate_key_error'
//         }
//       })
//     }
//   }
// }
const { User } = require('../models')

module.exports = {
  async register (req, res) {
    try {
      const newUser = await User.create(req.body)
      res.send({
        success: true,
        data: {
          user: newUser
        }
      })
    } catch (err) {
      res.status(400).send({
        error: true,
        data: {
          error: err || 'duplicate_key_error'
        }
      })
    }
  }
}
