<template>
  <div class="add-poll-card">
    <div class="add-poll-card__add">Добавить опрос</div>

    <div class="add-poll-card__condition">
      <span class="add-poll-card__condition__title">Условие 1</span>
      <v-select
        :options="options"
        :placeholder="'Выберите условие'"
        :clearable="false"
        v-model="postData.select"
      />
    </div>

    <div v-for="range in ranges" :key="range.id" class="add-poll-card__range">
      <div v-show="range.secondary" class="add-poll-card__range__or">или</div>
      <span class="add-poll-card__range__title">Диапазон 1</span>
      <div class="add-poll-card__range__inputs">
        <label>
          от
          <input
            v-model="postData.range.from"
            class="add-poll-card__range__inputs__input"
            type="text"
          />
        </label>
        <label>
          до
          <input
            v-model="postData.range.to"
            class="add-poll-card__range__inputs__input"
            type="text"
          />
        </label>
      </div>
    </div>

    <div class="add-poll-card__edit-btns">
      <sl-add-delete-btn @click.native="addRange" :btnType="true">
        Добавить диапазон
      </sl-add-delete-btn>
      <sl-add-delete-btn />
      <sl-add-delete-btn @click.native="fetchData" :btnType="true">
        Отправить
      </sl-add-delete-btn>
    </div>
  </div>
</template>

<script>
import slAddDeleteBtn from "./sl-add-delete-btn.vue";
export default {
  components: { slAddDeleteBtn },
  name: "sl-add-poll-card",
  data() {
    return {
      options: [
        "Возраст респондента",
        "Тип карты лояльности",
        "Статус лояльности",
      ],
      ranges: [{ id: 0, secondary: false }],
      postData: {
        range: {
          from: 0,
          to: 0,
        },
        select: "",
      },
    };
  },
  methods: {
    addRange() {
      this.ranges.push({ id: Symbol(), secondary: true });
    },
    fetchData() {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        headers: {
          "Content-Type": "application/json",
        },
        method: 'POST',
        body: JSON.stringify(this.postData),
      })
    },
  },
};
</script>

<style lang="scss">
.add-poll-card {
  padding: 30px;
  box-shadow: 0px 0px 12px 1px rgba(34, 60, 80, 0.14);
  &__add {
    font-size: 24px;
    font-weight: bold;
    color: gray;
    margin-bottom: 40px;
  }

  &__condition {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    &__title {
      color: goldenrod;
      font-size: 22px;
      font-weight: bold;
      margin-right: 140px;
    }
  }

  &__range {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    &__or {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      background: rgba(218, 165, 32, 0.178);
      margin-right: 20px;
    }
    &__title {
      margin-right: 155px;
    }
    &__inputs {
      display: flex;
      align-items: center;
      &__input {
        margin-right: 20px;
        border: 2px solid rgba(128, 128, 128, 0.438);
        width: 90px;
        height: 30px;
        border-radius: 10px;
        outline: none;
        font-size: 15px;
        padding: 5px;
      }
    }
  }

  &__edit-btns {
    display: flex;
    justify-content: center;
  }
}
.vs__dropdown-toggle {
  min-width: 800px;
  padding: 10px;
}
</style>