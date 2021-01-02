<template>
  <Dialog v-model:visible="visible" :header="content ? 'Komment szerkesztése' : 'Komment hozzáadása'">
    <Form @submit="save" :initial-values="content || form" v-slot="{ errors }">
      <div class="p-fluid">
        <div class="p-field">
          <Field type="text" name="name" v-slot="{ field }" rules="required">
            <label for="name">Név</label>
            <InputText
              type="text"
              v-bind="field"
              id="name"
              aria-describedby="name-help"
              v-bind:class="{ 'p-invalid': errors.name }"
            />
            <small id="name-help" v-bind:class="{ 'p-invalid': errors.name }">
              {{ errors.name }}
            </small>
          </Field>
        </div>
        <div class="p-field">
          <Field type="text" name="comment" v-slot="{ field }" rules="required">
            <label for="comment">Komment</label>
            <Textarea
              v-bind="field"
              id="comment"
              aria-describedby="comment-help"
              v-bind:class="{ 'p-invalid': errors.comment }"
            />
            <small id="comment-help" v-bind:class="{ 'p-invalid': errors.comment }">
              {{ errors.comment }}
            </small>
          </Field>
          </div>
        <Button type="submit" :label="content ? 'Mentés' : 'Hozzáadás'" />
      </div>
    </Form>
  </Dialog>
</template>

<script>
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import { Form, Field } from 'vee-validate'

export default {
  name: 'ContentFormDialog',
  components: {
    Dialog,
    InputText,
    Textarea,
    Button,
    Form,
    Field,
  },
  props: ['content'],
  data() {
    return {
      visible: true,
      form: {
        name: this.content ? this.content.name : '',
        comment: this.content ? this.content.comment : '',
      },
    }
  },
  methods: {
    save(values) {
      this.$emit('save', values)
    },
  },
}
</script>
