const path = require('path');

module.exports = (env, argv) => {
  const fileType = env.file;;

  let entryPath = '' 
  let fileName = '';

  switch(fileType) {
    case 'primary':
      entryPath = './assets/primary-js/index.js';
      fileName = 'primary.js';
      break;
    case 'cart':
      entryPath = './assets/cart-js/index.js';
      fileName = 'cart.js';   
      break;
    case 'product':
      entryPath = './assets/product-js/index.js';
      fileName = 'product.js';   
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
  };
};