import IO from 'socket.io-client'
import Api from './Api'

const connection = IO()

export default (channel) => {
  connection.connect(Api().defaults.baseURL + channel)
  return connection
}
