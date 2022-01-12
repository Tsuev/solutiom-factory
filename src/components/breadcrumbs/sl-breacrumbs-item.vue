<template>
  <div class="breacrumbs-item">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      style="margin-right: 10px; margin-left: 10px"
    >
      <line x1="1" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
    <span class="breacrumbs-item__text">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "breacrumbs-item",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
.breacrumbs-item {
  display: flex;
  align-items: center;
  &__text{
    font-size: 14px;
  }
}
</style>