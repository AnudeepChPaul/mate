<template>
  <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-1">
          <v-toolbar dark color="primary">
            <v-toolbar-title> Login </v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field name="login" label="email" v-model="email" type="text"></v-text-field>
              <v-text-field name="password" label="Password" v-model="password" id="password" type="password"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="login">Login</v-btn>
          </v-card-actions>
          <span> {{ showError  }} </span>
        </v-card>
      </v-flex>
  </v-layout>
</template>

<script>
/* eslint-disable */
import AuthenticationSerive from '@/services/AuthenticationService'
import SocketApi from '@/services/SocketApi'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  computed: {
    showError () {
      return this.error
    }
  },
  methods: {
    async login () {
      try {
        const authReply = await AuthenticationSerive.login({
          email: this.email,
          password: this.password
        })
        if (authReply.data.success) {
          this.$store.dispatch('AuthenticationStore/SET_AUTHENTICATION', {
            isAuthenticated: true,
            token: authReply.data.data.token
          })
        }
      } catch (response) {
        this.$store.dispatch('AuthenticationStore/SET_AUTHENTICATION', {
          isAuthenticated: false
        })
      }
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
.error {
  color: red;
}
.field_wrapper {
  display: inline-grid;
}
</style>
