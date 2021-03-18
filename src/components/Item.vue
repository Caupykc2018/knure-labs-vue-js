<template>
  <div class="container" v-on:click="$emit('click-item', {item, checked})">{{title}}</div>
</template>

<script>
export default {
  name: "Item",
  props: {
    item: {
      type: Object,
      require: true
    },
    title: {
      type: String,
      require: true
    },
    checked: {
      type: Boolean,
      default: false
    },
    styleChecked: {
      type: Object,
      default: () => ({
        backgroundColor: 'blue'
      })
    }
  },
  mounted() {
    console.log(this.title)
  }
}
</script>

<style scoped>
  .container {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid lightgray;
  }
</style>
