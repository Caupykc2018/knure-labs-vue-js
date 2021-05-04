<template>
  <h3>Выбранные породы</h3>
  <div class="container">
    <List
      :items="allBreeds"
      :key-extractor="keyExtractor"
      :click-item="(item, checked) => () => clickAllBreeds(item, checked)"
      :style-checked="{display: 'none'}"
      :checked="(item) => checkedAllBreeds(item)"
    />
    <List
      title="Выбранные породы"
      :items="selectedBreeds"
      :key-extractor="keyExtractor"
      :click-item="(item) => () => clickSelectedBreeds(item)"
    />
  </div>
</template>

<script>
import List from "@/components/List";
import {mapActions, mapGetters} from "vuex";
import {GET_ALL_BREEDS} from "@/constants/actions";

export default {
  name: "ListSelectedBreeds",
  data() {
    return {
      selectedBreeds: []
    }
  },
  computed: mapGetters(['allBreeds']),
  methods: {
    ...mapActions([GET_ALL_BREEDS]),
    keyExtractor(item) {
      return item.breed
    },
    addSelectedBreed(item) {
      this.selectedBreeds = [...this.selectedBreeds, item];
    },
    removeSelectedBreed(item) {
      const index = this.allBreeds.findIndex(({name}) => name === item.name);

      this.selectedBreeds = [...this.selectedBreeds.slice(0, index), ...this.selectedBreeds.slice(index + 1)];
    },
    checkedAllBreeds(item) {
      return this.selectedBreeds.some(({breed}) => item.breed === breed);
    },
    clickAllBreeds(item, checked) {
      if (!checked) {
        this.addSelectedBreed(item);
      }
    },
    clickSelectedBreeds(item) {
      this.removeSelectedBreed(item)
    }
  },
  components: {
    List,
  },
  async mounted() {
    this[GET_ALL_BREEDS]();
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
    margin-top: 10px;
  }
</style>
