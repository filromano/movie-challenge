<template>
  <div class="movie-page">
    <MovieList :paginate="paginate" />
    <ul class="page-numbers">
      <li v-for="(pageNumber, index) in totalPages" :key="index">
        <a href="#" @click="changePage(pageNumber)">{{ pageNumber }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MovieList from './MovieList'

export default {
  components: {
    MovieList
  },
  data () {
    return {
      currentPage: 0,
      itemsPerPage: 6
    }
  },
  computed: {
    ...mapState(['movies']),
    totalPages () {
      return Math.ceil(this.movies.length / this.itemsPerPage)
    },
    paginate () {
      const index = this.currentPage * this.itemsPerPage
      return this.movies.slice(index, index + this.itemsPerPage)
    }
  },
  methods: {
    changePage (pageNumber) {
      this.currentPage = pageNumber - 1
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/css/utils.scss';

  .movie-page {
    display: block;
    width: 100%;

    .page-numbers {
      @include flexDisplay($wrap: wrap);
      width: 100%;
      list-style: none;
      li {
        padding: 0 5px;
        cursor: pointer
      }
    }
  }
</style>
