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
const jwt = require('jsonwebtoken')
const config = require('../config/config')

// const isPasswordValid = (password, user) => (password === user.password)

const jwtSignUser = (user) => {
  const TWO_HOURS = 60 * 60 * 2
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: TWO_HOURS
  })
}

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
  },

  async login (req, res) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        res.status(403).send({
          error: true,
          data: {
            error: 'Login information was incorrect'
          }
        })
      } else {
        const isPasswordValid = user.validatePassword(password)
        if (isPasswordValid) {
          const userJson = user.toJSON()

          res.send({
            success: true,
            data: {
              authStatus: true,
              token: jwtSignUser(userJson)
            }
          })
        } else {
          res.status(403).send({
            error: true,
            data: {
              error: 'Login information was incorrect'
            }
          })
        }
      }
    } catch (err) {
      res.status(500).send({
        error: true,
        data: {
          error: `An error has occured while trying to login`
        }
      })
    }
  }
}
