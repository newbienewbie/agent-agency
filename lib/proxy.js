/**
 * proxy interface
 * 爬虫解析器返回该类型的数组，交由验证器进行检测有效性
 */
class Proxy{
    
    constructor(schema="http",ip="localhost",port="80"){
        this.schema=schema;
        this.ip=ip;
        this.port=port;
    }

    toString(){
        return `${this.schema}://${this.ip}:${this.port}`;
    }
}


module.exports=Proxy;