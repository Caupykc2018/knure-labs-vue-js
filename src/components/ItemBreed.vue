<template>
  <div class="root">
    <p class="title">{{name}}</p>
    <div class="sub-breeds">
      <p v-for="item in subBreeds" :key="item">- {{item}} </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemBreed",
  props: {
    name: {
      type: String,
      require: true
    },
    subBreeds: {
      type: Array,
      require: true,
    }
  }
}
</script>

<style scoped>
.root {
  padding: 5px 10px;
  border: 1px solid lightgray;
}

.sub-breeds {
  margin-left: 10px;
  margin-top: 5px;
}

.title {
  font-size: 20px;
}
</style>
