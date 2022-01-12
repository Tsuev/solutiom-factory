<template>
  <div class="add-poll">
    <sl-add-poll-tab />
    <sl-add-poll-card />
  </div>
</template>

<script>
import SlAddPollCard from '../components/add-poll/sl-add-poll-card.vue';
import slAddPollTab from '../components/add-poll/sl-add-poll-tab.vue';
export default {
  components: { slAddPollTab, SlAddPollCard },
  name: "sl-add-poll",
};
</script>

<style lang="scss">
</style>