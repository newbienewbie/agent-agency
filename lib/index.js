const Validator=require('./validator');
const dao=require('./domain/dao');
const XiciCrawler=require('./hunter/xici/crawler');
const Cz88Crawler=require('./hunter/cz88/crawler');
const Proxy=require('./proxy');


const validator=new Validator();


/**
 * private,用于处理解析到的代理列表:包括过滤、持久化、异常处理
 */
function _process(list){
    // 过滤掉无效的代理
    return validator.filterList(list)
    // 持久化
    .then(list=>{
        dao.persistProxyList(list);
        console.log(list);
    })
    .catch(err=>{
        console.log(err);
    });
}



/**
 * 返回一个定向爬虫函数
 */
function hunt(site='xici'){ 
    // 西刺代理定向爬虫
    let crawl=null;
    switch(site){
        case 'xici' :
            crawl=new XiciCrawler();
            break;
        case 'cz88':
            crawl=new Cz88Crawler();
            break;
        default:
            crawl=new Cz88Crawler();
            break;
    }
    return function(){
        crawl.crawl().then((list)=>{return _process(list)});
    };
}



/**
 * 清理现有的无效代理
 */
function clean(){
    let proxyList=[];
    dao.fetchAllProxies()
        // 找出失效的代理
        .then(list=>{ 
            return validator.validateList(list) ;
        })
        .then(flags=>{
            return proxyList.filter((v,i)=>!flags[i]);
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

