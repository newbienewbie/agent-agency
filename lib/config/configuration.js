const defaultConfig=require('./config.default.json');

let env="dev";
const envConfig=require(`./config.${env}.json`);


const config=Object.assign({},defaultConfig,envConfig);

module.exports=config;