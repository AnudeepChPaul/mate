import Store from '@/store/Store'

const routes = [{
  path: '/home',
  name: 'HelloWorld',
  component: () => (
    import('@/components/HelloWorld'))
}, {
  path: '/register',
  name: 'Register',
  component: () => (
    import('@/components/Register'))
}, {
  path: '/login',
  name: 'Login',
  component: () => (
    import('@/components/Login'))
}, {
  path: '*',
  redirect: {
    path: '/home'
  }
}]

export default routes.map((el) => ({ ...el,
  beforeEnter: function (to, from, next) {
    const loggedIn = Store.getters['AuthenticationStore/GET_AUTHENTICATION_STATUS']()

    if (to.path === '/login' || to.path === '/register') {
      loggedIn ? next('/home') : next()
    } else {
      loggedIn ? next() : next('/login')
    }
  }
}))
