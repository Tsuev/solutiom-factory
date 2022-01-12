<template>
  <ul class="add-poll-tab">
    <li v-for="item in tabs" :key="item.id" class="add-poll-tab__list" :class="{'add-poll-tab__list_active': item.active}">
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "add-poll-tab",
  data() {
    return {
      tabs: [
        { id: 0, title: "Параметры", active: false },
        { id: 1, title: "Вопросы", active: false },
        { id: 2, title: "Логика", active: false },
        { id: 3, title: "Условия", active: false },
        { id: 4, title: "Респонденты", active: true },
      ],
    };
  },
};
</script>

<style lang="scss">
.add-poll-tab {
  display: flex;
  border-bottom: solid 2px rgba(5, 197, 5, 0.678);

  &__list {
    list-style: none;
    margin-left: 40px;
    margin-right: 40px;
    font-size: 24px;
    padding-right: 30px;
    padding-left: 30px;
    padding-bottom: 14px;
    color: green;
    cursor: pointer;
  }
}
.add-poll-tab__list_active{
  color: black;
  font-weight: 600;
  border-bottom: 2px solid rgba(5, 197, 5, 0.678);
}
</style>