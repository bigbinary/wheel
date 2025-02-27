import { mergeDeepLeft } from "ramda";

const { build } = require("esbuild");

const projectConfigurations = require("./config/esbuild/config");

const defaultConfigurations = {};

build(mergeDeepLeft(projectConfigurations, defaultConfigurations));
