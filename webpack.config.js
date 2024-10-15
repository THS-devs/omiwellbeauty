const path = require('path');

module.exports = (env, argv) => {
  const fileType = env.file;;

  let config = {};

  switch(fileType) {
    case 'primary':
      config = {
        entry: './assets/primary-js/index.js',
        output: {
          filename: 'primary.js',
          path: path.resolve(__dirname, 'assets'),
        },
        mode: 'production', 
        watch: true,
      };
      break;
    case 'cart':
      config = {
        entry: './assets/cart-js/index.js',
        output: {
          filename: 'cart.js',
          path: path.resolve(__dirname, 'assets'),
        },
        mode: 'production', 
        watch: true,
      };
      break;
    default:
      throw new Error('No matching configuration found.');

  }

  return config;
};