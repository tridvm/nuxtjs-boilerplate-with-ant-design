<template>
  <footer class="d-flex flex-column justify-content-center align-items-center p-3">
    <span>NuxtJS Boilerplate with Ant Design</span>
    <span>Made with
      <a-icon type="heart" style="color: red" theme="filled" /> and
      <a-icon type="fire" style="color: orange" theme="filled" /></span>
  </footer>
</template>

<style scoped>
@import url("./style.scss");
</style>

<script>
export default {
  name: 'BaseFooter',
  props: {}
}
</script>
