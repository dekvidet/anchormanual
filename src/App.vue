<template>
  <div id="app">
    <AppTopBar />
    <div class="p-ml-3 p-mr-3">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import AppTopBar from './components/AppTopBar/AppTopBar.vue'
import { connect } from './services/sockets'

export default {
  components: {
    AppTopBar,
  },
  mounted() {
    const socket = connect('syncer')
    socket.emit('login', 'host')
  },
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
<style>
html, body {
  background-color: #F8F9FA;
  margin: 0;
}
</style>
