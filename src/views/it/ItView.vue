<template>
    <div class="d-flex">
        <Sidebar
            :title="sidebarTitle"
            :headerIcon="'fa fa-desktop'"
            :links="sidebarLinks"
        ></Sidebar>
        <div class="container-fluid p-3" style="margin-top: 4rem; margin-left: 20rem;">
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
        sidebarTitle: 'IT',
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