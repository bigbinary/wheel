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
};
