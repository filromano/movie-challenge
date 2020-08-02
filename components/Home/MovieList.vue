<template>
  <div class="movie-list">
    <ul>
      <MovieItem
        v-for="(movie, index) in paginate"
        :key="index"
        :movie="movie"
        :index="index"
      />
    </ul>
  </div>
</template>

<script>

export default {
  props: {
    paginate: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~/assets/css/utils.scss';

  .movie-list {
    display: block;
    width: 100%;
    ul {
      @include flexDisplay(
        $direction: column,
        $wrap: wrap,
        $items: center,
        $content: space-between
      );
      width: 100%;
      list-style: none;
    }

    @include respond-to('medium'){
      ul {
        flex-direction: row;
      }
    }
  }
</style>
