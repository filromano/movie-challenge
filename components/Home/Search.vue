<template>
  <div
    :style="{height: activeHeight + 'px'}"
    :class="{'search-container': gotMovies}"
  >
    <div class="search" :class="{'move-top': gotMovies}">
      <div class="form">
        <input
          v-model="name"
          type="text"
          placeholder="Procure seu filme"
          @keyup.enter="getMovies"
        >
        <button @click="getMovies">
          Buscar
        </button>
      </div>
      <span v-show="showError" class="error-message">
        Por favor digite o nome de um filme
      </span>
      <div v-show="spinner && !gotMovies" class="spinner">
        <img src="../../assets/images/spinner.gif" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      name: '',
      activeHeight: '',
      showError: false,
      spinner: false
    }
  },
  computed: {
    ...mapGetters(['gotMovies'])
  },
  mounted () {
    this.activeHeight = window.innerHeight
  },
  methods: {
    ...mapActions(['searchMovie']),
    getMovies () {
      this.showError = false
      if (this.name !== '') {
        this.spinner = true
        this.searchMovie(this.name)
      } else {
        this.showError = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~/assets/css/utils.scss';

  .search-container {
    position: relative;
    height: 200px !important;
    transition: all 1.5s;
  }

  .search {
    position: absolute;
    top: calc(50% - 25px);
    left: calc(50% - 150px);
    margin: auto;
    width: 300px;
    height: 50px;

    .error-message {
      display: block;
      margin-top: 10px;
      color: red;
    }

    .spinner {
      @include flexDisplay($content: center);
      width: 100%;
      margin-top: 10px;
    }

    .form {
      @include flexDisplay();

      input {
        display: block;
        flex: 2;
        padding: 10px;
        margin-right: 10px;
        border: none;
        border-radius: $border-radius;
        outline: none;
        box-shadow: $boxShadow;
      }

      button {
        display: block;
        padding: 15px;
        border: none;
        border-radius: $border-radius;
        outline: none;
        background: $teal;
        box-shadow: $boxShadow;
        color: $fontWhite;
        cursor: pointer;

        &:hover {
          background: $tealHover;
        }
      }
    }
  }
</style>
