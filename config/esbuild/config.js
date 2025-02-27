const path = require("path");

const entryPoint = file => path.join(process.cwd(), file);

const absolutePath = basePath =>
  path.resolve(__dirname, "..", "..", `app/javascript/${basePath}`);

module.exports = {
  entryPoints: {
    application: entryPoint("app/javascript/packs/application.js"),
  },
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
    assets: absolutePath("../assets"),
  },
  extensions: [
    ".ts",
    ".mjs",
    ".js",
    ".jsx",
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
