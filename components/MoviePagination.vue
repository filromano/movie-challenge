<template>
  <div class="movie-page">
    <MovieList
      v-for="(page, index) in pages"
      v-show="index === selectedPage"
      :key="index"
      :movies="page"
    />
    <ul class="page-numbers">
      <li v-for="(page, index) in pages" :key="index">
        <span @click="changePage(index)"> {{ index + 1 }} </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      selectedPage: 0
    }
  },
  computed: {
    ...mapState(['pages'])
  },
  methods: {
    changePage (value) {
      this.selectedPage = value
    }
  }
}
</script>

<style lang="scss">
  .movie-page {
    display: block;
    width: 100%;

    .page-numbers {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      list-style: none;
      li {
        padding: 0 5px;
        cursor: pointer
      }
    }
  }
</style>
