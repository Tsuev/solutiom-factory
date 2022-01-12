<template>
  <!-- Не стал юзать vuex из-за того что логика была не большой -->
  <div id="app">
    <sl-sidebar-container />

    <div class="main-side-container">
      <sl-header-container />
      <sl-breadcrumbs-container />
      <router-view />
    </div>
  </div>
</template>

<script>
import SlSidebarContainer from "./components/sidebar/sl-sidebar-container.vue";
import SlHeaderContainer from "./components/header/sl-header-container.vue";
import SlBreadcrumbsContainer from './components/breadcrumbs/sl-breadcrumbs-container.vue';
export default {
  components: {
    SlSidebarContainer,
    SlHeaderContainer,
    SlBreadcrumbsContainer,
  },
};
</script>

<style lang="scss">
* {
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
}
.main-side-container {
  width: 94%;
  padding: 30px 80px;
}
</style>
