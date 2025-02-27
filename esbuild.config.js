import { build } from "esbuild";
import { mergeDeepLeft } from "ramda";

const projectConfigurations = require("./config/esbuild/config");

const defaultConfigurations = {};

build(mergeDeepLeft(projectConfigurations, defaultConfigurations));
