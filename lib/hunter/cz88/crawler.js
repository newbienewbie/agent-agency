const fetch=require('node-fetch');
const Crawler=require('../crawler');
const parser=require('./parser');

const url=(i)=>{
    const home="http://www.cz88.net/proxy/";
    if(i<1 || i> 10){ throw new Error("CZ88公布的代理恰好是10页，必须为1~10中间的数据")}
    if(i==1){ 
        return home ;
    }else{
        return `http://www.cz88.net/proxy/http_${i}.shtml`;
    }
};
        

class Cz88Crawler extends Crawler{

    constructor(host,...args){
        super(arguments);
        this.host=host;
        this.args=args;
        this.parser=parser;
    }

    crawl(){
        const pages=Array.from(Array(10),(v,i)=>i+1)
        return Promise.all(pages.map(i=>{
            return this.crawlPage(i);
        })).then(array=>{
            return array.reduce(function(p,c){
                return p.concat(c);
            },[]);
        });
    }

    crawlPage(i=1){
        return fetch(url(i))
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


module.exports=Cz88Crawler;