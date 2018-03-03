<template>
  <div>
      <h1>
        Register
      </h1>
      <input type="email" name="email" placeholder="email" v-model="email">
      <br>
      <input type="password" name="password" placeholder="password" v-model="password">
      <br>
      <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationSerive from '@/services/AuthenticationService'

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  watch: {
    email (value) {
      console.log('email has changed value: ', value)
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationSerive.register({
        email: this.email,
        password: this.password
      })
      console.log(response)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
