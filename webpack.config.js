module: {
  rules: [
    // 其他规则...
    {
      test: /\.(png|jpe?g|gif|svg|webp)$/i,
      type: "asset/resource",
      generator: {
        filename: "images/[name].[hash][ext]",
      },
    },
  ];
}
