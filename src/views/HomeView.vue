<template>
  <div class="home-content px-5">
    <h1 class="title">PORTAL</h1>
    <div class="card-container">
      <homecard title="Environment, Health, and Safety (EHS)"
                message="Quality Policy • EHS Policy • EHS Training Assessment"
                icon="fas fa-shield-alt"
                redirect-route="/ehs" />

      <homecard title="Human Resources and Employee Management"
                message="HR Service System • Time Attendance • Employee Services"
                icon="fas fa-user"
                redirect-route="/hr" />

      <homecard title="IT and Support Systems"
                message="IT-HelpDesk • Password • Application Installation"
                icon="fas fa-laptop"
                redirect-route="/it" />

      <homecard title="Inventory and Asset Management"
                message="Checklists • Plant Inventory • Vehicle Registration"
                icon="fas fa-warehouse"
                redirect-route="/inventory" />

      <homecard title="Training and Development"
                message="Training and Development"
                icon="fas fa-chalkboard-teacher"
                redirect-route="/training" />
      
      <homecard title="Environment, Health, and Safety (EHS)"
                message="Quality Policy • EHS Policy • EHS Training Assessment"
                icon="fas fa-shield-alt"
                redirect-route="/ehs" />

      <homecard title="Human Resources and Employee Management"
                message="HR Service System • Time Attendance • Employee Services"
                icon="fas fa-user"
                redirect-route="/hr" />

      <homecard title="IT and Support Systems"
                message="IT-HelpDesk • Password • Application Installation"
                icon="fas fa-laptop"
                redirect-route="/it" />

      <homecard title="Inventory and Asset Management"
                message="Checklists • Plant Inventory • Vehicle Registration"
                icon="fas fa-warehouse"
                redirect-route="/inventory" />

      <homecard title="Training and Development"
                message="Training and Development"
                icon="fas fa-chalkboard-teacher"
                redirect-route="/training" />
    </div>
  </div>
</template>

<script>
import homecard from '../components/home-card.vue';

export default {
  name: 'HomeView',
  components: {
    homecard
  }
}
</script>

<style scoped>
.title {
  color: #e60012;
  margin-top: 100px;
  font-size: 3rem;
  letter-spacing: 5px;
}
.home-content {
  text-align: center;
}
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 2rem;
}
</style>
