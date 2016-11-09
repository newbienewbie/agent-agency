const domain=require('./domain');


/**
 * 持久化一个proxy
 */
function persistProxy(proxy){
    domain.proxy.upsert(proxy);
}


/**
 * 持久化一个proxy list
 */
function persistProxyList(proxyList=[]){
    return Promise.all( proxyList.map(function(proxy){
        return persistProxy(proxy);
    }));
}


/**
 * 获取所有的 proxy
 */
function fetchAllProxies(){
    return domain.proxy.findAll();
}


/**
 * 移除 proxy list
 */
function removeProxyList(proxyList=[]){
    return Promise.all(proxyList.map(i=>{
        return domain.proxy.findById(i.id)
            .then(proxy=>{
                proxy.destroy();
                console.log(`移除无效代理: ${proxy.schema.toLowerCase()}://${proxy.ip}:${proxy.port}`);
            });
    }));
}


module.exports={
    persistProxy,
    persistProxyList,
    fetchAllProxies,
    removeProxyList,
};