const appConfig = require('./appConfig');

const config = {};
if(process.env.dbUrl){
  config.secret = process.env.JWT_SECRET;
  config.dbUrl = process.env.dbUrl;
} else{
  config.secret = appConfig.JWT_SECRET;
  config.dbUrl = appConfig.dbUrl;
}
console.log('config', config);


module.exports = config;