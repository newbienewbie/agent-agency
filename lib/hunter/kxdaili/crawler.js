const fetch=require('node-fetch');
const Crawler=require('../crawler');
const parser=require('./parser');


const url=function(t=1,p=1){
    if(t<1 || t>4 || p<1 || p>10){ 
        throw new Error(`t取值为[1,4],页码p取值为[1,10]，当前i:${t}\t;p:${p}`);
    }else if (t==1 && p==1){
        return `http://www.kxdaili.com/dailiip.html`;
    }else {
        return `http://www.kxdaili.com/dailiip/${t}/${p}.html#ip`;
    }
};


/**
 * 开心代理 定向爬虫
 */
class KaixinCrawler extends  Crawler{

    constructor(){
        super(arguments);
        this.parser=parser;
    }

    crawl(){
        const urlList=[];
        for(let i=0;i<4;i++){
            for(let p=0;p<10;p++){
                urlList.push(url(i+1,p+1));
            }
        }
        return Promise.all(urlList.map(i=>{
            return this.crawlPage(i);
        })).then(list=> list.reduce(function(p,c){
            return p.concat(c);
        }));
    }

    crawlPage(url){
        return fetch(url)
            .then(resp=>resp.text())
            .then(html=>this.parser.parse(html))
            // 只提取http、https代理
            .then(list=>list.filter(i=>{
                const schema=i.schema.toLowerCase();
                return schema==="https" || schema==="http";
            }));
    }


}



module.exports=KaixinCrawler;