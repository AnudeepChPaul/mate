<template>
  <v-toolbar
    dark
    color="primary"
    scroll-off-screen
    scroll-target="#scrolling-techniques"
  >
    <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
    <v-toolbar-title>
      <span @click="navigateTo('')">
        {{ appName }}
      </span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      flat
      dark
      left
      large
      @click = 'navigateTo("login")'
    >
      Login
    </v-btn>
    <v-btn
      flat
      dark
      left
      large
      @click = 'navigateTo("register")'
    >
      Sign up
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      appName: 'Mate'
    }
  },
  methods: {
    navigateTo (path) {
      this.$router.push({
        path: `/${path}`
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
