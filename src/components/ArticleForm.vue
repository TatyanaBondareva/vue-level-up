<template>
  <div class="article-form">
    <div class="container">
      <div class="content-wrapper">
        <div class="article-form__wrapper">
          <mcv-validation-errors v-if="errors" :validation-errors="errors" />
          <form @submit.prevent="onSubmit" class="form">
                <input
                  type="text"
                  class="form__input"
                  placeholder="Article title"
                  v-model="title"
                />
                <input
                  type="text"
                  class="form__input"
                  placeholder="Description"
                  v-model="description"
                />
                <textarea
                  class="form__input"
                  placeholder="What is this article about?"
                  v-model="body"
                ></textarea>
                <input
                  type="text"
                  class="form__input"
                  placeholder="Enter tags"
                  v-model="tagList"
                />
                <button
                  type="submit"
                  class="form__button"
                  :disabled="isSubmitting"
                >
                  Publish Article
                </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import McvValidationErrors from '@/components/ValidationErrors'
export default {
  name: 'McvArticleForm',
  props: {
    initialValues: {
      type: Object,
      required: true
    },
    errors: {
      type: Object,
      required: false
    },
    isSubmitting: {
      type: Boolean,
      required: true
    }
  },
  components: {
    McvValidationErrors
  },
  data() {
    return {
      title: this.initialValues.title,
      description: this.initialValues.description,
      body: this.initialValues.body,
      tagList: this.initialValues.tagList.join(' ')
    }
  },
  methods: {
    onSubmit() {
      const form = {
        title: this.title,
        description: this.description,
        body: this.body,
        tagList: this.tagList.split(' ')
      }
      this.$emit('articleSubmit', form)
    }
  }
}
</script>
