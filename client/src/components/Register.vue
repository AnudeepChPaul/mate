<template>
  <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-1">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Register</v-toolbar-title>
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
            <v-btn color="primary" @click="register" v-bind:disabled = "this.register_disabled">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
  </v-layout>
</template>

<script>
/* eslint-disable */
import AuthenticationSerive from '@/services/AuthenticationService'

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      email_error: false,
      password_error: false,
      register_disabled: true
    }
  },
  watch: {
    email (email) {
      this.email_error = !this.validateEmail(email)
      this.enableButton()
    },

    password (password) {
      this.password_error = !this.validatePassword(password)
      this.enableButton()
    }
  },
  methods: {
    async register () {
      try {
        const authReply = await AuthenticationSerive.register({
          email: this.email,
          password: this.password
        })
        if (authReply.data.success) {
          this.$store.dispatch('AuthenticationStore/SET_AUTHENTICATION', {
            isAuthenticated: true
          })
        }
      } catch (err) {
        this.$store.dispatch('AuthenticationStore/SET_AUTHENTICATION', {
          isAuthenticated: false
        })
      }
    },

    validateEmail (email) {
      return new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:" +
        "\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+" +
        ')*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])' +
        '?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?').test(email)
    },

    validatePassword (password) {
      return new RegExp('^[a-zA-z0-9]{8,32}$').test(password)
    },

    enableButton () {
      this.register_disabled = (this.email && this.password) && !(!this.email_error && !this.password_error)
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
