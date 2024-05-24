<template>
  <!-- Navbar -->
  <!-- <nav v-if="!isLoginPage" class="navbar">
    <div class="navbar-left">
      <img src="./assets/longi-logo.svg" alt="logo" />
      <router-link to="/">Home</router-link>
    </div>
    <div class="navbar-right">
      <router-link :to="{ name: 'Login'}">Log out</router-link>
    </div>
  </nav> -->
  <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
  <longinav></longinav>
  <!-- Navbar -->

  <router-view/>
</template>

<script>
// --- imports --- //
import longinav from './components/longi-nav'
// --- imports --- //



export default {
  name: 'App',
  components: {
    longinav
  },
  computed: {
    isLoginPage() {
      return this.$route.name === 'Login';
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

body, #app {
  background-color: #f9f9f9;
}
*{
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}
#app {
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #131313;
  
}
.longinav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Ensure the navbar is above other content */
}
</style>
