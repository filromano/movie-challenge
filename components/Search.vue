<template>
  <div class="search">
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
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      name: ''
    }
  },
  methods: {
    ...mapActions(['searchMovie']),
    getMovies () {
      this.searchMovie(this.name)
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/css/utils.scss';

  .search {
    position: absolute;
    top: calc(50% - 25px);
    left: calc(50% - 150px);
    display: flex;
    margin: auto;
    width: 300px;
    height: 50px;
    transition: all 1.5s;

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
</style>
