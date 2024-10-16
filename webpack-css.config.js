const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

module.exports = (env, argv) => {
  const fileType = env.file; // Get the file type (e.g., primary or cart) from env

  if (!fileType) {
    throw new Error('Please provide a file name using --env file=<filename>.');
  }

  let entryPath = '';
  let fileName = '';

  switch (fileType) {
    case 'primary':
      entryPath = './assets/primary/scss/index.scss';
      fileName = 'primary-min.css';
      break;
    case 'cart':
      entryPath = './assets/cart/scss/index.scss';
      fileName = 'cart-min.css';
      break;
    case 'product':
      entryPath = './assets/product/scss/index.scss';
      fileName = 'product-min.css';
      break;
    default:
      throw new Error('No matching SCSS file found for the given input.');
  }

  return {
    entry: entryPath, // Entry point for the primary SCSS file
    output: {
      path: path.resolve(__dirname, 'assets'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            { loader: MiniCssExtractPlugin.loader },
            {
              loader: 'css-loader',
              options: {
                url: false
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: () => [
                    autoprefixer()
                  ],
                },
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
                implementation: require("sass"),
                webpackImporter: false,
                sassOptions: {
                  outputStyle: "compressed",
                },
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new RemoveEmptyScriptsPlugin(),
      new MiniCssExtractPlugin({
        filename: fileName, // Output CSS file
      }),
    ],
    performance: {
      maxAssetSize: 1000000,
      maxEntrypointSize: 1000000,
      hints: false,
    },
    mode: 'production',
    watch: true, // Watch in development mode
    target: 'web',
    stats: {
      chunks: false,
      warnings: false,
      source: false,
      modules: false,
      assets: false
    }
  };
};