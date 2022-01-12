<template>
  <div class="sidebar-container">
    <div class="sidebar-container__logo">
      <sl-sidebar-logo />
    </div>

    <div class="sidebar-container__menu">

      <sl-sidebar-menu-item 
        v-for="item in menu"
        :key="item.id"
        :title="item.title"
        :active="item.active"
      />

    </div>
  </div>
</template>

<script>
import slSidebarLogo from "./sl-sidebar-logo.vue";
import SlSidebarMenuItem from "./sl-sidebar-menu-item.vue";
export default {
  components: { slSidebarLogo, SlSidebarMenuItem },
  name: "sl-sidebar-container",
  data() {
    return {
      menu: [
        { id: 0, title: "Опросы", active: false },
        { id: 1, title: "Пользователи", active: true },
        { id: 2, title: "Черные списки", active: false },
        { id: 3, title: "Колл-центр", active: false },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar-container {
  width: 7%;
  height: 100vh;
  border-right: 1px solid rgba(128, 128, 128, 0.452);
  position: sticky;
  top: 0;

  &__logo {
    margin-bottom: 50px;
  }
  &__menu{
    padding-left: 5px;
    padding-right: 5px;
  }
}
</style>