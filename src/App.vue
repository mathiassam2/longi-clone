<template>
  <!-- navbar -->
  <longinav></longinav>
  <!-- navbar end -->
  
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
  height: 100vh;
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

#main-container{
    margin-top: 4rem;
    margin-left: 20rem;
    padding: 2rem;
}

@media (max-width: 1000px) {
  #main-container {
    margin-top: 4rem;
    margin-left: auto;
    margin-right: auto;
    padding: 2rem;
  }
}
</style>
