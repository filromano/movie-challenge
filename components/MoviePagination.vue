<template>
  <div class="movie-page">
    <MovieList :paginate="paginate" />
    <ul class="page-numbers">
      <li
        v-for="(pageNumber, index) in totalPages"
        :key="index"
        :class="{current: currentPage === pageNumber - 1, last: (pageNumber == totalPages && Math.abs(pageNumber - currentPage - 1) > 3), first:(pageNumber - 1 == 0 && Math.abs(pageNumber - currentPage - 1) > 3), none: (Math.abs(pageNumber - currentPage - 1) > 3) }"
      >
        <span
          @click="changePage(pageNumber)"
        >{{ pageNumber }}</span>
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

<style lang="scss" scoped>
  @import '../assets/css/utils.scss';

  .movie-page {
    display: block;
    width: 100%;

    .page-numbers {
      @include flexDisplay($content: center);
      width: 100%;
      margin-top: 50px;
      list-style: none;

      li {

        span {
          padding: 10px;
          cursor: pointer;
        }
      }

      .current {
        color: blue;
      }

      .first{
        display: block !important;

        &::after {
        content:'...'
      }
      }

      .last {
        display: block !important;

        &::before {
          content:'...'
        }
      }

      .none {
        display: none;
      }
    }
  }
</style>
