<template>
  <div class="movie-list">
    <ul>
      <li v-for="movie in movies" :key="movie.imbID">
        <div class="movie-item">
          <p>{{ movie.Title }}</p>
          <img :src="movie.Poster !== 'N/A' ? movie.Poster : require('~/assets/images/default.png')" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: {
    movies: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss">
  .movie-list {
    display: block;
    width: 100%;
    padding-top: 150px;
    ul {
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      width: 100%;
      list-style: none;

      li {
        width: 15%;
        height: 280px;
        margin: 0 20px 20px 0;

        .movie-item {
          display: block;
          width: 100%;
          height: 100%;
          overflow: hidden;
          margin: 0 auto;

          img {
            display: block;
            max-width: 100%;
            max-height: 100%;
            margin: 0 auto;
          }
        }
      }
    }
  }
</style>
