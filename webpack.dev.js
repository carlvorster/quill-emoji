import { merge } from 'webpack-merge';
import {common} from './webpack.common.js';
import {distPath} from './helper.js'
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin'



export default merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: distPath,
    devMiddleware: {
      publicPath: distPath,
      writeToDisk: (filePath) => {
        return !(/hot-update/.test(filePath));
      },
    },
    port: 8082
  }


});
