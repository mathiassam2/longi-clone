<template>
  <div>
    <div
      class="offcanvas offcanvas-start"
      tabindex="-1"
      id="offcanvasSidebar"
      aria-labelledby="offcanvasSidebarLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasSidebarLabel">
          <i :class="headerIcon"></i>
          {{ title }}
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div class="list-group list-group-flush">
          <template v-for="(link, index) in links" :key="index">
            <router-link
              v-if="!link.dropdown"
              class="list-group-item list-group-item-action p-3"
              aria-current="page"
              :to="{ name: link.name }"
              @click="closeOffcanvas"
              >{{ link.text }}</router-link
            >
            <div v-else class="p-3">
              <div class="dropdown">
                <a
                  class="dropdown-toggle list-group-item list-group-item-action"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {{ link.text }}
                </a>
                <ul class="dropdown-menu w-100">
                  <li v-for="(dropdownLink, index) in link.dropdown" :key="index">
                    <router-link
                      class="dropdown-item"
                      aria-current="page"
                      :to="{ name: dropdownLink.name }"
                      @click="closeOffcanvas"
                      >{{ dropdownLink.text }}</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

    <!-- Sidebar -->
    <div class="bg-light border-end d-none d-lg-block" id="sidebar-wrapper" style="padding-top: 6rem">
      <div class="sidebar-heading border-bottom bg-light text-center">
        <i :class="headerIcon"></i>
        <h3 class="sidebar-title text-left mt-3">{{ title }}</h3>
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
              <ul class="dropdown-menu w-100">
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
  methods: {
    closeOffcanvas() {
      const offcanvasEl = document.getElementById('offcanvasSidebar');
      const bsOffcanvas = new bootstrap.Offcanvas(offcanvasEl);
      bsOffcanvas.hide();
    },
  },
};
</script>

<style scoped>
#offcanvasSidebarLabel i {
  color: #e60012;
}
#sidebar-wrapper {
  position: fixed;
  height: 100vh;
  width: 20rem;
}

.sidebar-heading i {
  font-size: 3rem;
  color: #e60012;
}

@media (max-width: 1000px) {
  #sidebar-wrapper {
    display: none;
  }
}
</style>