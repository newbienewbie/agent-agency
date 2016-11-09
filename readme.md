# 代理管理局



## 项目规划

* 定时抓取代理信息，经过解析、检测后，进行持久化。目前的思路是是针对不同的代理网站编写定向爬虫，比如`lib/xici/`文件夹针对的是西刺代理网站。
* 定时检测代理池内的代理有效性，及时清理失效的代理
* 对外暴露代理池

## 代理汇总

目前已知代理：

- [x] 西刺代理 : http://www.xicidaili.com/
- [ ] 纯真代理 : http://www.cz88.net/proxy/index.shtml
- [ ] 开心代理 : http://www.kxdaili.com/dailiip.html