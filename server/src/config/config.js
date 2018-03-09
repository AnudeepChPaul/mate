module.exports = {
  port: process.env.PORT || 9000,
  db: {
    // mongodb version
    // url: process.env.DB_URL || 'mongodb://localhost:27017',
    database: process.env.DB_NAME || 'mate',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.HOST || 'localhost'
    }
  },
  authentication: {
    jwtSecret: 'mate_secret'
  }
}
