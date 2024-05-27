<template>
<div class="card p-3 m-2" @click="redirectToPage">
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
    max-width: 18rem;
    min-height: 12rem;
    transition: transform 0.3s ease;
    cursor: pointer;
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
    font-size: 0.95rem;
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

p {
    margin-bottom: 0;
}
</style>


  