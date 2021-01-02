<template>
  <ConnectionDialog
    v-if="connectionDialog.isVisible"
    text="http://www.google.com"
    @hide="hideConnectionDialog"
  />
  <Toolbar class="p-shadow-1">
    <template #left>
      <div>Anchormanual</div>
    </template>
    <template #right>
      <Button
        label="Csatlakozás"
        @click="showConnectionDialog"
        class="p-mr-2"
      />
      <Button
        label="Frissítés"
        @click="syncContents"
        icon="pi pi-upload"
        class="p-mr-2"
      />
    </template>
  </Toolbar>
</template>

<script>
import Toolbar from 'primevue/toolbar'
import Button from 'primevue/button'
import ConnectionDialog from '../ConnectionDialog/ConnectionDialog.vue'

export default {
  name: 'AppTopBar',
  components: {
    Toolbar,
    Button,
    ConnectionDialog,
  },
  data() {
    return {
      message: null,
      text: null,
    }
  },
  computed: {
    connectionDialog() {
      return this.$store.state.appTopBar.connectionDialog
    },
  },
  methods: {
    syncContents() {
      this.$store.dispatch('home/contentList/syncContents')
    },
    showConnectionDialog() {
      this.$store.dispatch('appTopBar/showConnectionDialog')
    },
    hideConnectionDialog() {
      this.$store.dispatch('appTopBar/hideConnectionDialog')
    },
  },
}
</script>
<style scoped>
  .p-toolbar {
    width: 100%;
    background-color: #FFF;
    border-radius: 0;
  }
</style>
