const fetch=require('node-fetch');


/**
 * 代理网站爬虫
 */
class Crawler {
    
    constructor(host,...args){
        this.host=host;
        this.parser=null;
        this.args=args;
    }

    crawl(){
        // 抓取代理基准页面
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