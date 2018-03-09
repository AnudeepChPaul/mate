const IOEventsController = require('./controllers/IOEventsController')

module.exports = (io) => {
  io.on('connection', IOEventsController.onConnected)
  io.on('gettoken', IOEventsController.onGetToken)
}
