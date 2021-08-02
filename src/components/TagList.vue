<template>
  <ul class="tag-list">
    <li v-for="tag in tags" :key="tag" class="tag-list__item">
      {{ tag }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'McvTagList',
  props: {
    tags: {
      type: Array,
      required: true
    }
  }
}
</script>
