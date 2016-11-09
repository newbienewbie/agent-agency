const fetch=require('node-fetch');
const parser=require('./parser');
const Crawler=require('../crawler');


// 西刺代理
const base='http://www.xicidaili.com/';


/**
 * 西刺代理首页爬虫
 */
class XiciCrawler extends Crawler{
    
    constructor(host=base,...args){
        super(arguments);
        this.host=host;
        this.args=args;
        this.parser=parser;
    }


}


module.exports=XiciCrawler;