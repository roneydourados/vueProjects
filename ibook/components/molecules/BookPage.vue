<template>
  <swiper
    :direction="'vertical'"
    :space-between="30"
    :pagination="{ clickable: true }"
    class="mySwiper"
  >
    <swiper-slide>Pag. {{ pageNumber }}</swiper-slide>
  </swiper>
</template>

<script lang="ts">
import Vue from 'vue'

import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/swiper.scss'

import 'swiper/components/pagination/pagination.min.css'

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper/core'

// install Swiper modules
SwiperCore.use([Pagination])

export default Vue.extend({
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    pageNumber: {
      type: Number,
      required: true
    }
  },
  data() {
    return {}
  },
  methods: {}
})
</script>

<style lang="scss" scoped></style>
