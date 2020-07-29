<template>
  <div class="search">
    <input type="text" placeholder="Procure seu filme">
    <button>Buscar</button>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .search {
    display: flex;
    width: 500px;
    margin: auto;

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
