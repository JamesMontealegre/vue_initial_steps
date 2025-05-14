import { createRouter, createWebHistory } from "vue-router";
import Option1 from "../components/Option1.vue";
import Option2 from "../components/Option2.vue";
import Option3 from "../components/Option3.vue";

const routes = [
  { path: "/1", component: Option1 },
  { path: "/2", component: Option2 },
  { path: "/3", component: Option3 },
  { path: "/", redirect: "/1" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
