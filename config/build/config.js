import { createRequire } from "module";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const require = createRequire(import.meta.url);

const entryPoint = file => path.join(process.cwd(), file);

const absolutePath = basePath =>
  path.resolve(__dirname, "..", "..", `app/javascript/${basePath}`);

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

const define = {
  "process.env.RAILS_ENV": "'development'",
  "process.env.NODE_DEBUG": "'development'",
  "process.env": "{}",
};

const entryPoints = {
  application: entryPoint("app/javascript/packs/application.js"),
};

const extensions = [
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
];

export { alias, define, entryPoints, extensions };
