# 代理管理局



## 项目规划

* 定时抓取代理信息，经过解析、检测后，进行持久化。
* 定时检测代理池内的代理有效性，及时清理失效的代理
* 对外暴露代理池

## 代理汇总

目前的思路是从各类代理网站抓取代理信息。需要针对特定的代理网站编写定向爬虫，置于`lib/hunter/`文件夹下。

已知代理网站：

- [x] 西刺代理 : http://www.xicidaili.com/
- [x] 纯真代理 : http://www.cz88.net/proxy/index.shtml
- [ ] 开心代理 : http://www.kxdaili.com/dailiip.html