<template>
  <div>
    <h3 v-if="title">{{title}}</h3>
    <div class="container">
      <slot
        v-for="(item, index) in items"
        v-bind="{
          ...propItemParser(item),
          key: keyExtractor(keyExtractor(item, index))
        }"
        v-on:click-item="clickItem"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    title: {
      type: String
    },
    clickItem: {
      type: Function,
      default: () => null
    },
    items: {
      type: Array,
      require: true
    },
    keyExtractor: {
      type: Function,
      default: (item, index) => index
    },
    propItemParser: {
      type: Function,
      default: (item) => item
    }
  }
}
</script>

<style scoped>
  .container {
    width: 200px;
    border: 1px solid black;
  }
</style>
