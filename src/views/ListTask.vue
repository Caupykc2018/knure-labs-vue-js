<template>
  <h1>1 лабораторная</h1>
  <div class="container-list-task">
    <router-link class="link" :to="HELLO_ROUTE">Привет незнакомец</router-link>
    <router-link class="link" :to="ALL_BREEDS_ROUTE">Все породы</router-link>
    <router-link class="link" :to="RANDOM_BREEDS_ROUTE">Случайные породы</router-link>
  </div>
  <h1>2 лабораторная</h1>
  <div class="container-list-task">
    <router-link class="link" :to="LIST_SELECTED_ROUTE">Список выбранных пород</router-link>
  </div>
</template>

<script>
import { HELLO_ROUTE, ALL_BREEDS_ROUTE, RANDOM_BREEDS_ROUTE, LIST_SELECTED_ROUTE } from '@/constants/routes'

export default {
  name: "ListTask",
  data() {
    return {
      HELLO_ROUTE,
      ALL_BREEDS_ROUTE,
      RANDOM_BREEDS_ROUTE,
      LIST_SELECTED_ROUTE,
    }
  }
}
</script>

<style scoped>
  .container-list-task {
    display: flex;
    flex-direction: column;
  }

  .link {
    text-decoration: none;
    font-size: 20px;
    margin-top: 10px;
  }
</style>
