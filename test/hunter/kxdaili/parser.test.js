const assert=require('assert');
const parser=require('../../../lib/hunter/kxdaili/parser');
const fetch = require('node-fetch');



describe('测试开心代理 parser.js',function(){

    it('测试预设的固定的html',function(done){
        const html=`
            <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
            <html>
            <head>
            <title>免费代理IP - 大陆高匿代理IP - 开心代理IP平台 | 时刻在更新的专业代理IP平台</title>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="Keywords" content="代理IP|开心代理IP平台|买代理IP|提取代理IP|高质量代理IP|免费代理IP|国内ip代理|IP代理|最新代理IP|今日可用代理IP">
            <meta name="Description" content="开心代理IP平台是国内领先的代理IP平台，时时刻刻更新代理IP，代理IP有效率高达90%，每天流水10-25万代理IP，深受广大用户喜爱的代理IP平台，提取代理IP就上开心代理IP平台。">

            <script language="javascript" type="text/javascript" src="/public/view/default/js/jquery-1.9.1.min.js"></script>
            <link href="/public/view/default/images/favicon2.ico" rel="shortcut icon" type="image/vnd.microsoft.icon" /><link href="/public/view/default/css/css.css" rel="stylesheet" type="text/css">
            </head>
            <body id="nav_btn01">
            <div class="header"><dl class="header">
            <dd><span><a href="/login.html" class="">登陆</a></span><a href="/reg.html" class="">注册</a></dd>
            </dl></div>
            <!--end头文件-->
            <div class="header_c">
            <div class="header_c_w">
            <div class="logo"><a href="/"><img src="/public/view/default/images/logo.png" alt="dns"></a></div>
            <!--end标志-->
                    <div class="nav th">
                        <ul class="nav last_list">
                            <li id="nav_hover01"><a href="/">首页</a></li>
                            <li id="nav_hover02"  class="active"><a href="/dailiip.html">免费代理IP</a></li>
                            <li id="nav_hover03" ><a href="/buy.html">购买代理IP</a></li>
                            <li id="nav_hover04" ><a href="/tongji.html">代理IP统计</a></li>
                            <li id="nav_hover05" ><a href="/api.html" >API链接生成</a></li>
            <li id="nav_hover06" ><a href="/lianxi.html" >联系我们</a></li>
                                        </ul>
                    </div>
            <!--end导航-->
            </div>
            <!--end头文件宽度-->
            </div>
            <!--end头文件中-->

            <script language='javascript'>
            if (document.location.protocol=="http:") {
                //http redirect to https
                var new_url = "https://" + document.location.hostname + document.location.pathname + document.location.search;
                //document.location = new_url;
            }
            </script>
            <!-- 阴影 --><div class="header_c2 i_header_c"></div>
            <link rel="stylesheet" type="text/css" class="ui" href="/public/view/default/css/semantic.min.css">


            <div class="tab_c_box buy_tab_box" style="margin-top:40px;">
            <div class="tag_area" >
                    <a id="tag_1" class="label" href="/dailiip.html">大陆高匿代理</a> 
                    <a id="tag_2" class="label" href="/dailiip/2/1.html">大陆普匿代理</a> 
                    <a id="tag_3" class="label" href="/dailiip/3/1.html">海外高匿代理</a>
                    <a id="tag_4" class="label" href="/dailiip/4/1.html">海外普匿代理</a>
                </div>
            </div>

            <script type="text/javascript">
                $("#tag_1").addClass("active")
            $(document).ready(function() {
            });
            </script>




            <style>
            .segment th{
                color:#777!important;
            }
            .segment td{
                font-size:14px;
                height:25px;
                line-height:25px;
            }
            </style><a name="ip"></a>

            <div style="text-align:center;width:100%;margin-top:-20px;margin-bottom:0px;">
            <a href="/buy.html" class="buy_btn_my">想要更多、质量更好的代理IP，请点这里购买。</a></div>
            </div>

            <div class="tab_c_box buy_tab_box" style="margin-top:20px;">
            <table class="ui table segment" >
                        <thead>
                        <th>IP地址</th>
                        <th>端口</th>
                        <th>匿名等级</th>
                    <th>代理类型</th>
                    <th>响应时间</th>
                    <th>地理位置</th>
                    <th>最近验证时间</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>182.89.199.227</td>
                                <td>8998</td>
                                <td>高匿</td>
                        <td>HTTP</td>
                        <td>0.09 秒</td>
                        <td>广西柳州市 联通</td>
                        <td>37分41秒前</td>
                            </tr>
                    
                            <tr class="warning">
                                <td>180.213.33.79</td>
                                <td>8090</td>
                                <td>高匿</td>
                        <td>HTTP</td>
                        <td>11.11 秒</td>
                        <td>天津市 电信</td>
                        <td>29分53秒前</td>
                            </tr>
                    
                            <tr>
                                <td>183.32.104.204</td>
                                <td>8998</td>
                                <td>高匿</td>
                        <td>HTTP</td>
                        <td>0.09 秒</td>
                        <td>广东省中山市 电信</td>
                        <td>43分57秒前</td>
                            </tr>
                    
                            <tr class="warning">
                                <td>119.180.116.60</td>
                                <td>8998</td>
                                <td>高匿</td>
                        <td>HTTP</td>
                        <td>0.09 秒</td>
                        <td>山东省烟台市 联通</td>
                        <td>15分15秒前</td>
                            </tr>
                    
                            <tr>
                                <td>110.72.46.4</td>
                                <td>8123</td>
                                <td>高匿</td>
                        <td>HTTP</td>
                        <td>0.44 秒</td>
                        <td>广西贵港市 联通</td>
                        <td>43分50秒前</td>
                            </tr>
                    
                            <tr class="warning">
                                <td>182.88.228.90</td>
                                <td>8123</td>
                                <td>高匿</td>
                        <td>HTTP</td>
                        <td>6.98 秒</td>
                        <td>广西南宁市 联通</td>
                        <td>16分24秒前</td>
                            </tr>
                    
                            <tr>
                                <td>115.198.193.224</td>
                                <td>8998</td>
                                <td>高匿</td>
                        <td>HTTP</td>
                        <td>0.62 秒</td>
                        <td>浙江省杭州市 电信</td>
                        <td>29分34秒前</td>
                            </tr>
                    
                            <tr class="warning">
                                <td>123.80.77.138</td>
                                <td>8123</td>
                                <td>高匿</td>
                        <td>HTTP</td>
                        <td>0.91 秒</td>
                        <td>新疆乌鲁木齐市 铁通</td>
                        <td>28分51秒前</td>
                            </tr>
                    
                            <tr>
                                <td>27.18.2.219</td>
                                <td>8998</td>
                                <td>高匿</td>
                        <td>HTTP</td>
                        <td>0.14 秒</td>
                        <td>湖北省武汉市 电信</td>
                        <td>36分53秒前</td>
                            </tr>
                    
                            <tr class="warning">
                                <td>117.40.55.1</td>
                                <td>8998</td>
                                <td>高匿</td>
                        <td>HTTP</td>
                        <td>0.55 秒</td>
                        <td>江西省南昌市 电信</td>
                        <td>41分21秒前</td>
                            </tr>
                    
                        </tbody>
                    </table>

            <div class="page">
            1&nbsp;&nbsp;&nbsp;<a href="/dailiip/1/2.html#ip">2</a>&nbsp;&nbsp;&nbsp;<a href="/dailiip/1/3.html#ip">3</a>&nbsp;&nbsp;&nbsp;<a href="/dailiip/1/4.html#ip">4</a>&nbsp;&nbsp;&nbsp;<a href="/dailiip/1/5.html#ip">5</a>&nbsp;&nbsp;&nbsp;<a href="/dailiip/1/6.html#ip">6</a>&nbsp;&nbsp;&nbsp;<a href="/dailiip/1/7.html#ip">7</a>&nbsp;&nbsp;&nbsp;<a href="/dailiip/1/8.html#ip">8</a>&nbsp;&nbsp;&nbsp;<a href="/dailiip/1/9.html#ip">9</a>&nbsp;&nbsp;&nbsp;<a href="/dailiip/1/10.html#ip">10</a>
            </div>
            <div style="text-align:center;width:100%;margin-top:20px;">
            <a href="/buy.html" class="buy_btn_red">想要更多、质量更好的代理IP，请点这里购买。</a></div>
            </div>

            <div class="online">
            <ul class="online">
                <li class="li"><a href="http://wpa.qq.com/msgrd?v=3&uin=313412678&site=kxdaili.com&menu=yes" class="ts" target=_blank>313412678</a><a href="http://wpa.qq.com/msgrd?v=3&uin=313412678&site=kxdaili.com&menu=yes" class="o_1" target=_blank>qq</a></li>
                <!--<li class="li"><span class="ts">400-</span><a href="#" class="o_2">tel</a></li>-->
                <li class="li"><a href="http://wpa.qq.com/msgrd?v=3&uin=313412678&site=kxdaili.com&menu=yes" class="ts" target=_blank>意见建议</a><a href="http://wpa.qq.com/msgrd?v=3&uin=313412678&site=kxdaili.com&menu=yes" class="o_5" target=_blank>qq</a></li>
            <div class="yd-feedback-suggestion">
                <div class="fb-title">
                    <strong>意见反馈</strong>
                    <span class="fb-suggestion-tip">温馨提示：紧急问题请直接联系客服</span>
                </div>

                <div class="fb-close">Close</div>

                <div class="fb-suggestion-content">
                    <ul class="fb-attitudes">
                        <li value="1" class="fb-attitude-suggest fb-selected">建议</li>
                        <li value="2" class="fb-attitude-criticize">批评</li>
                        <li value="3" class="fb-attitude-praise">表扬</li>
                    </ul>
                    <form name="suggestion">
                        <textarea class="" name="content"></textarea>
                        
                        <input type="button" class="fb-input-button" name="submit" id="feed_submit" value="提交">
                        <label class="errortip"></label>
                        <input type="hidden" name="type" value="1">
                    </form>
                </div>
            </div>
                </li>
                <li class="li"><a href="#" class="o_4">top</a></li>
            </ul>
            </div>
            <!--end在线浮动工具-->


            <script type="text/javascript" src="/public/view/default/js/jquery-1.9.1.min.js"></script>
            <script type="text/javascript" src="/public/view/default/js/global.js"></script>
            <script type="text/javascript" src="/public/view/default/js/flash.js"></script>

            <!--[if lt IE 10]>
            <script type="text/javascript" src="/public/view/default/js/pie.js"></script>
            <![endif]-->
            <script language="javascript">
            $(function () {
            if (window.PIE) {
            $('.rounded').each(function () {
            PIE.attach(this);
            });
            }
            });
            </script>
            <dl class="link_th"><dd class="th">友情链接</dd></dl>
            <ul class="clear_div h_link th">
                <li>
                    <a href="https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=%E5%BC%80%E5%BF%83%E4%BB%A3%E7%90%86IP%E5%B9%B3%E5%8F%B0&rsv_pq=a527cf670000efb9&rsv_t=2bdc76YzwEEZGZGRwERsxX3%2BV5q2wxYefiPSAqpVQCAZ%2FDINTkB2pDYfYUQ&rsv_enter=1&rsv_sug3=23&rsv_sug1=2&rsv_sug2=0&inputT=5873&rsv_sug4=6133" target="_blank">百度-开心代理IP平台</a>
            <a href="http://www.ip181.com/" target="_blank">代理IP检测平台</a>

                </li>
            </ul>


            <!--end文件脚-->

            <div class="clear_div2 footer_d"><ul class="clear_div2 footer_d">
            <li>&copy;2015 KXDAILI,INC.上海云海信息科技有限公司，All right reserved.<p>
            客服QQ：313412678&nbsp;&nbsp;&nbsp;QQ交流群：585446801&nbsp;&nbsp;&nbsp;增值电信业务经营许可证号：沪B2—20140042
                    </p></li>
            </ul></div>
            <!--end文件脚下-->

            <!--[if IE 6]>
            <script type="text/javascript" src="js/DD_belatedPNG.js"></script>
            <script>
            DD_belatedPNG.fix('.png_bj');
            </script>
            <![endif]-->

            <div style="display:none"><script language="javascript" type="text/javascript" src="http://js.users.51.la/17751595.js"></script></div>
            </body>
            </html>
        `;
        const list=parser.parse(html);
        assert.ok(Array.isArray(list),"爬虫解析的数据必须是ProxyInfo数组");
        assert.ok(list.length>0,"解析的数组长度必须大于1");
        list.forEach(i=>{
            assert.ok(i.schema,"数组的每个元素必须都有schema属性");
            assert.ok(i.ip,"数组的每个元素必须都有ip属性");
            assert.ok(i.port,"数组的每个元素必须都有port属性");
        }); 
        done();
    });

    it('测试从开心代理获取后解析',function(done){
        this.timeout(2000);
        fetch(`http://www.kxdaili.com/dailiip.html`)
            .then(resp=>resp.text())
            .then(html=>parser.parse(html))
            .then(list=>{
                assert.ok(Array.isArray(list),"爬虫解析的数据必须是ProxyInfo数组");
                assert.ok(list.length>0,"解析的数组长度必须大于1");
                list.forEach(i=>{
                    assert.ok(i.schema,"数组的每个元素必须都有schema属性");
                    assert.ok(i.ip,"数组的每个元素必须都有ip属性");
                    assert.ok(i.port,"数组的每个元素必须都有port属性");
                }); 
            })
            .then(done,done)
            .catch(done);
    });
});