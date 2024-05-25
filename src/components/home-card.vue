<template>
<div class="card" @click="redirectToPage">
    <div class="header">
        <div class="icon">
            <i :class="icon"></i>
        </div>
        <div>
            <p class="name">{{ title }}</p>
        </div>
    </div>
    <p class="message">{{ message }}</p>
</div>
</template>

<script>
export default {
props: {
    title: String,
    message: String,
    icon: String,
    redirectRoute: String
},
methods: {
    redirectToPage() {
    // Redirect to the specified route
    this.$router.push(this.redirectRoute);
    }
}
}
</script>

<style scoped>
.card {
    min-height: 100px; /* Adjusted height */
    background-color: #fff;
    padding: 1rem; /* Reduced padding */
    max-width: 240px; /* Reduced max-width */
    border-radius: 10px;
    box-shadow: 0 20px 30px -20px rgba(5, 5, 5, 0.24);
    margin-right: 20px;
    margin-bottom: 20px;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
}

.header {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.header .icon {
    font-size: 1.5rem;
}

.icon i {
    color: #e60012;
}

.name {
    margin-top: 0.25rem;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 600;
    color: rgba(55, 65, 81, 1);
    flex-grow: 1;
    word-break: break-word;
    text-align: left;
}

.message {
    font-size: 0.9rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    margin-top: 0.75rem;
    color: rgba(107, 114, 128, 1);
    text-align: left;
}
</style>


  