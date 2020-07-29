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
      outline: none;
      border-radius: 15px;
    }

    button {
      display: block;
      padding: 15px;
      border: none;
      border-radius: 15px;
      outline: none;
      background: #94C9A9;
      cursor: pointer;

     &:hover {
       background: #C6ECAE;
     }
    }
  }
</style>
