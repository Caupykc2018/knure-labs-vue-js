import { createRouter, createWebHistory } from 'vue-router'
import ListTask from "@/views/ListTask";
import Hello from "@/views/Hello";
import AllBreeds from "@/views/AllBreeds";
import RandomBreeds from "@/views/RandomBreeds";
import ListSelectedBreeds from "@/views/ListSelectedBreeds";
import {
  ALL_BREEDS_ROUTE,
  HELLO_ROUTE,
  HOME_ROUTE,
  LIST_SELECTED_ROUTE,
  RANDOM_BREEDS_ROUTE
} from "@/constants/routes";

const routes = [
  {
    path: HOME_ROUTE,
    name: 'Home',
    component: ListTask
  },
  {
    path: HELLO_ROUTE,
    name: 'Hello',
    component: Hello,
  },
  {
    path: ALL_BREEDS_ROUTE,
    name: 'AllBreeds',
    component: AllBreeds,
  },
  {
    path: RANDOM_BREEDS_ROUTE,
    name: 'RandomBreeds',
    component: RandomBreeds
  },
  {
    path: LIST_SELECTED_ROUTE,
    name: 'ListSelectedBreeds',
    component: ListSelectedBreeds
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
