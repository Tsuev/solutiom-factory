<template>
  <div class="header-container">
    <sl-searchbar />
    <sl-profile />
  </div>
</template>

<script>
import slSearchbar from './sl-searchbar.vue'
import slProfile from './sl-profile.vue'
export default {
  name: "sl-header-container",
  components: { slSearchbar, slProfile },
}
</script>

<style>
.header-container{
  display: flex;
  justify-content: space-between;
}
</style>