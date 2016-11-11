const assert=require('assert');
const Crawler=require('../../../lib/hunter/kxdaili/crawler');


describe('测试开心代理 crawler.js',function(){

    it('#crawl()',function(done){
        this.timeout(20000);
        const crawler=new Crawler();
        crawler.crawl()
            .then(list=>{
                assert.ok(Array.isArray(list),"爬虫解析的数据必须是ProxyInfo数组");
                assert.ok(list.length>0,"解析的数组长度必须大于1");
                list.forEach(i=>{
                    assert.ok(i.schema,"数组的每个元素必须都有schema属性");
                    assert.ok(i.ip,"数组的每个元素必须都有ip属性");
                    assert.ok(i.port,"数组的每个元素必须都有port属性");
                }); 
            })
            .then(done,done)
            .catch(done);
    });
});