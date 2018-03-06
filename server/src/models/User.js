
class User {
  constructor (data) {
    this.name = data.name || data.email
    this.email = data.email
    this._id = data.email
    this.password = data.password
    this.loggedIn = false
    this.createdOn = new Date()
    this.updatedOn = this.createdOn
  }
}

const options = {
  validator: {
    $jsonschema: {
      bsonType: 'object',
      required: ['name', 'email', '_id', 'password', 'loggedIn'],
      properties: {
        name: {
          bsonType: 'string',
          description: 'name of the user'
        },
        email: {
          bsonType: 'string',
          description: 'email of the user'
        },
        password: {
          bsonType: 'string',
          description: 'password of the user'
        }
      }
    }
  }
}

module.exports = {
  create (data) {
    return new User(data)
  },

  async getCollection (db) {
    if (db.users) {
      return db.users
    } else {
      const collection = await db.createCollection('users', options)
      return collection
    }
  }
}
