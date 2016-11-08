const Crawler=require('../../lib/xici/crawler');


describe('测试西刺代理网站的 crawler.js',function(){
    

    const crawler=new Crawler();
    this.timeout(20000);
    it("#crawl()",function(done){
        crawler.crawl()
            .then(done,done)
            .catch(done);
    });
});