<template>
  <BookReadTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'

export default Vue.extend({
  layout: 'ibook',
  async asyncData({ params }) {
    await books.show({ id: Number(params.id) })
  },
  head() {
    return {
      title: books.$single.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: books.$single.title
        }
      ]
    }
  }
})
</script>
