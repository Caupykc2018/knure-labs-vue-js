<template>
  <div>
    <h3>Все породы</h3>
    <div>
      <ItemBreed v-for="breed in allBreeds" :key="breed.breed" :name="breed.breed" :subBreeds="breed.subBreeds" />
    </div>
  </div>
</template>

<script>
  import ItemBreed from "@/components/ItemBreed";
  import { mapGetters, mapActions } from 'vuex';
  import { GET_ALL_BREEDS } from "@/constants/actions";

  export default {
    name: "AllBreeds",
    components: {
      ItemBreed
    },
    computed: mapGetters(['allBreeds']),
    methods: mapActions([GET_ALL_BREEDS]),
    async mounted() {
      this[GET_ALL_BREEDS]();
    }
  }
</script>

<style scoped>

</style>
