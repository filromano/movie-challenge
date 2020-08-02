<template>
  <div class="header">
    <div class="title">
      <p>{{ movie.Title }} ({{ movie.Year }}) - {{ movie.Type }}</p>
    </div>
    <div class="sub-header">
      <p>{{ movie.Rated }} | {{ movie.Released }} ({{ movie.Country }}) | {{ movie.Genre }} </p>
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
</style>
