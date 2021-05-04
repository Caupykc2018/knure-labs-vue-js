<template>
  <div
    class="container"
    :style="checked && styleChecked"
    v-on:click="handleClick"
  >{{item.breed}}</div>
</template>

<script>
export default {
  name: "Item",
  props: {
    item: {
      type: Object,
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
    },
    handleClick: {
      type: Function,
      default: () => null
    }
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
    cursor: pointer;
  }
</style>
