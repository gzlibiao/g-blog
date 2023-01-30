import{_ as s,o as n,c as a,a as l}from"./app.f360d8c4.js";const y=JSON.parse('{"title":"\u5E38\u7528 sql","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5E38\u7528 sql","slug":"\u5E38\u7528-sql"},{"level":2,"title":"Mysql explain \u7684\u4F7F\u7528\u548C\u5206\u6790","slug":"mysql-explain-\u7684\u4F7F\u7528\u548C\u5206\u6790"},{"level":2,"title":"\u6570\u636E\u6027\u80FD\u6392\u67E5","slug":"\u6570\u636E\u6027\u80FD\u6392\u67E5"},{"level":2,"title":"mpysql \u6570\u636E\u5907\u4EFD","slug":"mpysql-\u6570\u636E\u5907\u4EFD"}],"relativePath":"docs/mysql/mysql.md"}'),p={name:"docs/mysql/mysql.md"},e=l(`<h2 id="\u5E38\u7528-sql" tabindex="-1">\u5E38\u7528 sql <a class="header-anchor" href="#\u5E38\u7528-sql" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">update \u8868\u540D set \u6307\u5B9A\u5B57\u6BB5 = replace(\u6307\u5B9A\u5B57\u6BB5,&#39;\u8981\u66FF\u6362\u7684\u5B57\u7B26\u4E32&#39;,&#39;\u60F3\u8981\u7684\u5B57\u7B26\u4E32&#39;) where \u6761\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">(\u4E8C)\u591A\u8868\u67E5\u8BE2\uFF1A\u5B50\u67E5\u8BE2\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6CE8\u610F\u4E00\uFF1A\u5B50\u67E5\u8BE2\u7684\u5199\u6CD5\u66F4\u7B26\u5408\u4EBA\u7684\u601D\u7EF4\u65B9\u5F0F\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6CE8\u610F\u4E8C\uFF1A\u5B50\u67E5\u8BE2\u5C5E\u4E8E\u9AD8\u7EA7\u67E5\u8BE2\uFF0C\u53EF\u4EE5\u5BF9\u67E5\u8BE2\u6548\u7387\u8FDB\u884C\u4F18\u5316\u3002\u5EF6\u8FDF\u52A0\u8F7D\u3002\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\u67E5\u8BE2\u5C0F\u5218\u6240\u5728\u516C\u53F8\uFF08\u591A\u8868\u94FE\u63A5\u7684\u5199\u6CD5\uFF09\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT c.name\xA0\u516C\u53F8\u540D\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">FROM company.c,member m\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">WHERE c.id = m.comid AND m.name = &#39;\u5C0F\u5218&#39;\xA0\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">(1)SELECT\xA0\u5B50\u67E5\u8BE2\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT (SELECT name FROM company WHERE id = comid)\xA0\u516C\u53F8\u540D\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">FROM member\xA0\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">WHERE name = &#39;\u5C0F\u5218&#39;\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">(2)WHERE\xA0\u5B50\u67E5\u8BE2\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\u67E5\u8BE2\u5C0F\u5218\u548C\u5C0F\u738B\u7684\u516C\u53F8\u540D\xA0\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT name\xA0\u516C\u53F8\u540D\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">FROM company\xA0\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">WHERE id IN (SELECT comid FROM member WHERE name = &#39;\u5C0F\u5218&#39; OR name = &#39;\u5C0F\u738B&#39;)\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">(3)from\u5B50\u67E5\u8BE2\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6CE8\u610F\uFF1A\u4E3B\u8981\u7528\u4E8E3\u5F20\u8868\u4EE5\u4E0A\u7684\u94FE\u63A5\u67E5\u8BE2\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4E3E\u4F8B\uFF1A\u6709A\uFF0CB\uFF0CC\u4E09\u5F20\u8868\u3002\u5148\u67E5\u8BE2AB\u4E24\u79CD\u8868\uFF0C\u518D\u7528\u67E5\u8BE2\u7ED3\u679C\u548CC\u8868\u94FE\u63A5\u67E5\u8BE2\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\u67E5\u8BE2\u5C0F\u5218\u6240\u5728\u516C\u53F8\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6CE8\u610F\uFF1ASELECT\u5B50\u67E5\u8BE2\u548CWHERE\u5B50\u67E5\u8BE2\u662F\u628A\u67E5\u8BE2\u7684\u7ED3\u679C\u5F53\u4F5C\u6570\u636E\u3002\u800CFROM\u5B50\u67E5\u8BE2\u662F\u628A\u67E5\u8BE2\u7ED3\u679C\u5F53\u6210\u8868\u6765\u770B\u5F85\u3002\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT c.name\xA0\u516C\u53F8\u540D\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">FROM (SELECT name n,comid c FROM member WHERE name = &#39;\u5C0F\u5218&#39;) t1,company c\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">WHERE t1.c = .c.id\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\uFF081\uFF09\u6DFB\u52A0\uFF0C\u4FEE\u6539\uFF0C\u5220\u9664\u8FD9\u4E09\u4E2A\u64CD\u4F5C\u53EA\u7528\u4E8E\u5355\u8868\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\uFF082\uFF09\u591A\u8868\u7684\u7EA7\u8054\u5220\u9664\uFF0C\u591A\u8868\u7684\u7EA7\u8054\u66F4\u65B0\u6709\u65F6\u4F1A\u51FA\u73B0\u3002\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\uFF083\uFF09\u591A\u8868\u67E5\u8BE2\u7684\u7B56\u7565\u6709\u4E24\u79CD\uFF1A\u591A\u8868\u8054\u67E5\uFF0C\u5B50\u67E5\u8BE2\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\u521B\u5EFA\u4E00\u4E2A\u516C\u53F8\u8868\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">CREATE TABLE company(\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">id INT PRIMARY KEY ,\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">name VARCHAR(255) NOT NULL\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">);\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">INSERT INTO company VALUES(1,&#39;IBM&#39;)\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">INSERT INTO company VALUES(1,&#39;HP&#39;)\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\u521B\u5EFA\u4E00\u4E2A\u5458\u5DE5\u8868\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">CREATE TABLE member(\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">id INT(2) PRIMARY KEY ,\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">name VARCHAT(255) NOT NULL,\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">sal DOUBLE(10,2),\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">comid INT\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">);\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">INSERT INTO member VALUES(101,&#39;\u5C0F\u674E&#39;,3000,1)\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">INSERT INTO member VALUES(102,&#39;\u5C0F\u738B&#39;,4000,1)\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">INSERT INTO member VALUES(103,&#39;\u5C0F\u5218&#39;,5000,2)\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">INSERT INTO member VALUES(104,&#39;\u5C0F\u521A&#39;,6000,2)\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">(\u4E00)\u591A\u8868\u67E5\u8BE2\uFF1A\u540C\u65F6\u67E5\u8BE2\u591A\u5F20\u8868\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">(1)\u7B1B\u5361\u5C14\u79EF\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT *\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">FROM conpany,member\xA0\xA0\xA0\xA0\xA0\xA0//\u67E5\u8BE2\u7ED3\u679C\u662F\u4E24\u8868\u76F8\u4E58\uFF0C\u7B1B\u5361\u5C14\u79EF\uFF08A\u8868\u6709m\u6761\u6570\u636E\uFF0CB\u8868\u6709n\u6761\u6570\u636E\uFF0C\u7ED3\u679Cm*n\u6761\uFF09\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">(2)\u5982\u679C\u8981\u67E5\u8BE2n\u5F20\u8868\uFF0C\u5FC5\u987B\u8981\u6307\u5B9An-1\u4E2A\u516C\u5171\u5217\u7684\u6761\u4EF6\uFF0C\u5426\u5219\u4F1A\u4EA7\u751F\u7B1B\u5361\u5C14\u79EF\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT *\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">FROM conpany c,member m\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">WHERE c.id = m.comid\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">(3)\u67E5\u8BE2IBM\u7684\u5458\u5DE5\u4FE1\u606F\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT m.*\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">FROM company c,member m\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">WHERE c.id = m.comid AND c.name = &#39;IBM&#39;\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">(4)\u5C0F\u5218\u7684\u516C\u53F8\u4FE1\u606F\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT c.name\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">FROM company.c,member m\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">WHERE c.id = m.comid AND m.name = &#39;\u5C0F\u5218&#39;\xA0\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">(5)\u5DE6\u8FDE\u63A5\uFF0C\u4EE5\u5DE6\u8868\u4E3A\u4E3B\u8868\uFF0C\u5DE6\u8868\u4E2D\u6EE1\u8DB3\u6761\u4EF6\u7684\u8BB0\u5F55\u4F1A\u67E5\u8BE2\u51FA\u6765\uFF0C\u4E0D\u6EE1\u8DB3\u7684\u6761\u4EF6\u4E5F\u4F1A\u88AB\u67E5\u51FA\u6765\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT c.name\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">FROM company c LEFT JOIN member m ON c.id = m.comid\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">(6)\u53F3\u8FDE\u63A5\uFF0C\u4EE5\u53F3\u8868\u4E3A\u4E3B\u8868\uFF0C\u53F3\u8868\u4E2D\u6EE1\u8DB3\u6761\u4EF6\u7684\u8BB0\u5F55\u4F1A\u67E5\u8BE2\u51FA\u6765\uFF0C\u4E0D\u6EE1\u8DB3\u7684\u6761\u4EF6\u4E5F\u4F1A\u88AB\u67E5\u51FA\u6765\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT c.name\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">FROM member m RIGHT JOIN company c ON c.id = m.comid\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">(7)\u5185\u8FDE\u63A5\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT c.name\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">FROM member m\xA0INNER JOIN company.c ON c.id = m.comid\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br></div></div><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">(1)SELECT\u5B50\u8BED\u53E5\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM person;\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT name,dep FROM person\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT name n,dep d FROM person\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">(2)FROM\u5B50\u8BED\u53E5\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM person;\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM person t;\xA0\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT t.id ,t.&#39;name&#39; FROM person t;\xA0\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">(3)WHERE\u5B50\u8BED\u53E5\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6BD4\u8F83\u8FD0\u7B97\u7B26\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM job WHERE age &gt; 20\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM job WHERE age &gt;= 20\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM job WHERE age &lt; 20\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM job WHERE age &lt;= 20\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM job WHERE age = 20\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM job WHERE age != 20\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\u903B\u8F91\u8FD0\u7B97\u7B26\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM job WHERE age &gt; 20 AND age &lt; 25\xA0 AND\xA0 sex = &#39;\u7537&#39;\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM job WHERE positon = &#39;\u7F8E\u5DE5&#39; or positon = &#39;\u5B9E\u4E60\u751F&#39;\xA0\xA0\xA0//@1\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6570\u5B57\u533A\u95F4\u8FD0\u7B97\u7B26\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM job WHERE age BETWEEN 18 AND 19\xA0\xA0\xA0\xA0//\u5305\u62EC18\u548C19\xA0\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM job WHERE age NOT BETWEEN 18 AND 19\xA0\xA0\xA0//\u903B\u8F91\u975E\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\u96C6\u5408\u8FD0\u7B97\u7B26\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM job WHERE positon in (&#39;\u7F8E\u5DE5&#39;,&#39;\u5B9E\u4E60\u751F&#39;)\xA0\xA0\xA0\xA0\xA0//\u548C@1\u7B49\u4EF7\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM job WHERE age in (18,20,27)\xA0\xA0\xA0\xA0\xA0\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6A21\u7CCA\u67E5\u8BE2\u8FD0\u7B97\u7B26\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5339\u914D\u7B26\uFF1A_\xA0\u4E0B\u5212\u7EBF\xA0\u5339\u914D\u4E00\u4E2A\u4EFB\u610F\u5B57\u7B26\xA0\xA0 %\xA0\u767E\u5206\u53F7\xA0\u5339\u914D\u96F6\u4E2A\u6216\u8005\u591A\u4E2A\u4EFB\u610F\u5B57\u7B26\u3002\u6CE8\u610Flike\u6A21\u7CCA\u67E5\u8BE2\u53EA\u80FD\u7528\u4E8E\u5B57\u7B26\u7C7B\u578B\u3002\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM job WHERE name LIKE &#39;\u90ED_&#39;\xA0\xA0\xA0\xA0\xA0\xA0//\u90ED\u540D\uFF0C\u90ED\u5927\uFF0C\u90ED\u594E\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM job WHERE name LIKE &#39;\u90ED%&#39;\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0//\u90ED\u540D\uFF0C\u90ED\u5927\uFF0C\u90ED\u594E\uFF0C\u90ED\u98DE\u7FD4\uFF0C\u90ED\u5927\u725B\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM job WHERE name LIKE &#39;&amp;\u90ED%&#39;\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0//\u90ED\u540D\uFF0C\u90ED\u5927\uFF0C\u90ED\u594E\uFF0C\u90ED\u98DE\u7FD4\uFF0C\u90ED\u5927\u725B\uFF0C\u5C0F\u90ED\uFF0C\u3002\u3002\u3002\u5E26\u5C31\u7B97\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\u7A7ANULL\xA0\xA0\u89E3\u91CA\xA0\uFF1A\u8868\u793A\u7A7A\u7684\u610F\u601D\uFF0C\u672A\u77E5\uFF0C\u6CA1\u6709\u3002\u4E0D\u662F0\uFF0C\u4E0D\u662F\u7A7A\u5B57\u7B26\u4E32\u3002\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM person WHERE dep IS NULL\xA0\xA0\xA0\xA0//\u6CE8\u610F\uFF1A\u5224\u65AD\u7A7A\u5FC5\u987B\u7528is\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM person WHERE dep IS NOT NULL\xA0\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">(4)GROUP BY\xA0\u5206\u7EC4\u5B50\u8BED\u53E5\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5206\u7EC4\u7684\u7406\u89E3\uFF1A\u76F8\u540C\u7684\u662F\u4E00\u7EC4\u3002\u6309\u7167\u7EC4\u6765\u663E\u793A\u6570\u636E\u3002\u51E0\u7EC4\u5C31\u663E\u793A\u51E0\u6761\u8BB0\u5F55\u3002\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5206\u7EC4\u7684\u6CE8\u610F\u4E8B\u9879\uFF1A\u5206\u7EC4\u7684\u65F6\u5019\uFF0CSELECT\u663E\u793A\u7684\u5B57\u6BB5\u6709\u7EA6\u675F\u6761\u4EF6\u30021\u662F\u5206\u7EC4\u7684\u7EC4\u540D\uFF0C2\u662F\u805A\u5408\u51FD\u6570\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT sex FROM job GROUP BY sex\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT sex, MAX(age)\xA0\u6700\u5927,MIN(age)\xA0\u6700\u5C0F,COUNT(*)\xA0\u4E2A\u6570,SUM(age)\xA0\u6C42\u548C,AVG(age)\xA0\u6C42\u5E73\u5747\xA0FROM job GROUP BY sex\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">(5)HAVING\xA0\u5206\u7EC4\u8FC7\u6EE4\u7684\u6761\u4EF6\u8BED\u53E5\u3002\u6CE8\u610F\u8DDFWHERE\u7684\u533A\u5206\u3002WHERE\u5BF9\u6BCF\u4E00\u6761\u8BB0\u5F55\u8FDB\u884C\u8FC7\u6EE4\u7B5B\u9009\uFF0CHAVING\u662F\u5BF9\u7EC4\u8FDB\u884C\u8FC7\u6EE4\u7B5B\u9009\uFF0C\u5206\u7EC4\u4E4B\u540E\u624D\u80FD\u4F7F\u7528HAVING\u3002\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT source s\uFF0Ccount (*) c FROM job GROUP BY s HAVING c (*) &gt;10\xA0\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">(6)ORDER BY\xA0\u6392\u5E8F\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM job ORDER BY age;\xA0\xA0\xA0//\u9ED8\u8BA4\u6309\u7167\u5347\u5E8F\u6392\u5E8F\xA0\xA0\xA0 ASC\u5347\u5E8F\u5173\u952E\u5B57\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM job ORDER BY age DESC;\xA0\xA0\xA0//\u5B9E\u73B0\u964D\u5E8F\xA0\xA0\xA0 DESC\u5347\u5E8F\u5173\u952E\u5B57\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u540C\u65F6\u4F7F\u75286\u4E2A\u8BED\u53E5\u7684\u67E5\u8BE2\u8BED\u53E5\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT positon,count(*)\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">FROM job\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">WHERE age &gt; 20\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">GROUP BY position\xA0\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">HAVING count(*) &gt; 10\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">ORDER BY count(*) DESC\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div><h2 id="mysql-explain-\u7684\u4F7F\u7528\u548C\u5206\u6790" tabindex="-1">Mysql explain \u7684\u4F7F\u7528\u548C\u5206\u6790 <a class="header-anchor" href="#mysql-explain-\u7684\u4F7F\u7528\u548C\u5206\u6790" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">explain \u4F7F\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">explain \u4E3B\u8981\u63D0\u4F9B\u4E00\u4E2A\u529F\u80FD\uFF0C\u5C31\u662F\u5BF9\u6267\u884C\u7684 sql \u8BED\u53E5\u8FDB\u884C\u5206\u6790\uFF0C\u53EF\u4EE5\u5F97\u5230select\u8BED\u53E5\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u4EE5\u4F9BDBA\u6216\u8005\u5F00\u53D1\u9488\u5BF9\u6027\u80FD\u8FDB\u884C\u4F18\u5316\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">\u7528\u6CD5\u4E5F\u5F88\u7B80\u5355\uFF0C\u5C31\u662F\u5728\u6267\u884C\u7684\u8BED\u53E5\u524D\u9762\u52A0\u4E0A \u2018explain\u2019 \u5C31\u597D\u4E86\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5E26\u6761\u4EF6\u548C\u4E0D\u5E26\u6761\u4EF6\u7684\u533A\u522B\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6570\u636E\u51C6\u5907</span></span>
<span class="line"><span style="color:#A6ACCD;">Explain \u6807\u6CE8</span></span>
<span class="line"><span style="color:#A6ACCD;">id: SELECT \u67E5\u8BE2\u7684\u6807\u8BC6\u7B26. \u6BCF\u4E2A SELECT \u90FD\u4F1A\u81EA\u52A8\u5206\u914D\u4E00\u4E2A\u552F\u4E00\u7684\u6807\u8BC6\u7B26.</span></span>
<span class="line"><span style="color:#A6ACCD;">select_type: SELECT \u67E5\u8BE2\u7684\u7C7B\u578B.</span></span>
<span class="line"><span style="color:#A6ACCD;">table: \u67E5\u8BE2\u7684\u662F\u54EA\u4E2A\u8868</span></span>
<span class="line"><span style="color:#A6ACCD;">partitions: \u5339\u914D\u7684\u5206\u533A</span></span>
<span class="line"><span style="color:#A6ACCD;">type: join \u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">possible_keys: \u6B64\u6B21\u67E5\u8BE2\u4E2D\u53EF\u80FD\u9009\u7528\u7684\u7D22\u5F15</span></span>
<span class="line"><span style="color:#A6ACCD;">key: \u6B64\u6B21\u67E5\u8BE2\u4E2D\u786E\u5207\u4F7F\u7528\u5230\u7684\u7D22\u5F15.</span></span>
<span class="line"><span style="color:#A6ACCD;">ref: \u54EA\u4E2A\u5B57\u6BB5\u6216\u5E38\u6570\u4E0E key \u4E00\u8D77\u88AB\u4F7F\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">rows: \u663E\u793A\u6B64\u67E5\u8BE2\u4E00\u5171\u626B\u63CF\u4E86\u591A\u5C11\u884C. \u8FD9\u4E2A\u662F\u4E00\u4E2A\u4F30\u8BA1\u503C.</span></span>
<span class="line"><span style="color:#A6ACCD;">filtered: \u8868\u793A\u6B64\u67E5\u8BE2\u6761\u4EF6\u6240\u8FC7\u6EE4\u7684\u6570\u636E\u7684\u767E\u5206\u6BD4</span></span>
<span class="line"><span style="color:#A6ACCD;">extra: \u989D\u5916\u7684\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5404\u4E2A\u4E3B\u8981\u5B57\u6BB5\u7684\u5E38\u7528\u53D6\u503C\u548C\u542B\u4E49</span></span>
<span class="line"><span style="color:#A6ACCD;">select_type</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4E3B\u8981\u8868\u793A\u67E5\u8BE2\u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">SIMPLE, \u8868\u793A\u6B64\u67E5\u8BE2\u4E0D\u5305\u542B UNION \u67E5\u8BE2\u6216\u5B50\u67E5\u8BE2</span></span>
<span class="line"><span style="color:#A6ACCD;">PRIMARY, \u8868\u793A\u6B64\u67E5\u8BE2\u662F\u6700\u5916\u5C42\u7684\u67E5\u8BE2</span></span>
<span class="line"><span style="color:#A6ACCD;">UNION, \u8868\u793A\u6B64\u67E5\u8BE2\u662F UNION \u7684\u7B2C\u4E8C\u6216\u968F\u540E\u7684\u67E5\u8BE2</span></span>
<span class="line"><span style="color:#A6ACCD;">DEPENDENT UNION, UNION \u4E2D\u7684\u7B2C\u4E8C\u4E2A\u6216\u540E\u9762\u7684\u67E5\u8BE2\u8BED\u53E5, \u53D6\u51B3\u4E8E\u5916\u9762\u7684\u67E5\u8BE2</span></span>
<span class="line"><span style="color:#A6ACCD;">UNION RESULT, UNION \u7684\u7ED3\u679C</span></span>
<span class="line"><span style="color:#A6ACCD;">SUBQUERY, \u5B50\u67E5\u8BE2\u4E2D\u7684\u7B2C\u4E00\u4E2A SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">DEPENDENT SUBQUERY: \u5B50\u67E5\u8BE2\u4E2D\u7684\u7B2C\u4E00\u4E2A SELECT, \u53D6\u51B3\u4E8E\u5916\u9762\u7684\u67E5\u8BE2. \u5373\u5B50\u67E5\u8BE2\u4F9D\u8D56\u4E8E\u5916\u5C42\u67E5\u8BE2\u7684\u7ED3\u679C.</span></span>
<span class="line"><span style="color:#A6ACCD;">\u901A\u5E38\u90FD\u662FSIMPLE\u67E5\u8BE2\uFF0C\u5728\u6CA1\u6709\u5B50\u67E5\u8BE2\uFF0C\u548C \u4E0D\u662FUNION \u67E5\u8BE2\u7684\u65F6\u5019\uFF0C\u90FD\u662FSIMPLE \u67E5\u8BE2\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">Table</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8FD9\u4E2A\u5B57\u6BB5\u4E3B\u8981\u662F\u53EF\u4EE5\u770B\u67E5\u8BE2\u7684\u7C7B\u578B\uFF0C\u4ECE\u800C\u5224\u65AD\u662F\u5426\u9AD8\u6548\uFF0C\u901A\u8FC7\u8FD9\u91CC\uFF0C\u53EF\u4EE5\u770B\u51FA\u4E8B\u5168\u8868\u67E5\u8BE2\u8FD8\u662F\u7D22\u5F15\u626B\u63CF\u67E5\u8BE2\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">system: \u8868\u4E2D\u53EA\u6709\u4E00\u6761\u6570\u636E. \u8FD9\u4E2A\u7C7B\u578B\u662F\u7279\u6B8A\u7684 const \u7C7B\u578B.</span></span>
<span class="line"><span style="color:#A6ACCD;">const: \u9488\u5BF9\u4E3B\u952E\u6216\u552F\u4E00\u7D22\u5F15\u7684\u7B49\u503C\u67E5\u8BE2\u626B\u63CF,\u6700\u591A\u53EA\u8FD4\u56DE\u4E00\u884C\u6570\u636E. const \u67E5\u8BE2\u901F\u5EA6\u975E\u5E38\u5FEB, \u56E0\u4E3A\u5B83\u4EC5\u4EC5\u8BFB\u53D6\u4E00\u6B21\u5373\u53EF.</span></span>
<span class="line"><span style="color:#A6ACCD;">Type</span></span>
<span class="line"><span style="color:#A6ACCD;">\u901A\u5E38\u6765\u8BF4, \u4E0D\u540C\u7684 type \u7C7B\u578B\u7684\u6027\u80FD\u5173\u7CFB\u5982\u4E0B: ALL &lt; index &lt; range ~ index_merge &lt; ref &lt;eq_ref &lt; const &lt; system ALL \u7C7B\u578B\u56E0\u4E3A\u662F\u5168\u8868\u626B\u63CF, \u56E0\u6B64\u5728\u76F8\u540C\u7684\u67E5\u8BE2\u6761\u4EF6\u4E0B, \u5B83\u662F\u901F\u5EA6\u6700\u6162\u7684.</span></span>
<span class="line"><span style="color:#A6ACCD;">\u800C index\u7C7B\u578B\u7684\u67E5\u8BE2\u867D\u7136\u4E0D\u662F\u5168\u8868\u626B\u63CF, \u4F46\u662F\u5B83\u626B\u63CF\u4E86\u6240\u6709\u7684\u7D22\u5F15, \u56E0\u6B64\u6BD4 ALL \u7C7B\u578B\u7684\u7A0D\u5FEB. \u540E\u9762\u7684\u51E0\u79CD\u7C7B\u578B\u90FD\u662F\u5229\u7528\u4E86\u7D22\u5F15\u6765\u67E5\u8BE2\u6570\u636E,</span></span>
<span class="line"><span style="color:#A6ACCD;">\u56E0\u6B64\u53EF\u4EE5\u8FC7\u6EE4\u90E8\u5206\u6216\u5927\u90E8\u5206\u6570\u636E, \u56E0\u6B64\u67E5\u8BE2\u6548\u7387\u5C31\u6BD4\u8F83\u9AD8\u4E86.</span></span>
<span class="line"><span style="color:#A6ACCD;">possible_keys</span></span>
<span class="line"><span style="color:#A6ACCD;">possible_keys \u8868\u793A MySQL \u5728\u67E5\u8BE2\u65F6, \u80FD\u591F\u4F7F\u7528\u5230\u7684\u7D22\u5F15. \u6CE8\u610F, \u5373\u4F7F\u6709\u4E9B\u7D22\u5F15\u5728 possible_keys \u4E2D\u51FA\u73B0,</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4F46\u662F\u5E76\u4E0D\u8868\u793A\u6B64\u7D22\u5F15\u4F1A\u771F\u6B63\u5730\u88AB MySQL \u4F7F\u7528\u5230. MySQL \u5728\u67E5\u8BE2\u65F6\u5177\u4F53\u4F7F\u7528\u4E86\u54EA\u4E9B\u7D22\u5F15, \u7531 key \u5B57\u6BB5\u51B3\u5B9A.</span></span>
<span class="line"><span style="color:#A6ACCD;">key</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6B64\u5B57\u6BB5\u662F MySQL \u5728\u5F53\u524D\u67E5\u8BE2\u65F6\u6240\u771F\u6B63\u4F7F\u7528\u5230\u7684\u7D22\u5F15.</span></span>
<span class="line"><span style="color:#A6ACCD;">key_len</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8868\u793A\u67E5\u8BE2\u4F18\u5316\u5668\u4F7F\u7528\u4E86\u7D22\u5F15\u7684\u5B57\u8282\u6570. \u8FD9\u4E2A\u5B57\u6BB5\u53EF\u4EE5\u8BC4\u4F30\u7EC4\u5408\u7D22\u5F15\u662F\u5426\u5B8C\u5168\u88AB\u4F7F\u7528, \u6216\u53EA\u6709\u6700\u5DE6\u90E8\u5206\u5B57\u6BB5\u88AB\u4F7F\u7528\u5230. key_len \u7684\u8BA1\u7B97\u89C4\u5219\u5982\u4E0B:</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#A6ACCD;">char(n): n \u5B57\u8282\u957F\u5EA6</span></span>
<span class="line"><span style="color:#A6ACCD;">varchar(n): \u5982\u679C\u662F utf8 \u7F16\u7801, \u5219\u662F 3 n + 2\u5B57\u8282; \u5982\u679C\u662F utf8mb4 \u7F16\u7801, \u5219\u662F 4 n + 2 \u5B57\u8282.</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6570\u503C\u7C7B\u578B:</span></span>
<span class="line"><span style="color:#A6ACCD;">TINYINT: 1\u5B57\u8282</span></span>
<span class="line"><span style="color:#A6ACCD;">SMALLINT: 2\u5B57\u8282</span></span>
<span class="line"><span style="color:#A6ACCD;">MEDIUMINT: 3\u5B57\u8282</span></span>
<span class="line"><span style="color:#A6ACCD;">INT: 4\u5B57\u8282</span></span>
<span class="line"><span style="color:#A6ACCD;">BIGINT: 8\u5B57\u8282</span></span>
<span class="line"><span style="color:#A6ACCD;">\u65F6\u95F4\u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">DATE: 3\u5B57\u8282</span></span>
<span class="line"><span style="color:#A6ACCD;">TIMESTAMP: 4\u5B57\u8282</span></span>
<span class="line"><span style="color:#A6ACCD;">DATETIME: 8\u5B57\u8282</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5B57\u6BB5\u5C5E\u6027: NULL \u5C5E\u6027 \u5360\u7528\u4E00\u4E2A\u5B57\u8282. \u5982\u679C\u4E00\u4E2A\u5B57\u6BB5\u662F NOT NULL \u7684, \u5219\u6CA1\u6709\u6B64\u5C5E\u6027.</span></span>
<span class="line"><span style="color:#A6ACCD;">Row</span></span>
<span class="line"><span style="color:#A6ACCD;">rows \u4E5F\u662F\u4E00\u4E2A\u91CD\u8981\u7684\u5B57\u6BB5. MySQL \u67E5\u8BE2\u4F18\u5316\u5668\u6839\u636E\u7EDF\u8BA1\u4FE1\u606F, \u4F30\u7B97 SQL \u8981\u67E5\u627E\u5230\u7ED3\u679C\u96C6\u9700\u8981\u626B\u63CF\u8BFB\u53D6\u7684\u6570\u636E\u884C\u6570.</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8FD9\u4E2A\u503C\u975E\u5E38\u76F4\u89C2\u663E\u793A SQL \u7684\u6548\u7387\u597D\u574F, \u539F\u5219\u4E0A rows \u8D8A\u5C11\u8D8A\u597D.</span></span>
<span class="line"><span style="color:#A6ACCD;">Extra</span></span>
<span class="line"><span style="color:#A6ACCD;">\u989D\u5916\u7684\u4FE1\u606F\u4F1A\u5728extra \u91CC\u9762\u663E\u793A\u51FA\u6765\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">Using filesort \u5F53 Extra \u4E2D\u6709 Using filesort \u65F6, \u8868\u793A MySQL \u9700\u989D\u5916\u7684\u6392\u5E8F\u64CD\u4F5C,</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4E0D\u80FD\u901A\u8FC7\u7D22\u5F15\u987A\u5E8F\u8FBE\u5230\u6392\u5E8F\u6548\u679C. \u4E00\u822C\u6709 Using filesort, \u90FD\u5EFA\u8BAE\u4F18\u5316\u53BB\u6389, \u56E0\u4E3A\u8FD9\u6837\u7684\u67E5\u8BE2 CPU \u8D44\u6E90\u6D88\u8017\u5927.</span></span>
<span class="line"><span style="color:#A6ACCD;">Using index\uFF1A &quot;\u8986\u76D6\u7D22\u5F15\u626B\u63CF&quot;, \u8868\u793A\u67E5\u8BE2\u5728\u7D22\u5F15\u6811\u4E2D\u5C31\u53EF\u67E5\u627E\u6240\u9700\u6570\u636E, \u4E0D\u7528\u626B\u63CF\u8868\u6570\u636E\u6587\u4EF6, \u5F80\u5F80\u8BF4\u660E\u6027\u80FD\u4E0D\u9519</span></span>
<span class="line"><span style="color:#A6ACCD;">Using temporary\uFF1A \u67E5\u8BE2\u6709\u4F7F\u7528\u4E34\u65F6\u8868, \u4E00\u822C\u51FA\u73B0\u4E8E\u6392\u5E8F, \u5206\u7EC4\u548C\u591A\u8868 join \u7684\u60C5\u51B5, \u67E5\u8BE2\u6548\u7387\u4E0D\u9AD8, \u5EFA\u8BAE\u4F18\u5316.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br></div></div><h2 id="\u6570\u636E\u6027\u80FD\u6392\u67E5" tabindex="-1">\u6570\u636E\u6027\u80FD\u6392\u67E5 <a class="header-anchor" href="#\u6570\u636E\u6027\u80FD\u6392\u67E5" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">1,\u67E5\u770B\u6BCF\u4E2A\u5BA2\u6237\u7AEFIP\u8FC7\u6765\u7684\u8FDE\u63A5\u6D88\u8017\u4E86\u591A\u5C11\u8D44\u6E90\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select * from host_summary;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2,\u67E5\u770B\u67D0\u4E2A\u6570\u636E\u6587\u4EF6\u4E0A\u53D1\u751F\u4E86\u591A\u5C11IO\u8BF7\u6C42\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select * from io_global_by_file_by_bytes;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">3,\u67E5\u770B\u6BCF\u4E2A\u7528\u6237\u6D88\u8017\u4E86\u591A\u5C11\u8D44\u6E90\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select * from user_summary;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">4,\u67E5\u770B\u603B\u5171\u5206\u914D\u4E86\u591A\u5C11\u5185\u5B58\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select * from memory_global_total;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">5,\u6570\u636E\u5E93\u8FDE\u63A5\u6765\u81EA\u54EA\u91CC\uFF0C\u4EE5\u53CA\u8FD9\u4E9B\u8FDE\u63A5\u5BF9\u6570\u636E\u5E93\u7684\u8BF7\u6C42\u60C5\u51B5\u662F\u600E\u6837\u7684\uFF1F \u67E5\u770B\u5F53\u524D\u8FDE\u63A5\u60C5\u51B5\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select host, current_connections, statements from host_summary;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">6,\u67E5\u770B\u5F53\u524D\u6B63\u5728\u6267\u884C\u7684SQL\u548C\u6267\u884Cshow full processlist\u7684\u6548\u679C\u76F8\u5F53\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select conn_id, user, current_statement, last_statement from session;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">7,\u6570\u636E\u5E93\u4E2D\u54EA\u4E9BSQL\u88AB\u9891\u7E41\u6267\u884C\uFF1F \u6267\u884C\u4E0B\u9762\u547D\u4EE4\u67E5\u8BE2TOP 10\u6700\u70EDSQL\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select db,exec_count,query from statement_analysis order by exec_count desc limit 10;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">8,\u54EA\u4E2A\u6587\u4EF6\u4EA7\u751F\u4E86\u6700\u591A\u7684IO\uFF0C\u8BFB\u591A\uFF0C\u8FD8\u662F\u5199\u7684\u591A\uFF1F</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select * from io_global_by_file_by_bytes limit 10;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">9,\u54EA\u4E2A\u8868\u4E0A\u7684IO\u8BF7\u6C42\u6700\u591A\uFF1F</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select * from io_global_by_file_by_bytes where file like \u2018%ibd\u2019 order by total desc limit 10;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">10,\u54EA\u4E2A\u8868\u88AB\u8BBF\u95EE\u7684\u6700\u591A\uFF1F \u5148\u8BBF\u95EEstatement_analysis\uFF0C\u6839\u636E\u70ED\u95E8SQL\u6392\u5E8F\u627E\u5230\u76F8\u5E94\u7684\u6570\u636E\u8868\u3002 \u54EA\u4E9B\u8BED\u53E5\u5EF6\u8FDF\u6BD4\u8F83\u4E25\u91CD\uFF1F \u67E5\u770Bstatement_analysis\u4E2Davg_latency\u7684\u6700\u9AD8\u7684SQL\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select * from statement_analysis order by avg_latency desc limit 10;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">11,\u6216\u8005\u67E5\u770Bstatements_with_runtimes_in_95th_percentile\u89C6\u56FE\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select * from statements_with_runtimes_in_95th_percentile;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">12,\u54EA\u4E9BSQL\u6267\u884C\u4E86\u5168\u8868\u626B\u63CF\u6216\u6267\u884C\u4E86\u6392\u5E8F\u64CD\u4F5C\uFF1F mysql&gt; select * from statements_with_sorting; mysql&gt; select * from statements_with_full_table_scans;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">13,\u54EA\u4E9BSQL\u8BED\u53E5\u4F7F\u7528\u4E86\u4E34\u65F6\u8868\uFF0C\u53C8\u6709\u54EA\u4E9B\u7528\u5230\u4E86\u78C1\u76D8\u4E34\u65F6\u8868\uFF1F \u67E5\u770Bstatement_analysis\u4E2D\u54EA\u4E2ASQL\u7684tmp_tables \u3001tmp_disk_tables\u503C\u5927\u4E8E0\u5373\u53EF\u3002 mysql&gt; select db, query, tmp_tables, tmp_disk_tables from statement_analysis where tmp_tables&gt;0 or tmp_disk_tables &gt;0 order by (tmp_tables+tmp_disk_tables) desc limit 20;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">14,\u4E5F\u53EF\u4EE5\u67E5\u770Bstatements_with_temp_tables\u89C6\u56FE\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select * from statements_with_temp_tables\\G</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">15 \u54EA\u4E2A\u8868\u5360\u7528\u4E86\u6700\u591A\u7684buffer pool\uFF1F</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select * from innodb_buffer_stats_by_table order by allocated desc limit 10;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">16,\u6BCF\u4E2A\u5E93\uFF08database\uFF09\u5360\u7528\u591A\u5C11buffer pool\uFF1F</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select * from innodb_buffer_stats_by_schema order by allocated desc limit 10;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">17,\u6BCF\u4E2A\u8FDE\u63A5\u5206\u914D\u591A\u5C11\u5185\u5B58\uFF1F \u5229\u7528session\u8868\u548Cmemory_by_thread_by_current_bytes\u5206\u914D\u8868\u8FDB\u884C\u5173\u8054\u67E5\u8BE2\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select b.user, current_count_used, current_allocated, current_avg_alloc, current_max_alloc, total_allocated,current_statement from memory_by_thread_by_current_bytes a, session b where a.thread_id = b.thd_id;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">18,MySQL\u81EA\u589E\u957F\u5B57\u6BB5\u7684\u6700\u5927\u503C\u548C\u5F53\u524D\u5DF2\u7ECF\u4F7F\u7528\u5230\u7684\u503C\uFF1F</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select * from schema_auto_increment_columns;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">19,MySQL\u7D22\u5F15\u4F7F\u7528\u60C5\u51B5\u7EDF\u8BA1\uFF1F</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select * from schema_index_statistics;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">20,MySQL\u6709\u54EA\u4E9B\u5197\u4F59\u7D22\u5F15\u548C\u65E0\u7528\u7D22\u5F15\uFF1F</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select * from schema_redundant_indexes; mysql&gt; select * from schema_unused_indexes;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">21,MySQL\u5185\u90E8\u6709\u591A\u4E2A\u7EBF\u7A0B\u5728\u8FD0\u884C\uFF1F MySQL\u5185\u90E8\u7684\u7EBF\u7A0B\u7C7B\u578B\u53CA\u6570\u91CF\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select user, count(*) from processlist group by user;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div><h2 id="mpysql-\u6570\u636E\u5907\u4EFD" tabindex="-1">mpysql \u6570\u636E\u5907\u4EFD <a class="header-anchor" href="#mpysql-\u6570\u636E\u5907\u4EFD" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#!/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;">bk_dir=/data/mysql_bk</span></span>
<span class="line"><span style="color:#A6ACCD;">bk_time=$(/bin/date +%Y%m%d)</span></span>
<span class="line"><span style="color:#A6ACCD;">bk_mysqldump=/usr/local/mysql/bin/mysqldump</span></span>
<span class="line"><span style="color:#A6ACCD;">db_user=root</span></span>
<span class="line"><span style="color:#A6ACCD;">db_password=Yy123456</span></span>
<span class="line"><span style="color:#A6ACCD;">db_name=(\`/usr/local/mysql/bin/mysql -uroot -p$db_password -e &quot;show databases&quot; 2&gt; /dev/null\`)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#\u6570\u636E\u5907\u4EFD</span></span>
<span class="line"><span style="color:#A6ACCD;">for i in \${db_name[@]:2}</span></span>
<span class="line"><span style="color:#A6ACCD;">do</span></span>
<span class="line"><span style="color:#A6ACCD;">        #\u5224\u65AD\u76EE\u5F55\u662F\u5426\u5B58\u5728</span></span>
<span class="line"><span style="color:#A6ACCD;">        if [ ! -d &quot;\${bk_dir}/$i&quot; ];</span></span>
<span class="line"><span style="color:#A6ACCD;">        then</span></span>
<span class="line"><span style="color:#A6ACCD;">                mkdir -p \${bk_dir}/$i</span></span>
<span class="line"><span style="color:#A6ACCD;">        fi</span></span>
<span class="line"><span style="color:#A6ACCD;">        #\u5907\u4EFD\u6240\u6709\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">        $bk_mysqldump -u$db_user -p$db_password \${i} &gt; $bk_dir/\${i}/\${i}-\${bk_time}.sql  2&gt; /dev/null</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        if [ $? -ne 0 ];</span></span>
<span class="line"><span style="color:#A6ACCD;">                then</span></span>
<span class="line"><span style="color:#A6ACCD;">                echo -e &quot;\${i}-\${bk_time}.sql \u5907\u4EFD OK!!! &quot; &gt;&gt; $bk_dir/mysqldump.log</span></span>
<span class="line"><span style="color:#A6ACCD;">        else</span></span>
<span class="line"><span style="color:#A6ACCD;">                echo -e &quot;\${i}-\${bk_time}.sql \u5907\u4EFD error&quot; &gt;&gt; $bk_dir/mysqldump.log</span></span>
<span class="line"><span style="color:#A6ACCD;">        fi</span></span>
<span class="line"><span style="color:#A6ACCD;">        cd $bk_dir/$i</span></span>
<span class="line"><span style="color:#A6ACCD;">        tar -zcf \${i}-\${bk_time}.tar \${i}-\${bk_time}.sql</span></span>
<span class="line"><span style="color:#A6ACCD;">        rm -f \${i}-\${bk_time}.sql</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        find \${bk_dir}/\${i} -name &quot;*.tar&quot; -mtime +30 -exec rm -rf {} \\; &amp;&gt;/dev/null</span></span>
<span class="line"><span style="color:#A6ACCD;">done</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div>`,11),r=[e];function c(o,i,b,C,A,t){return n(),a("div",null,r)}var u=s(p,[["render",c]]);export{y as __pageData,u as default};
