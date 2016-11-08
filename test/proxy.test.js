const Proxy=require('../lib/proxy');
const assert=require('assert');


describe("测试 proxy.js",function(){
    describe("#toString()",function(){
        it("默认情况下，返回的应该是个本机网址",function (done) {
            const proxy=new Proxy();
            assert.equal(proxy.toString(),"http://localhost:80");
            done();
        });
        it("返回的总应该是相应URL",function (done) {
            const proxy=new Proxy("https","8.8.8.8","123");
            assert.equal(proxy.toString(),"https://8.8.8.8:123");
            done();
        });
    })
});