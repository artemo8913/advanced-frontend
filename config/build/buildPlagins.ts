import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack, { WebpackPluginInstance } from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
  const progressPlugin = new webpack.ProgressPlugin();
  const htmlWebpackPlagin = new HtmlWebpackPlugin({ template: options.paths.html });
  const miniCssPlugin = new MiniCssExtractPlugin({
    filename: "css/[name].[contenthash:8].css",
    chunkFilename: "css/[name].[contenthash:8].css",
  });
  const definePlugin = new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(options.isDev),
  });
  const hotPlugin = new ReactRefreshWebpackPlugin();
  return [progressPlugin, htmlWebpackPlagin, miniCssPlugin, definePlugin, hotPlugin];
}
