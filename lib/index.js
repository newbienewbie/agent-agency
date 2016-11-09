const Validator=require('./validator');
const dao=require('./domain/dao');
const XiciCrawler=require('./hunter/xici/crawler');


const validator=new Validator();



function hunt(){ 
    // 西刺代理定向爬虫
    const xiciCrawler=new XiciCrawler();
    xiciCrawler.crawl()
        // 过滤掉无效的代理
        .then(list=>{
            return validator.filterList(list)
        })
        // 持久化
        .then(list=>{
            dao.persistProxyList(list);
            console.log(list);
        })
        .catch(err=>{
            console.log(err);
        });
}



function clean(){
    dao.fetchAllProxies()
        // 找出失效的代理
        .then(list=>{ 
            const flags=validator.validateList(list) 
            return list.filter((v,i)=>!flags[i]);
        })
        // 移除失效的代理
        .then(toBeRemoved=>{
            return dao.removeProxyList(toBeRemoved);
        });
}


module.exports={
    hunt,
    clean,
};

