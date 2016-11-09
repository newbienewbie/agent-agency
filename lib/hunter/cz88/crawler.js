const fetch=require('node-fetch');
const Crawler=require('../crawler');
const parser=require('./parser');

const base="http://www.cz88.net/proxy/";
        

class Cz88Crawler extends Crawler{

    constructor(host=base,...args){
        super(arguments);
        this.host=host;
        this.args=args;
        this.parser=parser;
    }


}


module.exports=Cz88Crawler;