import webpack from "webpack";
import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const mode = env.mode || "development";
  const isDev = mode === "development";
  const port = env.port || 3000;
  const config: webpack.Configuration = buildWebpackConfig({
    port,
    mode,
    isDev: isDev,
    paths: {
      build: path.resolve(__dirname, "build"),
      entry: path.resolve(__dirname, "src", "index.tsx"),
      html: path.resolve(__dirname, "public", "index.html"),
    },
  });
  return config;
};
