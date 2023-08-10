const path = require("path");

const absolutePath = basePath =>
  path.resolve(__dirname, "..", "..", `app/javascript/${basePath}`);

module.exports = {
  alias: {
    apis: absolutePath("src/apis"),
    common: absolutePath("src/common"),
    components: absolutePath("src/components"),
    constants: absolutePath("src/constants"),
    contexts: absolutePath("src/contexts"),
    reducers: absolutePath("src/reducers"),
    neetoui: "@bigbinary/neetoui",
    neetoicons: "@bigbinary/neeto-icons",
    neetomolecules: "@bigbinary/neeto-molecules",
    utils: absolutePath("src/utils"),
  },
  extensions: [
    ".ts",
    ".mjs",
    ".js",
    ".sass",
    ".scss",
    ".css",
    ".module.sass",
    ".module.scss",
    ".module.css",
    ".png",
    ".svg",
    ".gif",
    ".jpeg",
    ".jpg",
  ],
  fallback: {
    assert: require.resolve("assert/"),
    buffer: require.resolve("buffer/"),
    crypto: require.resolve("crypto-browserify"),
    fs: false,
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    os: require.resolve("os-browserify/browser"),
    path: require.resolve("path-browserify"),
    stream: require.resolve("stream-browserify"),
    tty: require.resolve("tty-browserify"),
    util: require.resolve("util/"),
    url: require.resolve("url/"),
    zlib: require.resolve("browserify-zlib"),
  },
};
