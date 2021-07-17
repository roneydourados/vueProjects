<template>
  <div class="book-page">
    <h3>{{ pageNumber }}</h3>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    pageNumber: {
      type: Number,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.book-page {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  align-items: center;
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
  }
}
</style>
