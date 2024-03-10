### xss xxe csrf区别

#### XSS（跨站脚本攻击）：
本质，是把用户输入的数据当做代码执行。
第一个是用户能够控制输入
第二个是原本程序要执行的代码，拼接了用户输入的数据

##### xss类型
1. 反射：通过url传输恶意代码让客户端执行

2. 存储：通过后端返回恶意代码执行
* 例如提交一条评论，上面写入一串会被浏览器解析执行的脚本
其他用户在打开评论看到这条数据就会将这串脚本执行

3. dom：通过修改dom 注入恶意代码 
```html
<script>
    const content=`' onerror='alert()'`
</script>
<img src=`'http://server/api/${content}`/>
```

#### 预防xss 攻击
##### 对用户输入的数据进行严格验证和过滤，确保只接受有效和预期的数据。可以使用白名单过滤或正则表达式验证来限制输入内容。

##### Content Security Policy 内容安全策略
nginx配置 Content-Security-Policy: script-src 'self'; object-src 'none'; style-src cdn.example.org third-party.org; child-src https:
meta标签配置 <meta http-equiv="Content-Security-Policy" content="script-src 'self'; object-src 'none'; style-src cdn.example.org third-party.org; child-src https:">

#### CSRF（跨站请求伪造）：
1. 用户C打开浏览器，访问受信任网站A，输入用户名和密码请求登录网站A；
2. 在用户信息通过验证后，网站A产生Cookie信息并返回给浏览器，此时用户登录网站A成功，可以正常发送请求到网站A；
3. 用户未退出网站A之前，在同一浏览器中，打开一个TAB页访问网站B；
4. 网站B接收到用户请求后，返回一些攻击性代码，并发出一个请求要求访问第三方站点A；
5. 浏览器在接收到这些攻击性代码后，根据网站B的请求，在用户不知情的情况下携带Cookie信息，向网站A发出请求。网站A并不知道该请求其实是由B发起的，所以会根据用户C的Cookie信息以C的权限处理该请求，导致来自网站B的恶意代码被执行。

#### 预防csrf攻击
1. referer 请求头中设置源站点服务器地址
2. 请求头中加入 csrfToken

####  XXE（XML 外部实体攻击）：
   XXE 攻击是指攻击者利用 XML 解析器的特性，通过在 XML 中引用外部实体文件，达到读取敏感数据或执行远程请求的目的。
   预防 XXE 攻击的方法包括禁用或限制 XML 实体、过滤用户输入中的 XML 内容等。

#### xss 和 csrf区别
1、CSRF是跨站请求伪造; XSS是跨域脚本攻击。
2、CSRF需要用户先登录网站A,获取cookie; XSS不需要登录。
3、CSRF是利用网站A本身的漏洞,去请求网站A的api; XSS是向网站A注入JS代码,然后执行JS里的代码,篡改网站A的内容。（XSS利用的是站点内的信任用户，而CSRF则是通过伪装来自受信任用户的请求来利用受信任的网站。你可以这么理解CSRF攻击：攻击者盗用了你的身份，以你的名义向第三方网站发送恶意请求。）
