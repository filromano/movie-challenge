<template>
  <div class="detail-page">
    <div class="header">
      <div class="title">
        <p>{{ movie.Title }} ({{ movie.Year }}) - {{ movie.Type }}</p>
      </div>
      <div class="sub-header">
        <p>{{ movie.Rated }} | {{ movie.Released }} ({{ movie.Country }}) | {{ movie.Genre }} </p>
      </div>
    </div>
    <div class="info">
      <div class="movie-poster">
        <img :src="movie.Poster !== 'N/A' ? movie.Poster : require('~/assets/images/default.png')" :alt="movie.Title">
      </div>
      <div class="details">
        <p>{{ movie.Plot }}</p>
        <div class="members">
          <p><strong>Director:</strong> {{ movie.Director }}</p>
          <p><strong>Writer:</strong> {{ movie.Writer }}</p>
          <p><strong>Actors:</strong> {{ movie.Actors }}</p>
          <p><strong>Language:</strong> {{ movie.Language }} </p>
        </div>
        <div>
          <p>{{ movie.Metascore }} <strong>Metascore</strong></p>
        </div>
        <div>
          <p>{{ movie.imdbID }}</p>
          <p>{{ movie.imdbRating }}/10 <strong>Rating</strong></p>
          <p>{{ movie.imdbVotes }} <strong>Votes</strong></p>
          <p><strong>Awards:</strong> {{ movie.Awards }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData ({ params }) {
    const { data } = await axios.get(`https://www.omdbapi.com/?apikey=c267f60c&i=${params.imdbID}`)
    return { movie: data }
  }
}
</script>

<style lang="scss">
  @import '../../assets/css/utils.scss';

  .detail-page {
    @extend .container;
    @include flexDisplay($direction: column);
    width: 100%;
    height: 80%;
    margin: 0 auto;
    padding-top: 50px;
    .header {
      .title {
        font-size: 2.5em;
      }
      .sub-header {
        margin-top: 10px;
        font-size: 1.2em;
        color: rgb(41, 41, 41);
      }
    }
    .info {
      @include flexDisplay($direction: column, $items: center);
      width: 100%;
      margin-top: 30px;

      .movie-poster {
        @include flexDisplay($items: center, $content: center);
        max-width: 100%;

        img {
          max-width: 100%
        }
      }

      .details {
        display: block;
        box-sizing: border-box;
        padding: 20px;

        .members {
          display: block;
          margin: 20px 0;
        }
      }
    }
    @include respond-to('medium') {
      width: 80%;
      .info {
        flex-direction: row;
        justify-content: center;
        margin: 30px auto 0;

        .movie-poster {
          width: 40%;
        }

        .details {
          width: 60%;
          margin-top: 0px;
        }
      }
    }
  }
</style>
