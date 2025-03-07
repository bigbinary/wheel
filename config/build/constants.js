import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const entryPoint = file => path.join(process.cwd(), file);

const absolutePath = basePath =>
  path.resolve(__dirname, "..", "..", `app/javascript/${basePath}`);

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

export { define, entryPoints, extensions, absolutePath };
