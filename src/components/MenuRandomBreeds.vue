<template>
  <div class="container">
    <div class="container-buttons">
      <button
          v-on:click="addBreeds"
          class="button"
      >
        Добавить породы +{{countGetRandomBreeds}}
      </button>
      <button
          v-on:click="swapRandomMany"
          v-bind:style="{ visibility: visibleButtonSwap }"
          class="button-swap button"
      >
        Перемешать породы {{countSwap}} раз
      </button>
      <button
          v-on:click="removeRandom"
          v-bind:style="{ visibility: visibleButtonRemove }"
          class="button"
      >
        Удалить случайную породу
      </button>
    </div>
    <div class="container-counter">
      <label for="count-add-breeds" class="label">Количество добавления пород</label>
      <input id="count-add-breeds" type="number" v-model="countGetRandomBreeds" min="1" v-on:keypress="handleKeyPress">
    </div>
    <div class="container-counter">
      <label for="count-swap-breeds" class="label">Количество перетасовок</label>
      <input id="count-swap-breeds" type="number" v-model="countSwap" min="1" v-on:keypress="handleKeyPress">
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex';
import { GET_RANDOM_BREEDS } from "@/constants/actions";
import { REMOVE_BREED, SWAP_BREEDS } from "@/constants/mutations";
import { getRandomInt } from "@/utils";

export default {
  name: "MenuRandomBreeds",
  data() {
    return {
      countGetRandomBreeds: 1,
      countSwap: 1,
    }
  },
  computed: {
    ...mapGetters(['countBreeds']),
    visibleButtonSwap() {
      return this.countBreeds > 1 ? 'visible': 'hidden';
    },
    visibleButtonRemove() {
      return this.countBreeds ? 'visible': 'hidden';
    }
  },
  methods: {
    ...mapMutations([REMOVE_BREED, SWAP_BREEDS]),
    ...mapActions([GET_RANDOM_BREEDS]),
    addBreeds() {
      this[GET_RANDOM_BREEDS](this.countGetRandomBreeds);
    },
    swapRandom() {
      const getRandomIntOnRangeBreeds = () => getRandomInt(this.countBreeds);
      const firstIndex = getRandomIntOnRangeBreeds();
      let secondIndex = getRandomIntOnRangeBreeds();

      while (firstIndex === secondIndex) {
        secondIndex = getRandomIntOnRangeBreeds();
      }

      this[SWAP_BREEDS]({ firstIndex, secondIndex });
    },
    swapRandomMany() {
      for (let i = 0; i < this.countSwap; i++) {
        this.swapRandom();
      }
    },
    removeRandom() {
      const randomIndex = getRandomInt(this.countBreeds);

      this[REMOVE_BREED]({index: randomIndex});
    },
    handleKeyPress(event) {
      event.preventDefault();
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    margin: 10px;
  }

  .container-buttons {
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
  }

  .container-counter {
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
  }

  .label {
    margin-right: 5px;
  }

  .button {
    padding: 5px;
  }

  .button-swap {
    margin: 0 5px;
  }
</style>
