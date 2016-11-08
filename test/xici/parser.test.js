const assert = require('assert');
const fetch = require('node-fetch');
const parser = require('../../lib/xici/parser.js');


describe('测试西刺代理网站的 parser.js', function () {
    describe("#parse()", function () {
        it('从服务器抓取最新的响应并解析', function (done) {
            const host = 'http://www.xicidaili.com/';
            fetch(host)
                .then(resp => resp.text())
                .then(html => parser.parse(html))
                .then(list => {
                    assert.ok(Array.isArray(list), "list 应该是个数组");
                    assert.ok(list.length > 0, "list 长度必然大于0");
                    list.forEach((v, i) => {
                        assert.ok(list[i].schema, "schema 必然非空");
                        assert.ok(list[i].ip, "ip 必然非空");
                        assert.ok(list[i].port, "port 必然非空");
                    });
                })
                .then(done, done)
                .catch(done);
        });
    });

});