<template>
  <Dialog v-model:visible="visible" header="Csatlakozási lehetőségek">
    <div class="p-d-flex p-flex-column p-ai-center">
      <QrCode :text="text" />
      <a :href="text" target="_blank">{{ text }}</a>
  </div>
  </Dialog>
</template>

<script>
import Dialog from 'primevue/dialog'
import QrCode from '../QrCode/QrCode.vue'

export default {
  name: 'ConnectionDialog',
  components: {
    Dialog,
    QrCode,
  },
  props: ['text'],
  data() {
    return {
      visible: true,
    }
  },
}
</script>
