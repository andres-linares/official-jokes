import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import { VueQueryPlugin, VueQueryPluginOptions } from "@tanstack/vue-query";

const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: { queries: { staleTime: Infinity } },
  },
};

createApp(App).use(VueQueryPlugin, vueQueryPluginOptions).use(router).mount("#app");
