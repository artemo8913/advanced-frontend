import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack, { WebpackPluginInstance } from "webpack";
import { BuildPaths } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins(paths: BuildPaths): WebpackPluginInstance[] {
  const progressPlugin = new webpack.ProgressPlugin();
  const htmlWebpackPlagin = new HtmlWebpackPlugin({ template: paths.html });
  const miniCssPlugin = new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css'
  });
  return [progressPlugin, htmlWebpackPlagin, miniCssPlugin];
}
