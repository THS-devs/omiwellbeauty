const path = require('path');

module.exports = (env, argv) => {
  const fileType = env.file;;

  let entryPath = '' 
  let fileName = '';

  switch(fileType) {
    case 'primary':
      entryPath = './assets/primary/js/index.js';
      fileName = 'primary-min.js';
      break;
    case 'cart':
      entryPath = './assets/cart/js/index.js';
      fileName = 'cart-min.js';   
      break;
    case 'product':
      entryPath = './assets/product/js/index.js';
      fileName = 'product-min.js';   
      break;
    default:
      throw new Error('No matching configuration found.');
  }

  return {
    entry: entryPath,
    output: {
      filename: fileName,
      path: path.resolve(__dirname, 'assets'),
    },
    mode: 'production', 
    watch: true,
    stats: {
      chunks: false,
      warnings: false,
      source: false,
      modules: false,
      assets: false
    }
  };
};