import { RouteRecordRaw } from "vue-router";
import FavoritesView from "../views/FavoritesView.vue";
import HomeView from "../views/HomeView.vue";
import { RouteName } from "../constants/routes";

export const routes: RouteRecordRaw[] = [
  { path: "/", name: RouteName.HOME, component: HomeView },
  { path: "/favorites", name: RouteName.FAVORITES, component: FavoritesView },
];
