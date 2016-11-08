const assert=require('assert');
const Validator=require('../lib/validator');



describe('测试 validator.js',function(){

    describe("#filterList()",function(){
        
        it("无效代理应该经过过滤后应该返回空",function(done){
            this.timeout(40000);
            const validator=new Validator();
            // 过滤掉无效的代理
            const list=[
                "http://localhost:8187",
                "https://localhost:8763",
                "htps://localhost:abc",
                "https://127:abc",
                "htTps://some-proxy-here.com:8090",
            ];
            validator.filterList(list)
                .then((list)=>{
                    assert.ok(Array.isArray(list),"filterList 返回的是经过Promise包装的Array");
                    assert.ok(list.length==0,"以上列出的代理统统无效，应该全部被过滤掉");
                })
                .then(done,done)
                .catch(done);
        });

    });

    
});



