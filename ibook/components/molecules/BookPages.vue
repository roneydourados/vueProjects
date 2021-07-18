<template>
  <div class="book-pages">
    <h2>{{ $book.title }}</h2>
    <BookPage
      v-for="page in $book.pages"
      :key="page.id"
      :page-number="page.pageNumber"
      :page-content="page.text"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'

export default Vue.extend({
  computed: {
    $book() {
      return books.$single
    }
  }
})
</script>

<style lang="scss" scoped>
.book-pages {
  display: grid;
  width: 300px;
}
</style>
