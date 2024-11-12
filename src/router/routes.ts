import FavoritesView from "../views/FavoritesView.vue";
import HomeView from "../views/HomeView.vue";

export const routes = [
  { path: "/", component: HomeView },
  { path: "/favorites", component: FavoritesView },
];
