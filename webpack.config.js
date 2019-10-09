const path = require("path");
const KintonePlugin = require("@kintone/webpack-plugin-kintone-plugin");

module.exports = {
  mode: 'development',
  entry: {
    desktop: './src/script/hook/desktop.js',
    config: './src/script/hook/config.js',
    mobile: './src/script/hook/mobile.js',
  },
  output: {
    path: path.resolve(__dirname, 'src', 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new KintonePlugin({
      manifestJSONPath: './src/manifest.json',
      privateKeyPath: './private.ppk',
      pluginZipPath: './dist/plugin.zip'
    })
  ]
};
