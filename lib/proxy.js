/**
 * proxy interface
 * 爬虫解析器返回该类型的数组，交由验证器进行检测有效性
 */
class ProxyInfo{
    
    constructor(schema="http",ip="localhost",port="80",comefrom="",...args){
        this.schema=schema.toLowerCase();
        this.ip=ip;
        this.port=port;
        this.comefrom=comefrom;
        this.args=args;
    }

    toUrl(){
        return `${this.schema.toLowerCase()}://${this.ip}:${this.port}`;
    }
}


module.exports=ProxyInfo;