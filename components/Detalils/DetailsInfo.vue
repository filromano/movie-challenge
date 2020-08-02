<template>
  <div class="info">
    <div class="movie-poster">
      <img
        :src="movie.Poster !== 'N/A'
          ? movie.Poster
          : '~/assets/images/default.png'"
        :alt="movie.Title"
      >
    </div>
    <div class="details">
      <p>{{ movie.Plot }}</p>
      <div class="members">
        <p>
          <strong>Diretor:</strong> {{ movie.Director }}
        </p>
        <p>
          <strong>Escritores:</strong> {{ movie.Writer }}
        </p>
        <p>
          <strong>Atores:</strong> {{ movie.Actors }}
        </p>
        <p>
          <strong>Idiomas:</strong> {{ movie.Language }}
        </p>
      </div>
      <div class="meta-score">
        <p>
          {{ movie.Metascore }} <strong>Metascore</strong>
        </p>
      </div>
      <div class="imdb-info">
        <p>
          <strong>ID:</strong> {{ movie.imdbID }}
        </p>
        <p class="rate">
          {{ movie.imdbRating }}/10
        </p>
        <p>
          {{ movie.imdbVotes.replace(',', '.') }} <strong>Votos</strong>
        </p>
      </div>
      <div>
        <p>
          <strong>Prêmios:</strong> {{ movie.Awards }}
        </p>
      </div>
      <button class="back" @click="$router.go(-1)">
        Voltar
      </button>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    movie: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss">
  @import '~/assets/css/utils.scss';

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

        p {
          margin-bottom: 5px;
        }
      }

      .meta-score {
        margin-bottom: 10px;
      }

      .imdb-info {
        margin-bottom: 10px;

        .rate {
          position: relative;
          display: block;
          padding: 2px 0 0 20px;
          margin: 10px 0;

          &::after {
            content: url('../../assets/images/star.svg');
            position: absolute;
            top: 0;
            left: 0;
            display: block;
          }
        }
      }
    }

    .back {
      @include button($bgColor: #5863F8);
      width: 200px;
      margin-top: 20px;
    }
    @include respond-to('medium') {
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
</style>
