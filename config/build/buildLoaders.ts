import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const isDev = options.isDev;
  const babelLoader = {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-typescript"],
            plugins: [
              [
                "i18next-extract",
                {
                  locales: ["ru", "en"],
                  "keyAsDefaultValue": true
                },
              ],
              // […] your other plugins […]
            ],
          },
        },
      },
    ],
  };
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            localIdentName: isDev ? "[path][name]__[local]--[hash:base64:8]" : "[hash:base64:8]",
            auto: (resourcePath: string) => resourcePath.includes(".module."),
          },
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };
  const svgLoader = {
    test: /\.svg$/i,
    use: ["@svgr/webpack"],
  };
  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };
  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
}
