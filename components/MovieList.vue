<template>
  <div class="movie-list">
    <ul>
      <li
        v-for="(movie, index) in paginate"
        :key="index"
        class="movie-item"
        @mouseover="showTooltip(index)"
        @mouseout="hideTooltip"
      >
        <img :src="movie.Poster !== 'N/A' ? movie.Poster : require('~/assets/images/default.png')" :alt="movie.Title">
        <div class="tooltip" :class="{alpha: index === addIndex}">
          <p><strong>Título:</strong> {{ movie.Title }}</p>
          <button> + Info</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    paginate: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      addIndex: null
    }
  },
  computed: {
    ...mapState(['movies'])
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

      .movie-item {
        position: relative;
        display: block;
        box-sizing: border-box;
        width: 15%;
        height: 280px;
        margin: 0 20px 20px 0;
        padding: 20px;

          img {
            display: block;
            position: relative;
            max-width: 100%;
            max-height: 100%;
            margin: auto;
            z-index: 998;
          }

          .tooltip {
            position: absolute;
            box-sizing: border-box;
            top: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
            height: 100%;
            padding: 15px;
            background-color: #d05353e7;
            z-index: 999;
            opacity: 0;

            p {
              font-size: 1.2em;
            }

            button {
              display: block;
              padding: 10px 0;
              border: none;
              border-radius: 15px;
              outline: none;
              background-color: #E58F65;
              font-size: 1.2em;
              color: #FFFFFF;
              cursor: pointer;
            }
          }

          .alpha {
            opacity: 1;
          }
        }
      }
    }
</style>
