import { createRequire } from "module";
import path from "path";

const require = createRequire(import.meta.url);

const alias = {
  images: path.resolve(process.cwd(), "app/assets/images"),
  crypto: require.resolve("crypto-browserify"),
  path: require.resolve("path-browserify"),
  buffer: require.resolve("buffer"),
  stream: require.resolve("stream-browserify"),
};

const define = {
  "process.env.RAILS_ENV": "'development'",
  "process.env.NODE_DEBUG": "'development'",
  "process.env": "{}",
};

export { alias, define };
