import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  const name = to.name?.toString();

  document.title = name ? `${name} | Official Jokes` : "Official Jokes";
  next();
});
