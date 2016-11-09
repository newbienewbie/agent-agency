const fetch=require('node-fetch');
const parser=require('./parser');


// 西刺代理
const base='http://www.xicidaili.com/';


/**
 * 西刺代理首页爬虫
 */
class Crawler {
    
    constructor(host=base,...args){
        this.host=host;
        this.args=args;
        this.parser=parser;
    }

    crawl(){
        // 抓取西刺代理首页
        return fetch(this.host)
            .then(resp=>resp.text())
            // 解析响应的html，得到代理列表
            .then(resp=>this.parser.parse(resp))
            // 只提取http、https代理
            .then(list=>list.filter(i=>{
                const schema=i.schema.toLowerCase();
                return schema==="https" || schema==="http";
            }));
    }

}


module.exports=Crawler;