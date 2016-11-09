const cheerio=require('cheerio');
const ProxyInfo=require('../../proxy');


function parse(html){
    const $=cheerio.load(html);
    const list=[];
    $('#boxright ul li')
        // 剔除首行
        .slice(1)
        // 提取每一行
        .each((i,v)=>{
            const divs=$('div',v);
            const schema='http';
            const ip=divs.eq(0).text();
            const port=divs.eq(1).text();
            const proxy= new ProxyInfo(schema,ip,port);
            list.push(proxy);
        });
    return list;
}



module.exports={parse};