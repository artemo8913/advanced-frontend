import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlagins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  return {
    mode: options.mode,
    entry: options.paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: options.paths.build,
      clean: true,
    },
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    plugins: buildPlugins(options.paths),
    devtool: options.isDev ? "inline-source-map" : undefined,
    devServer: options.isDev ? buildDevServer(options) : undefined
  };
}
