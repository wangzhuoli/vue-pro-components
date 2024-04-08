const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.devtool(
      process.env.NODE_ENV === "production" ? false : "source-map"
    );
  },
  configureWebpack: {
    plugins: [
      AutoImport.default({
        resolvers: [ElementPlusResolver()],
      }),
      Components.default({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
});
