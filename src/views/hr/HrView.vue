<template>
    <div class="d-flex">
        <Sidebar
        :title="sidebarTitle"
        :headerIcon="'fas fa-user'"
        :links="sidebarLinks"
        ></Sidebar>
        <div id="main-container" class="container-fluid p-3">
        <!-- main content start -->
        <h3>HR</h3>
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
    sidebarTitle: 'Human Resources',
    };
},
computed: {
    sidebarLinks() {
    return [
        { text: 'Home', name: 'Home' },
        { text: 'Log out', name: 'Login' },
        {
        text: 'Dropdown',
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