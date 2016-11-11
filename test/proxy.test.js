const ProxyInfo=require('../lib/proxy');
const assert=require('assert');


describe("测试 proxy.js",function(){
    describe("#toUrl()",function(){
        it("默认情况下，返回的应该是个本机网址",function (done) {
            const proxy=new ProxyInfo();
            assert.equal(proxy.toUrl(),"http://localhost:80");
            done();
        });
        it("返回的总应该是相应URL",function (done) {
            const proxy=new ProxyInfo("https","8.8.8.8","123");
            assert.equal(proxy.toUrl(),"https://8.8.8.8:123");
            done();
        });
        it("返回的总应该是小写的schema",function (done) {
            const proxy=new ProxyInfo("HTTPS","8.8.8.8","123");
            assert.equal(proxy.toUrl(),"https://8.8.8.8:123");
            done();
        });
    })
});