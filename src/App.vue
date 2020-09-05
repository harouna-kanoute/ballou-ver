<template>
  <div id="app">
    <router-link class="link-menu" to="/home">Home</router-link>
    <router-link  class="link-menu" to="/about">About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .link-menu{
    padding: 10px;
    text-decoration: none;
    font-size: 1em;
    font-weight: bold;
    color: black;
  }
   .link-menu:hover{
      background : #30336b;
      color: white;
   }
</style>
