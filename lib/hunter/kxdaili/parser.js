const cheerio=require('cheerio');
const ProxyInfo=require('../../proxy');


function parse(html){
    const list=[];
    const $=cheerio.load(html);
    const trs=$("table.segment tr")
    trs.each((i,v)=>{
        const tds=$("td",v);
        const ip=tds.eq(0).text();
        const port=tds.eq(1).text();
        const schema=tds.eq(3).text();
        list.push(new ProxyInfo(schema,ip,port));
    })
    return list;
}


module.exports={parse};