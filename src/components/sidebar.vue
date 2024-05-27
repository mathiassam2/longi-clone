<template>
    <div class="bg-light border-end" id="sidebar-wrapper" style="padding-top: 6rem">
      <div class="sidebar-heading border-bottom bg-light text-center">
        <i :class="headerIcon"></i>
        <h3 class="sidebar-title text-left mt-2">{{ title }}</h3>
      </div>
      <div class="list-group list-group-flush">
        <template v-for="(link, index) in links" :key="index">
          <router-link
            v-if="!link.dropdown"
            class="list-group-item list-group-item-action bg-light p-3"
            aria-current="page"
            :to="{ name: link.name }"
            >{{ link.text }}</router-link
          >
          <div v-else class="bg-light p-3">
            <div class="dropdown">
              <a
                class="dropdown-toggle list-group-item list-group-item-action bg-light"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ link.text }}
              </a>
              <ul class="dropdown-menu">
                <li v-for="(dropdownLink, index) in link.dropdown" :key="index">
                  <router-link
                    class="dropdown-item"
                    aria-current="page"
                    :to="{ name: dropdownLink.name }"
                    >{{ dropdownLink.text }}</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </template>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
    props: {
      title: {
        type: String,
        required: true,
      },
      headerIcon: {
        type: String,
        required: true,
      },
      links: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  #sidebar-wrapper {
    position: fixed;
    height: 100vh;
    width: 20rem;
  }
  .sidebar-heading i {
    font-size: 3rem;
    color: #e60012;
  }
  </style>