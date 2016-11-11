const fetch = require('node-fetch');
const HttpProxyAgent = require('http-proxy-agent');
const ProxyInfo=require('./proxy');


function defaultCheckFn(resp){
    const ok=resp.ok;
    const html=resp.text();
    return ok && !! html;
};


/**
 * 检测代理是否有效的验证器
 */
class Validator {

    /**
     * @param base :基准URL
     * @param timeout: 堆基准URL发起请求的超时设置
     * @param check: 有效性检测函数，默认是检测res.ok字段和res.text()返回值
     */
    constructor(base = "https://www.baidu.com", timeout = 4000,check=defaultCheckFn) {
        this.base = base;
        this.timeout = timeout;
        this.check=check;
    }

    /**
     * 检查是否是合法的代理URL
     */
    isURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return pattern.test(str);
    }

    /**
     * @param proxy : ProxyInfo 或者 string 类型
     * @return Promise<boolean>
     */
    validate(proxy = new ProxyInfo()) {
        
        // 将proxy 转化为等价的字符串URL
        if (typeof proxy != 'string') {
            proxy = proxy.toUrl();
        }
        if(!this.isURL(proxy)){
            return Promise.resolve(false);
        }
        const agent = new HttpProxyAgent(proxy);
        return fetch(this.base, {
            timeout: this.timeout,
            agent: agent,
        })
        // 检测通过则true，其他情况统统返回false
        .then(resp=> Promise.resolve(this.check(resp)) )
        .catch(err => Promise.resolve(false) );
    }


    /**
     * @param list: Array<string> 表示一个代理字符串组成的数组
     * @return Promise<Array<boolean>> ,由一系列 true/false 标志组成的数组,表示对应位置的代理是否有效
     */
    validateList(list) {
        if(list.length==0){
            return Promise.resolve([]);
        }
        return Promise.all(list.map(i => {
            return this.validate(i);
        }));
    }

    /**
     * @param Array<string> 表示一个代理字符串组成的数组
     * @return Promise<Array<Proxy>> ,返回有效的代理数组
     */
    filterList(list) {
        return this.validateList(list)
            .then(flags => list.filter((v, i) => flags[i]));
    }
}



module.exports = Validator;