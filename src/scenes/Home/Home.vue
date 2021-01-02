<template>
  <ContentFormDialog
    v-if="contentFormDialog.isVisible"
    :content="contentFormDialog.content"
    @hide="hideContentFormDialog"
    @save="saveContent"
  />
  <div class="p-d-flex p-ai-center p-jc-between">
    <h2>Hozzászólások</h2>
    <Button
      label="Új"
      @click="showContentFormDialog"
      icon="pi pi-plus"
      class="p-mr-2"
    />
  </div>
  <ContentList :contents="contents" />
</template>

<script>
import Button from 'primevue/button'
import ContentList from '../../components/ContentList/ContentList.vue'
import ContentFormDialog from '../../components/ContentFormDialog/ContentFormDialog.vue'

export default {
  name: 'Home',
  components: {
    Button,
    ContentList,
    ContentFormDialog,
  },
  data() {
    return {
    }
  },
  computed: {
    contentFormDialog() {
      return this.$store.state.home.contentFormDialog
    },
    contents() {
      return this.$store.state.home.contentList.contents
    },
  },
  methods: {
    showContentFormDialog() {
      this.$store.dispatch('home/showContentFormDialog')
    },
    hideContentFormDialog() {
      this.$store.dispatch('home/hideContentFormDialog')
    },
    saveContent(formValues) {
      const { content } = this.$store.state.home.contentFormDialog
      if (content) {
        this.$store.dispatch('home/contentList/updateContent', { ...content, ...formValues })
      } else {
        this.$store.dispatch('home/contentList/createContent', formValues)
      }
      this.hideContentFormDialog()
    },
  },
}
</script>
