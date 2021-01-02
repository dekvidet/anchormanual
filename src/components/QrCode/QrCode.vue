<template>
  <canvas id="qr-code"></canvas>
</template>

<script>
import QRCode from 'qrcode'

export default {
  name: 'QrCode',
  props: ['text'],
  mounted() {
    const canvas = document.getElementById('qr-code')
    QRCode.toCanvas(canvas, this.text, error => {
      if (error) {
        console.error(error)
      }
    })
  },
}
</script>
