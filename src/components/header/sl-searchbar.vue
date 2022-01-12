<template>
  <div class="searchbar">
    <input
      placeholder="Поиск по системе"
      class="searchbar__input"
      type="text"
    />
    <div class="searchbar__search-btn">
      <img width="20" src="@/assets/img/search.png" alt="">
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.searchbar {
  height: 40px;
  min-width: 600px;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  border: 2px solid rgba(128, 128, 128, 0.2);
  &__input {
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
    font-size: 16px;
    width: 100%;
  }
  &__search-btn{
    cursor: pointer;
  }
}
</style>