const fetch=require('node-fetch');
const parser=require('./parser');
const Validator=require('../validator');


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
        this.validator=new Validator();
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
            }))
            // 过滤掉无效的代理
            .then(list=>{
                return this.validator.filterList(list)
            })
            // 持久化
            .then(list=>{
                //todo: .then(list=>persisenceService.persist())
                console.log(list);
            })
            .catch(err=>{
                console.log(err);
            });
    }

}


module.exports=Crawler;