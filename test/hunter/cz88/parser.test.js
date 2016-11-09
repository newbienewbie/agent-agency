const assert = require('assert');
const fetch = require('node-fetch');
const parser = require('../../../lib/hunter/cz88/parser');


describe('测试CZ88代理网站的 parser.js', function () {
    describe("#parse()", function () {
        it('从服务器抓取最新的响应并解析', function (done) {
            const host = 'http://www.cz88.net/proxy/';
            fetch(host)
                .then(resp => resp.text())
                .then(html => parser.parse(html))
                .then(list => {
                    assert.ok(Array.isArray(list), "list 应该是个数组");
                    assert.ok(list.length > 0, "list 长度必然大于0");
                    list.forEach((v, i) => {
                        assert.ok(list[i].schema, "schema 必然非空");
                        assert.ok(list[i].ip, "ip 必然非空");
                        const port=list[i].port;
                        assert.ok(port, "port 必然非空");
                        assert.ok(port%1==0, "port 必然为整");
                    });
                })
                .then(done, done)
                .catch(done);
        });
    });

});