<template>
  <div>
    <h3 v-if="title">{{title}}</h3>
    <h3 v->Ничего</h3>
    <div class="container">
      <Item
        v-for="(item, index) in items"
        :item="item"
        :checked="checked(item)"
        :key="keyExtractor(item, index)"
        :handle-click="clickItem(item, checked(item))"
        :style-checked="styleChecked"
      />
    </div>
  </div>
</template>

<script>
import Item from "@/components/Item";
export default {
  name: "List",
  components: {Item},
  props: {
    title: {
      type: String
    },
    items: {
      type: Array,
      require: true
    },
    keyExtractor: {
      type: Function,
      default: (item, index) => index
    },
    checked: {
      type: Function,
      default: () => false
    },
    styleChecked: {
      type: Object,
      default: () => ({
        backgroundColor: 'blue'
      })
    },
    clickItem: {
      type: Function,
      default: () => null
    }
  }
}
</script>

<style scoped>
  .container {
    width: 150px;
    display: flex;
    flex-direction: column;
  }
</style>
