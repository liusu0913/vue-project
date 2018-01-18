<template>
  <div class="container">
    <h1>主页</h1>
    {{msg}}
    <br>
    <router-link to="/l">登陆页</router-link>
    <br>
    <router-link to="/d">详情页</router-link>
    <br>
    <button @click="remove">清楚登录数据</button>
  </div>
</template>

<script>
const a = {
  template: '<p>11111</p>'
}
const b = {
  template: '<p>22222</p>'
}
export default {
  name: 'HelloWorld',
  data() {
    return this.$store.state.hello;
  },
  methods: {
    remove() {
      this.$store.commit({
        type: 'remove'
      })
    }
  }
}
</script>
<!-- scoped只在当前环境下起作用 -->
<style scoped>
  .container {

  }
</style>
