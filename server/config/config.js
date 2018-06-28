const appConfig = require('./appConfig');

const config = {};
if(process.env.dbUrl){
  config.secret = process.env.JWT_SECRET;
  config.dbUrl = process.env.dbUrl;
  config.expireJwt = process.env.EXPIRE_JWT;
} else{
  config.secret = appConfig.JWT_SECRET;
  config.dbUrl = appConfig.dbUrl;
  config.expireJwt = appConfig.EXPIRE_JWT
}


module.exports = config;