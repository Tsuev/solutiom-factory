<template>
  <button
    class="add-delete-btn"
    :class="[btnType ? 'add-delete-btn_add' : 'add-delete-btn_delete']"
  >
    <img
      width="25"
      class="add-delete-btn__ico"
      v-if="btnType"
      src="@/assets/img/plus.svg"
      alt=""
    />
    <img
      width="25"
      class="add-delete-btn__ico"
      v-else
      src="@/assets/img/trash.svg"
      alt=""
    />

    <slot></slot>

    <span v-if="!btnType">Удалить условие</span>
  </button>
</template>

<script>
export default {
  name: "sl-add-delete-btn",
  props: {
    btnType: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.add-delete-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background: transparent;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 50px;

  &__ico {
    margin-right: 10px;
  }
}
.add-delete-btn_add {
  color: green;
  border: 2px solid rgba(0, 128, 0, 0.404);
}
.add-delete-btn_delete {
  color: red;
  border: 2px solid rgba(255, 0, 0, 0.404);
}
</style>