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
    test: /\.svg$/,
    exclude: /node_modules/,
    use: [
      "babel-loader",
      {
        loader: "react-svg-loader",
        options: {
          jsx: true, // true outputs JSX tags
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
