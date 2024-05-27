<template>
<div class="d-flex">
    <Sidebar
        :title="sidebarTitle"
        :headerIcon="'fas fa-shield-alt'"
        :links="sidebarLinks"
    ></Sidebar>
    <div id="main-container" class="container-fluid p-3">
        <!-- main content start -->
        <h3>EHS</h3>
        <h3>EHS</h3>
        <h3>EHS</h3>
        <h3>EHS</h3>
        <h3>EHS</h3>
        <!-- main content end -->
    </div>
</div>
</template>

<script>
import Sidebar from '../../components/sidebar.vue';

export default {
name: 'EhsView',
components: {
Sidebar,
},
data() {
return {
    sidebarTitle: 'EHS',
};
},
computed: {
    //side bar json formatting
    sidebarLinks() {
        return [
        { text: 'Home', name: 'Home' },
        { text: 'Log out', name: 'Login' },
        {
            text: 'Dropdown links',
            dropdown: [
                { text: 'Home', name: 'Home' },
                { text: 'Log out', name: 'Login' },
            ],
        },
        ];
    },
},
};
</script>