const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/*",
    createProxyMiddleware({
      target: "http://144.22.220.152:3000/",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "", // remove base path
      },
    })
  );
};
