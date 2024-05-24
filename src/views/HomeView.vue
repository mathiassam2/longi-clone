<template>
  <div class="home-content">
    <div class="card">
      <div class="header">
        <div class="image"></div>
        <div>
          <p class="name">Environment, Health, and Safety (EHS)</p>
        </div>
      </div>
      <p class="message">
        Quality Policy • EHS Policy • EHS Training Assessment
      </p>
    </div>

    <div class="card">
      <div class="header">
        <div class="image"></div>
        <div>
          <p class="name">Human Resources and Employee Management</p>
        </div>
      </div>
      <p class="message">
        HR Service System • Time Attendance • Employee Services
      </p>
    </div>

    <div class="card">
      <div class="header">
        <div class="image"></div>
        <div>
          <p class="name">IT and Support Systems</p>
        </div>
      </div>
      <p class="message">
        IT-HelpDesk • Password • Application Installation
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {}
}
</script>

<style scoped>
.home-content {
  display: flex; /* Added display flex */
  flex-wrap: wrap; /* Allow flex items to wrap */
  justify-content: center; /* Center items horizontally */
  align-items: center; /* Center items vertically */
  margin-top: 10px;
  padding: 2rem;
}

.card {
  background-color: #fff;
  padding: 1.5rem; /* Reduced padding */
  max-width: 280px; /* Decreased max-width */
  border-radius: 10px;
  box-shadow: 0 20px 30px -20px rgba(5, 5, 5, 0.24);
  margin-right: 20px; /* Added margin between cards */
  margin-bottom: 20px; /* Added margin between cards */
}

.header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.header .image {
  height: 3rem; /* Decreased image size */
  width: 3rem; /* Decreased image size */
  border-radius: 9999px;
  object-fit: cover;
  background-color: #e60012;
  flex-shrink: 0;
}

.name {
  margin-top: 0.25rem;
  font-size: 1rem; /* Decreased font size */
  line-height: 1.5rem; /* Decreased line height */
  font-weight: 600;
  color: rgba(55, 65, 81, 1);
  flex-grow: 1;
  word-break: break-word;
}

.message {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  margin-top: 0.75rem; /* Decreased margin */
  color: rgba(107, 114, 128, 1);
}
</style>