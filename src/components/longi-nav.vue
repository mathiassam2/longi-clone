<template>
<nav v-if="!isLoginPage" class="navbar border-bottom border-body fixed-top navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid mx-4">
    <a class="navbar-brand ms-lg-0" href="#">
      <img src="../assets/longi-logo.svg" alt="Longi" width="80">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link  class="nav-link active" aria-current="page" :to="{ name: 'Home'}">Home</router-link>
        <router-link class="nav-link" :to="{ name: 'Login'}">Log out</router-link>
        <!-- <a class="nav-link" href="#">Pricing</a> -->
      </div>
    </div>
  </div>
</nav>
</template>

<script>
// --- imports --- //
// --- imports --- //



export default {
  computed: {
    isLoginPage() {
      return this.$route.name === 'Login';
    }
  }
}
</script>
