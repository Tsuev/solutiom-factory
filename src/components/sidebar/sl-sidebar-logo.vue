<template>
  <div class="sidebar-logo">
    <div class="sidebar-logo__round"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.sidebar-logo {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  &__round{
    border-radius: 100%;
    background: red;
    width: 40px;
    height: 40px;
  }
}
</style>