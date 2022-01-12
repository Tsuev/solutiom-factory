<template>
  <div class="breadcrumbs-container">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>

    <sl-breacrumbs-item 
      v-for="item in breadcrumbs"
      :key="item.id"
      :title="item.title"
    />
  </div>
</template>

<script>
import slBreacrumbsItem from './sl-breacrumbs-item.vue';
export default {
  components: { slBreacrumbsItem },
  name: "breadcrumbs-container",
  data() {
    return {
      breadcrumbs: [
        { id: 0, title: "Опросы" },
        { id: 1, title: "Добавить опрос" },
      ],
    };
  },
};
</script>

<style lang="scss">
.breadcrumbs-container{
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 40px;
}
</style>