<template>
  <div id="app">
    <div class="header">
      <div class="NavBar">
        <router-link to="/home"><img class="logo" src="./assets/logo.jpg" alt=""></router-link> 
        <nav>
          <router-link class="link-menu" to="/home">Home</router-link>
          <router-link class="link-menu" to="/video">video</router-link>
          <router-link  class="link-menu" to="/about">About</router-link>
        </nav>
        <!-- <input class="searchBar" type="search" value="recherche"> -->
      </div>
    </div>
    <router-view></router-view>
    <footerBar></footerBar>
  </div>
  
</template>


<script>
import footerBar from './components/footer.vue';
export default {
  name: 'App',
  components: {
    footerBar
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
  }
  *{
    margin: 0;
    padding: 0;
  }
  body{
      margin: 0px;
    padding: 0px;
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
   .header{
    width: 100%;
    height: 400px;
    border-radius: 0 0 280px 280px;
    background-color: green;
   }
   .NavBar{
     display: flex;
     flex-direction: row;
     justify-content: space-around;
     width: 100%;
     height: 80px;
     margin: 0px auto;
   }
   .logo{
     width: 50px;
   }
   .searchBar{
     border-radius: 10px;
   }
</style>
