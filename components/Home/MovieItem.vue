<template>
  <li
    class="movie-item"
    @mouseover="showTooltip(index)"
    @mouseout="hideTooltip"
  >
    <img
      :src="movie.Poster !== 'N/A'
        ? movie.Poster
        :'~/assets/images/default.png'"
      :alt="movie.Title"
    >
    <div
      class="tooltip"
      :class="{alpha: index === addIndex}"
    >
      <p>{{ movie.Title }} ({{ movie.Year }})</p>
      <n-link
        :to="{ path: `/details/${movie.imdbID}`}"
        class="more-info"
      >
        + Info
      </n-link>
    </div>
  </li>
</template>

<script>

export default {
  props: {
    movie: {
      type: Object,
      default: null
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      addIndex: null
    }
  },
  methods: {
    showTooltip (index) {
      this.addIndex = index
    },
    hideTooltip () {
      this.addIndex = null
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~/assets/css/utils.scss';

  .movie-item {
    @include flexDisplay();
    position: relative;
    width: 60%;
    height: 280px;
    margin: 0 20px 20px 0;
    padding: 20px;
    border-radius: $border-radius;
    background-color: $teal;
    box-shadow: $boxShadow;

    img {
      display: block;
      position: relative;
      max-width: 100%;
      max-height: 100%;
      margin: auto;
      z-index: 998;
    }

    .tooltip {
      @include flexDisplay(
        $direction: column,
        $content: space-between
      );
      position: absolute;
      bottom: 15px;
      right: 15px;
      width: 90%;
      height: auto;
      padding: 15px;
      border-radius: $border-radius;
      background-color: $blueAlpha;
      transition: all .7s;
      z-index: 999;
      opacity: 0;

      .more-info {
        @include button($bgColor: #5863F8);
        margin-top: 10px;
      }
    }

    .alpha {
      opacity: 1;
    }
     @include respond-to('medium'){
      width: 30%;
    }

    @include respond-to('large'){
       width: 15%;
    }
  }
</style>
