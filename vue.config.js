module.exports = {
    devServer: {
      port: 8080,
      liveReload: false,
      // hot: false,
    },
    css: {
      loaderOptions: {
        scss: {
          prependData: `
            @import "@/assets/scss/_common.scss";
            @import "@/assets/scss/_variables.scss";
            @import "@/assets/scss/_mixins.scss";
            @import "@/assets/scss/_placeholders.scss";
            @import "@/assets/scss/_animations.scss";
          `
        }
      }
    }
  };