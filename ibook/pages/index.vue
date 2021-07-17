<template>
  <HomeTemplate />
</template>

<script>
import Vue from 'vue'
import { books } from '@/store'

export default Vue.extend({
  layout: 'ibook',
  async asyncData() {
    await books.index()
  }
})
</script>
