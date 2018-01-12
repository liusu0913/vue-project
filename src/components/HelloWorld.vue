<template>
  <div class="container">
    <h1>主页</h1>
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return this.$store.state.hello;
  }
}
</script>
<!-- scoped只在当前环境下起作用 -->
<style scoped>
  .container {

  }
</style>
