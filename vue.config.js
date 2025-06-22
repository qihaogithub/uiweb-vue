module.exports = {
  // 其他配置...
  chainWebpack: (config) => {
    config.module
      .rule("images")
      .test(/\.(png|jpe?g|gif|svg|webp)$/i)
      .use("url-loader")
      .loader("url-loader")
      .options({
        limit: 8192,
        name: "images/[name].[hash:8].[ext]",
      });
  },
};
