export type BuildMode = "production" | "development";

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
}
export interface BuildEnv {
  mode: BuildMode;
  port: number;
}

export interface BuildOptions {
  port: number;
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
}
