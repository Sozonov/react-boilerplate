const env = process.env.NODE_ENV || 'development';

 const cfg = require(`./webpack/${env}.config.js`);
//  console.log('cfg', cfg)
 module.exports = cfg;