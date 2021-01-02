<template>
  <div class="p-d-flex p-flex-column">
    <Card v-for="content in contents" :key="content" :class="`p-mb-2 status-${content.status}`">
      <template #title>
        <div class="p-d-flex p-jc-between">
          <span>{{ content.name }}</span>
          <div>
            <Button icon="pi pi-pencil" @click="edit(content)" class="p-mr-2" />
            <Button icon="pi pi-times" @click="remove(content.id)" v-if="!isDeleted(content)" class="p-button-danger" />
            <Button icon="pi pi-undo" @click="restore(content.id)" v-if="isDeleted(content)" />
          </div>
        </div>
      </template>
      <template #content>
        {{ content.comment }}
      </template>
    </Card>
  </div>
</template>

<script>
import Card from 'primevue/card'
import Button from 'primevue/button'

export default {
  name: 'ContentList',
  components: {
    Card,
    Button,
  },
  props: ['contents'],
  methods: {
    edit(content) {
      this.$store.dispatch('home/showContentFormDialog', content)
    },
    remove(id) {
      this.$store.dispatch('home/contentList/deleteContent', id)
    },
    restore(id) {
      this.$store.dispatch('home/contentList/undeleteContent', id)
    },
    isDeleted(content) {
      return ['deleted', 'updatedeleted'].includes(content.status)
    },
  },
}
</script>

<style scoped>
.status-created {
  background-color: green;
}
.status-updated {
  background-color: blue;
}
.status-deleted, .status-updatedeleted {
  background-color: red;
}
</style>
