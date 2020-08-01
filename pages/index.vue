<template>
  <div class="index-page">
    <Search />
    <div class="container">
      <transition name="fade">
        <MoviePagination v-if="gotMovies" />
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['gotMovies'])
  }
}
</script>

<style lang="scss">

  .index-page {
    position: relative;
    box-sizing: border-box;
    display: block;
    width: 100%;
  }

  .fade-enter-active, .fade-leave-active {
    transition-delay: .7s;
    transition-property: opacity;
    transition-duration: .6s;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }

</style>
