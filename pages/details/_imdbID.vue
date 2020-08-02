<template>
  <div v-if="movie" class="detail-page">
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
          <p><strong>Diretor:</strong> {{ movie.Director }}</p>
          <p><strong>Escritores:</strong> {{ movie.Writer }}</p>
          <p><strong>Atores:</strong> {{ movie.Actors }}</p>
          <p><strong>Idiomas:</strong> {{ movie.Language }} </p>
        </div>
        <div class="meta-score">
          <p>{{ movie.Metascore }} <strong>Metascore</strong></p>
        </div>
        <div class="imdb-info">
          <p><strong>imdbID:</strong> {{ movie.imdbID }}</p>
          <p>{{ movie.imdbRating }}/10 <strong>Nota</strong></p>
          <p>{{ movie.imdbVotes }} <strong>Votos</strong></p>
        </div>
        <div>
          <p><strong>Prêmios:</strong> {{ movie.Awards }}</p>
        </div>
        <button class="back" @click="$router.go(-1)">
          Voltar
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  async asyncData ({ store, params, error }) {
    const data = await store.dispatch('getMovieDetails', params.imdbID)
    if (data.Title !== undefined) {
      return { movie: data }
    } else if (data.Response === 'False') {
      error({ statusCode: 404, message: 'Filme não encontrado' })
    }
  },
  data () {
    return {
      movie: false
    }
  },
  created () {
    if (this.statusCode === 404) {
      this.$router.push('/')
    }
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

        .meta-score {
          margin-bottom: 10px;
        }

        .imdb-info {
          margin-bottom: 10px;
        }
      }

      .back {
        @include button($bgColor: #5863F8);
        width: 200px;
        margin-top: 20px;
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
