const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const fileType = env.file; // Get the file type (e.g., primary or cart) from env

  if (!fileType) {
    throw new Error('Please provide a file name using --env file=<filename>.');
  }

  let entryPath = '';
  let fileName = '';

  switch (fileType) {
    case 'primary':
      entryPath = './assets/primary-scss/index.scss';
      fileName = 'primary.css';
      break;

    case 'cart':
      entryPath = './assets/cart-scss/index.scss';
      fileName = 'cart.css';
      break;

    default:
      throw new Error('No matching SCSS file found for the given input.');
  }

  return {
    entry: entryPath, // Entry point for the primary SCSS file
    output: {
      path: path.resolve(__dirname, 'assets'),
    },
    module: {
      rules: [
        {
          test: /\.scss$/i, // Match SCSS files
          use: [
            MiniCssExtractPlugin.loader, // Extract CSS to a separate file
            'css-loader', // Translates CSS into CommonJS
            'sass-loader', // Compiles SCSS to CSS
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: fileName, // Output CSS file
      }),
    ],
    mode: 'production',
    watch: true, // Watch in development mode
  };
};
