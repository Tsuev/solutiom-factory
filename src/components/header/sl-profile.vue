<template>
  <div class="sl-profile">
    <div class="sl-profile__avatar">
      <img
        class="sl-profile__avatar__img"
        width="55"
        src="@/assets/img/avatar.jpg"
        alt=""
      />
    </div>

    <div class="sl-profile__profile-info">
      <div class="sl-profile__profile-info__name">Alexandr C.</div>

      <div class="sl-profile__profile-info__role">Администратор</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sl-profile",
};
</script>

<style lang="scss">
.sl-profile {
  width: 200px;
  display: flex;
  align-items: center;

  &__avatar {
    &__img {
      border-radius: 100%;
    }
  }

  &__profile-info {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__name {
      font-weight: 800;
      font-size: 20px;
    }
    &__role {
      font-size: 14px;
    }
  }
}
</style>