const agency=require('./lib/index');

const INCREASE_INTERVAL=60*1000;
setInterval(agency.hunt,INCREASE_INTERVAL);

// 定时清理
const CLEAN_INTERVAL=30*1000;
setInterval(agency.clean,CLEAN_INTERVAL);

