<template>
  <div>
    <List :items="allBreeds" :key-extractor="keyExtractor" :prop-item-parser="propItemParser" :click-item="clickItemAllBreeds">
      <Item />
    </List>
  </div>
</template>

<script>
import List from "@/components/List";
import Item from "@/components/Item";
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
    propItemParser(item) {
      return {
        item,
        checked: this.selectedBreeds.includes(({breed}) => item.breed === breed),
        title: item.breed
      }
    },
    addSelectedBreed({item}) {
      return () => {
        this.selectedBreeds = [...this.selectedBreeds, item];
      }
    },
    removeSelectedBreed({item}) {
      const index = this.allBreeds.findIndex(({name}) => name === item.name);

      return () => {
        this.selectedBreeds = [...this.selectedBreeds.slice(0, index), ...this.selectedBreeds.slice(index + 1)];
      }
    },
    clickItemAllBreeds({item}) {
      this.addSelectedBreed(item);
    }
  },
  components: {
    List,
    Item
  },
  async mounted() {
    this[GET_ALL_BREEDS]();
  }
}
</script>

<style scoped>

</style>
