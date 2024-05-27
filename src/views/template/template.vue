<template>
    <div class="d-flex">
        <Sidebar
            :title="sidebarTitle"
            :headerIcon="'fas fa-star'"
            :links="sidebarLinks"
        ></Sidebar>
        <div id="main-container" class="container-fluid p-3">
            <!-- main content start -->
            <h3>TEMPLATE TITLE</h3>
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
        sidebarTitle: 'TEMPLATE SIDEBAR',
    };
    },
    computed: {
        //side bar json formatting
        // text: link name
        // name: route name (register in router/index.js)
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