const path = require("path");
// loader: require.resolve('awesome-typescript-loader'),
    // options: { configFileName: path.resolve(__dirname, './tsconfig.json') }
const TSDocgenPlugin = require("react-docgen-typescript-webpack-plugin");
// module.exports = (baseConfig, env, defaultConfig) => {
//   defaultConfig.module.rules.push({
//     test: /\.(ts|tsx)$/,
//     loader: require.resolve("awesome-typescript-loader")
//   });
//   defaultConfig.plugins.push(new TSDocgenPlugin());
//   defaultConfig.resolve.extensions.push(".ts", ".tsx", ".js");
//   return defaultConfig;
// };


module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /(node_modules|bower_components)/,
    use: [
      {
        loader: "awesome-typescript-loader",
        options: {
          transpileOnly: true,
          useBabel: true,
          babelCore: "@babel/core"
        }
      }
    ]
  });
  config.plugins.push(new TSDocgenPlugin());

  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};