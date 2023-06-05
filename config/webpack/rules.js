module.exports = [
  {
    test: /\.(d.ts)$/,
    exclude: /node_modules/,
    use: [
      "babel-loader",
      {
        loader: "ignore-loader",
      },
    ],
  },
  {
    test: /\.svg$/i,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          svgoConfig: { plugins: ["preset-default"] },
        },
      },
    ],
  },
  {
    test: /\.js$/,
    enforce: "pre",
    use: ["source-map-loader"],
  },
];
