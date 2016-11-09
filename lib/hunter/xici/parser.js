const cheerio=require('cheerio');
const Proxy=require('../../proxy');


/**
 * @param html string  html字符串
 * @return Array<Proxy>
 * 解析西刺代理首页响应的html并返回代理数组
 */
function parse(html){
    const $=cheerio.load(html);
    const list=[];
    $("table#ip_list tr")
        // 找出代理信息所在的行
        .filter(function(i,v){
            let className=$(this).attr('class');
            return className=="odd" || className=="";
        })
        // 逐行解析
        .each(function(i,v){
            const tds=$('td',v);
            const schema=tds.eq(5).text();
            const ip=tds.eq(1).text();
            const port=tds.eq(2).text();
            const proxy=new Proxy(schema,ip,port);
            list.push(proxy);
        });
    return list;
}


module.exports={parse};