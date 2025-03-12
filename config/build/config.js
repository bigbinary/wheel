import { createRequire } from "module";
import path from "path";

import { absolutePath } from "./constants.js";

const require = createRequire(import.meta.url);

const alias = {
  images: path.resolve(process.cwd(), "app/assets/images"),
  crypto: require.resolve("crypto-browserify"),
  path: require.resolve("path-browserify"),
  buffer: require.resolve("buffer"),
  stream: require.resolve("stream-browserify"),
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
};

export { alias };
