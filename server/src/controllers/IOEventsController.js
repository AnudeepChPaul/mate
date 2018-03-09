module.exports = {
  onConnected: (Socket) => {
    console.log('user connected')
  },

  onGetToken: (Socket) => {
    console.log(Socket)
  }
}
