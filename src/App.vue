<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <img alt="Vue logo" src="./assets/main_img/title.png">-->
    <Img_generator msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Img_generator from './components/img_generator.vue'

export default {
  name: 'app',
  components: {
    Img_generator
  }
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
</style>
