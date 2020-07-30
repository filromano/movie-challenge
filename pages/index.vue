<template>
  <div class="container">
    <Search :class="[gotMovies ? 'top' : '']" />
    <transition name="fade">
      <MoviePagination v-if="gotMovies" />
    </transition>
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

  .container {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    background: #777DA7;
    .top {
      top: 5%;
    }
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
