<template>
    <div class="form-container">
        <div class="logo">
            <img src="../../assets/longi-logo.svg" alt="logo" />
        </div>
        <p class="title">Welcome!</p>
        <p class="title-description">Enter your username to access portal.</p>
        <form class="form" @submit.prevent="login">
            <div class="input-group">
                <label for="username">Username</label>
                <input type="text" name="username" id="username" placeholder="" autocomplete="off">
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" placeholder="" autocomplete="off">
                <div class="forgot">
                    <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
                </div>
            </div>
            <button class="sign">Log in</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: [
                { userID: 'user1', password: '123' },
                { userID: 'user2', password: '456' },
                { userID: 'user3', password: '789' },
            ]
        }
    },
    methods: {
        login() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            console.log('Username:', username);
            console.log('Password:', password);
            this.$router.push('/');
        }
    }
}
</script>


<style scoped>
html {
    color: #131313;
}
.form-container {
  width: 320px;
  border-radius: 0.75rem;
  padding: 2rem;
  color: rgba(243, 244, 246, 1);
  margin: 0 auto; /* Centering the form horizontally */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Centering the form vertically */
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

.input-group {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.input-group label {
  display: block;
  color:#5c5c5c;
  margin-bottom: 4px;
}

.input-group input {
  width: calc(100% - 2rem);
  border-radius: 0.375rem;
  border: 1px solid #c9c9c9;
  outline: 0;
  background-color: #ececec;
  padding: 0.75rem 1rem;
  color: #131313
}


.input-group input:focus {
  border-color: #e60012;
}

.forgot {
  display: flex;
  justify-content: flex-end;
  font-size: 0.75rem;
  line-height: 1rem;
  margin: 8px 0 14px 0;
}

.forgot a,.signup a {
  color:#131313;
  text-decoration: none;
  font-size: 14px;
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
