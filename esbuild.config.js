import { build } from "esbuild";
import { mergeDeepLeft } from "ramda";

import projectConfigurations from "./config/esbuild/config.js";

const { extensions, ...projectConfigWithoutExtensions } = projectConfigurations;

const defaultConfigurations = {
  bundle: true,
};

build(mergeDeepLeft(projectConfigWithoutExtensions, defaultConfigurations));
