<template>
  <nav v-if="!isLoginPage" class="navbar border-bottom border-body fixed-top navbar-expand-lg bg-white">
    <div class="container-fluid mx-4">
      <!-- Button trigger for offcanvas -->
      <button
        v-show="$route.name !== 'Home'"
        id="offcanvas-trigger"
        class="btn d-lg-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasSidebar"
        aria-controls="offcanvasSidebar"
      >
        <i class="fas fa-ellipsis-v"></i>
      </button>
      <!-- End of offcanvas button -->

      <!-- Longi logo -->
      <router-link :to="{ name: 'Home' }" class="navbar-brand ms-lg-0">
        <img src="../assets/longi-logo.svg" alt="Longi" width="80">
      </router-link>

      <!-- Navbar toggler for collapsing -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar links -->
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
export default {
  computed: {
    isLoginPage() {
      return this.$route.name === 'Login';
    }
  }
}
</script>
