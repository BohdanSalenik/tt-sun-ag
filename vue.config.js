module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/_vars.scss";
          @import "@/scss/_mixins.scss";
        `
      }
    }
  }
};


module.exports = {
  publicPath: "/my-first-project/"
};