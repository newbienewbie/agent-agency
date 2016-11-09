const domain=require('../../lib/domain/domain');


describe("测试 domain.js",function(){

    it("测试数据库认证",function(done){
        domain.sequelize.authenticate()
            .then(done,done)
            .catch(done);
    });
});