<template>
  <v-app id="app">
    <!-- <img src="./assets/logo.png"> -->
    <v-content>
      <page-header/>
        <div
          class="scroll-y"
          id="scrolling-techniques"
        >
          <v-container fluid dark>
            <router-view/>
          </v-container>
        </div>
    </v-content>
  </v-app>
</template>

<script>
import PageHeader from '@/components/PageHeader'

export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
html {
  overflow-y: auto;
}
</style>
