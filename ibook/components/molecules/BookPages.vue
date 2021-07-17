<template>
  <div class="book-pages">
    <h2>{{ $book.title }}</h2>
    <BookPage
      v-for="page in $pages"
      :key="page.id"
      :page-number="page.pageNumber"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'

export default Vue.extend({
  computed: {
    $pages() {
      return books.$single.pages
    },

    $book() {
      return books.$single
    }
  }
})
</script>

<style lang="scss" scoped>
.book-pages {
  display: grid;
  width: 250px;
  height: 250px;
  border: 0;
  border-radius: 5px;
  background: color(dark, darkest);
}
</style>
