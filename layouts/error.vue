<template>
  <div class="error-page">
    <h1>Desculpe pelo transtorno</h1>
    <p>{{ error.message }}</p>
    <n-link class="home-btn" to="/">
      Home
    </n-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss">
  @import '~/assets/css/utils.scss';

  .error-page {
    @include flexDisplay($direction: column, $items: center);

    .home-btn {
      @include button($bgColor: $tealHover);
      width: 250px;
      margin-top: 30px;
    }
  }
</style>
