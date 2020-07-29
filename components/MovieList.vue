<template>
  <div class="movie-list">
    <ul>
      <li v-for="movie in movies" :key="movie.imbID">
        <div class="movie-item">
          <img :src="movie.Poster" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['movies'])
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
            height: 100%;
            margin: 0 auto;
          }
        }
      }
    }
  }
</style>
