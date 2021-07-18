<template>
  <NuxtLink to="/" class="book-page">
    {{ pageNumber }}
    <div>
      <p>{{ pageContent }}</p>
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    pageNumber: {
      type: Number,
      required: true
    },
    pageContent: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.book-page {
  display: grid;
  columns: 300px 1fr;
  width: 300px;
  height: 2rem;
  margin-top: 1rem;

  border: 0;
  border-radius: 5px;
  background: color(dark);
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
  }
}
</style>
