import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  js.configs.all,
  ...pluginVue.configs["flat/recommended"],
  eslintConfigPrettier,
];
