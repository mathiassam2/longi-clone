<template>
  <transition name="fade">
    <erroralert
      v-if="showAlert"
      :show-alert="showAlert"
      :alert-message="alertMessage"
      @close="showAlert = false"
    ></erroralert>
  </transition>
  <div class="container">
    <div class="form-container">
        <div class="logo">
            <img src="../../assets/longi-logo.svg" alt="logo" />
        </div>
        <p class="title">Welcome!</p>
        <p class="title-description">Enter your username to access portal.</p>
        <form class="form" @submit.prevent="login">
          <label for="username" class="form-label text-secondary">Username</label>
          <input id="username" name="username" class="form-control form-control-lg mb-3" type="text" autocomplete="off">

          <label for="password" class="form-label text-secondary">Password</label>
          <input type="password" id="password" class="form-control form-control-lg mb-3" autocomplete="off">

            <!-- <div class="input-group">
                <label for="username">Username</label>
                <input type="text" name="username" id="username" placeholder="" autocomplete="off">
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" placeholder="" autocomplete="off">
                <div class="forgot">
                    <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
                </div>
            </div> -->
            <button class="sign">Log in</button>
        </form>
    </div>
  </div>
</template>

<script>
import erroralert from '../../components/error-alert.vue';

export default {
  name: 'HomeView',
  components: {
    erroralert
  },
    data() {
        return {
            users: [
                { userID: 'user1', password: '123' },
                { userID: 'user2', password: '456' },
                { userID: 'user3', password: '789' },
            ],
            showAlert: false,
            alertMessage: 'Invalid credentials',
        }
    },
    methods: {
      login() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const user = this.users.find(
          (user) => user.userID === username && user.password === password
        );

        if (user) {
          console.log('Logged in as:', user.userID);
          this.isLoggedIn = true;
          this.$router.push('/');
        } else {
          console.log('Invalid credentials');
          this.showAlert = true; // Show the alert
        }
      },
    }
}
</script>


<style scoped>
html {
    color: #131313;
}
.container{
  padding-top: 5rem;
  display: flex;
  height: 100vh;
  justify-content: center;
}
.form-container {
  /* width: 320px; */
  border-radius: 0.75rem;
  padding: 2rem;
  color: rgba(243, 244, 246, 1);
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-bottom: 3rem;
}

.logo img {
  max-width: 100%;
  max-height: 100%;
}

.title {
  /* text-align: center; */
  font-size: 1.5rem;
  font-weight: bold;
  color: #131313;
  margin-bottom: 0;
}

.title-description {
  margin-top: 0;
  font-size: 0.9rem;
  color: #5c5c5c;
}


.form {
  margin-top: 1.5rem;
}


.sign {
  display: block;
  width: 100%;
  background-color: rgb(231, 48, 48);
  padding: 0.75rem;
  text-align: center;
  color: #f9f9f9;
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
}

.signup {
  text-align: center;
  font-size: 0.75rem;
  line-height: 1rem;
}

</style>
