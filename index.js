const agency=require('./lib/index');

//定时抓取
setInterval(agency.hunt('xici'),60*60*1000);
setInterval(agency.hunt('cz88'),1*60*1000);

// 定时清理
agency.clean();
setInterval(agency.clean,1*60*1000);


