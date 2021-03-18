<template>
  <div>
    <h3>Случайные породы</h3>
    <div>
      <MenuRandomBreeds />
      <ItemBreed v-for="(breed, index) in allBreeds" :key="breed.breed + index" :name="breed.breed" :subBreeds="breed.subBreeds" />
    </div>
  </div>
</template>

<script>
import ItemBreed from "@/components/ItemBreed";
import MenuRandomBreeds from "@/components/MenuRandomBreeds";
import { mapGetters, mapMutations } from 'vuex';
import { CLEAR_BREEDS } from "@/constants/mutations";

export default {
  name: "RandomBreeds",
  components: {
    ItemBreed,
    MenuRandomBreeds
  },
  computed: mapGetters(['allBreeds']),
  methods: {
    ...mapMutations([CLEAR_BREEDS])
  },
  async mounted() {
    this[CLEAR_BREEDS]();
  }
}
</script>

<style scoped>

</style>
