const Sequelize=require('sequelize');
const config=require('../config/configuration');


const sequelize=new Sequelize(
    config.db.dbname,
    config.db.username,
    config.db.password,
    {
        dialect:config.db.dialect,
        host:config.db.host,
        port:config.db.port,
    }
);

const proxy=sequelize.import('./entity/proxy.js');

module.exports={
    sequelize,proxy
};