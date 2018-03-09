// class User {
//   constructor (data) {
//     this.name = data.name || data.email
//     this.email = data.email
//     this._id = data.email
//     this.password = data.password
//     this.loggedIn = false
//     this.createdOn = new Date()
//     this.updatedOn = this.createdOn
//   }
// }

// const options = {
//   validator: {
//     $jsonschema: {
//       bsonType: 'object',
//       required: ['name', 'email', '_id', 'password', 'loggedIn'],
//       properties: {
//         name: {
//           bsonType: 'string',
//           description: 'name of the user'
//         },
//         email: {
//           bsonType: 'string',
//           description: 'email of the user'
//         },
//         password: {
//           bsonType: 'string',
//           description: 'password of the user'
//         }
//       }
//     }
//   }
// }

// module.exports = {
//   create (data) {
//     return new User(data)
//   },

//   async getCollection (db) {
//     if (db.users) {
//       return db.users
//     } else {
//       const collection = await db.createCollection('users', options)
//       return collection
//     }
//   }
// }

// const Promise = require('bluebird')
// const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

// const hashPassword = (user, options) => {
//   const SALT_FACTOR = 10

//   if (!user.changed('password')) {
//     return
//   }

//   return bcrypt
//     .genSaltAsync(SALT_FACTOR)
//     .then(salt => bcrypt.hashAsync(user.password, salt, null))
//     .then(hash => {
//       console.log('###', user.password, hash)
//       user.setDataValue('password', hash)
//     })
// }

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    }
  }, {
    // hooks: {
    //   beforeCreate: hashPassword,
    //   beforeUpdate: hashPassword,
    //   beforeSave: hashPassword
    // }
  })

  // User.prototype.validatePassword = function (password) {
  //   return bcrypt.compareAsync(password, this.password)
  // }
  User.prototype.validatePassword = function (password) {
    return password === this.password
  }

  return User
}
