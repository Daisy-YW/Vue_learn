<template>
  <div id="app">
    <h1>Vue-router嵌套</h1>
    <router-link :to="{path:'/home'}">Home</router-link>
    <router-link :to="{path:'/about'}">About</router-link>
    <router-view/>
    <div>
      <p>当前路径：<code>{{ $route }}</code></p>
      <p>当前参数：<code>{{ $route.params}}</code></p>
      <!-- <p>路由名称：<code>{{ $route.name }}</code></p> -->
      <!-- <p>路由查询参数：<code>{{ $route.query}}</code></p> -->
      <!-- <p>路由匹配项:{{ $route.matched}}</p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
p{
  text-align: left;
}
</style>
