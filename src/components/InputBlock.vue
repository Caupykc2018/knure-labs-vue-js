<template>
  <input type="text" v-model="value" />
  <p>Привет {{value ? value : 'незнакомец'}}</p>
</template>

<script>
export default {
  name: "InputBlock",
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style scoped>

</style>
