<template>
  <div v-if="movie" class="detail-page">
    <DetailsHeader :movie="movie" />
    <DetailsInfo :movie="movie" />
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
    } else {
      error({ message: data.message })
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
  @import '~/assets/css/utils.scss';

  .detail-page {
    @extend .container;
    @include flexDisplay($direction: column);
    width: 100%;
    height: 80%;
    margin: 0 auto;
    padding-top: 50px;

    @include respond-to('medium') {
      width: 80%;
    }
  }
</style>
