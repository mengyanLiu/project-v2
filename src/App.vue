<template>
  <div id="app">
    <!-- 路由出口 -->
    <router-view></router-view>
    <!-- <Home/> -->
    
  </div>
</template>

<script>
// import Home from './components/Home.vue' 

export default {
  name: 'App',
  components: {
    // Home
  }
}
</script>

<style lang="scss">
@import url('./assets/css/reset.css');
html, body{
  width:100%;
  height:100%;
}
#app {
  width:100%;
  height:100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
