import SocketApi from '@/services/SocketApi'
import AuthenticationStore from '@/store/AuthenticationStore'

export default {
  register () {
    const authToken = AuthenticationStore.getters['GET_AUTHENTICATION_TOKEN']()
    return SocketApi(authToken).emit(`register`, authToken)
  }
}
