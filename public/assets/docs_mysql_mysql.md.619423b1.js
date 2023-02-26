import{_ as s,c as n,o as a,a as l}from"./app.116e60de.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"常用 sql","slug":"常用-sql","link":"#常用-sql","children":[]},{"level":2,"title":"Mysql explain 的使用和分析","slug":"mysql-explain-的使用和分析","link":"#mysql-explain-的使用和分析","children":[]},{"level":2,"title":"数据性能排查","slug":"数据性能排查","link":"#数据性能排查","children":[]},{"level":2,"title":"mpysql 数据备份","slug":"mpysql-数据备份","link":"#mpysql-数据备份","children":[]}],"relativePath":"docs/mysql/mysql.md"}'),p={name:"docs/mysql/mysql.md"},e=l(`<h2 id="常用-sql" tabindex="-1">常用 sql <a class="header-anchor" href="#常用-sql" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">update 表名 set 指定字段 = replace(指定字段,&#39;要替换的字符串&#39;,&#39;想要的字符串&#39;) where 条件</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">(二)多表查询：子查询 </span></span>
<span class="line"><span style="color:#A6ACCD;">注意一：子查询的写法更符合人的思维方式 </span></span>
<span class="line"><span style="color:#A6ACCD;">注意二：子查询属于高级查询，可以对查询效率进行优化。延迟加载。 </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">查询小刘所在公司（多表链接的写法） </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT c.name 公司名 </span></span>
<span class="line"><span style="color:#A6ACCD;">FROM company.c,member m </span></span>
<span class="line"><span style="color:#A6ACCD;">WHERE c.id = m.comid AND m.name = &#39;小刘&#39;  </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">(1)SELECT 子查询 </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT (SELECT name FROM company WHERE id = comid) 公司名 </span></span>
<span class="line"><span style="color:#A6ACCD;">FROM member  </span></span>
<span class="line"><span style="color:#A6ACCD;">WHERE name = &#39;小刘&#39; </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">(2)WHERE 子查询 </span></span>
<span class="line"><span style="color:#A6ACCD;">查询小刘和小王的公司名  </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT name 公司名 </span></span>
<span class="line"><span style="color:#A6ACCD;">FROM company  </span></span>
<span class="line"><span style="color:#A6ACCD;">WHERE id IN (SELECT comid FROM member WHERE name = &#39;小刘&#39; OR name = &#39;小王&#39;) </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">(3)from子查询 </span></span>
<span class="line"><span style="color:#A6ACCD;">注意：主要用于3张表以上的链接查询 </span></span>
<span class="line"><span style="color:#A6ACCD;">举例：有A，B，C三张表。先查询AB两种表，再用查询结果和C表链接查询 </span></span>
<span class="line"><span style="color:#A6ACCD;">查询小刘所在公司 </span></span>
<span class="line"><span style="color:#A6ACCD;">注意：SELECT子查询和WHERE子查询是把查询的结果当作数据。而FROM子查询是把查询结果当成表来看待。 </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT c.name 公司名 </span></span>
<span class="line"><span style="color:#A6ACCD;">FROM (SELECT name n,comid c FROM member WHERE name = &#39;小刘&#39;) t1,company c </span></span>
<span class="line"><span style="color:#A6ACCD;">WHERE t1.c = .c.id </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">（1）添加，修改，删除这三个操作只用于单表 </span></span>
<span class="line"><span style="color:#A6ACCD;">（2）多表的级联删除，多表的级联更新有时会出现。 </span></span>
<span class="line"><span style="color:#A6ACCD;">（3）多表查询的策略有两种：多表联查，子查询 </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">创建一个公司表 </span></span>
<span class="line"><span style="color:#A6ACCD;">CREATE TABLE company( </span></span>
<span class="line"><span style="color:#A6ACCD;">id INT PRIMARY KEY , </span></span>
<span class="line"><span style="color:#A6ACCD;">name VARCHAR(255) NOT NULL </span></span>
<span class="line"><span style="color:#A6ACCD;">); </span></span>
<span class="line"><span style="color:#A6ACCD;">INSERT INTO company VALUES(1,&#39;IBM&#39;) </span></span>
<span class="line"><span style="color:#A6ACCD;">INSERT INTO company VALUES(1,&#39;HP&#39;) </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">创建一个员工表 </span></span>
<span class="line"><span style="color:#A6ACCD;">CREATE TABLE member( </span></span>
<span class="line"><span style="color:#A6ACCD;">id INT(2) PRIMARY KEY , </span></span>
<span class="line"><span style="color:#A6ACCD;">name VARCHAT(255) NOT NULL, </span></span>
<span class="line"><span style="color:#A6ACCD;">sal DOUBLE(10,2), </span></span>
<span class="line"><span style="color:#A6ACCD;">comid INT </span></span>
<span class="line"><span style="color:#A6ACCD;">); </span></span>
<span class="line"><span style="color:#A6ACCD;">INSERT INTO member VALUES(101,&#39;小李&#39;,3000,1) </span></span>
<span class="line"><span style="color:#A6ACCD;">INSERT INTO member VALUES(102,&#39;小王&#39;,4000,1) </span></span>
<span class="line"><span style="color:#A6ACCD;">INSERT INTO member VALUES(103,&#39;小刘&#39;,5000,2) </span></span>
<span class="line"><span style="color:#A6ACCD;">INSERT INTO member VALUES(104,&#39;小刚&#39;,6000,2) </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">(一)多表查询：同时查询多张表 </span></span>
<span class="line"><span style="color:#A6ACCD;">(1)笛卡尔积 </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * </span></span>
<span class="line"><span style="color:#A6ACCD;">FROM conpany,member      //查询结果是两表相乘，笛卡尔积（A表有m条数据，B表有n条数据，结果m*n条） </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">(2)如果要查询n张表，必须要指定n-1个公共列的条件，否则会产生笛卡尔积 </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * </span></span>
<span class="line"><span style="color:#A6ACCD;">FROM conpany c,member m </span></span>
<span class="line"><span style="color:#A6ACCD;">WHERE c.id = m.comid </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">(3)查询IBM的员工信息 </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT m.* </span></span>
<span class="line"><span style="color:#A6ACCD;">FROM company c,member m </span></span>
<span class="line"><span style="color:#A6ACCD;">WHERE c.id = m.comid AND c.name = &#39;IBM&#39; </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">(4)小刘的公司信息 </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT c.name </span></span>
<span class="line"><span style="color:#A6ACCD;">FROM company.c,member m </span></span>
<span class="line"><span style="color:#A6ACCD;">WHERE c.id = m.comid AND m.name = &#39;小刘&#39;  </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">(5)左连接，以左表为主表，左表中满足条件的记录会查询出来，不满足的条件也会被查出来 </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT c.name </span></span>
<span class="line"><span style="color:#A6ACCD;">FROM company c LEFT JOIN member m ON c.id = m.comid </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">(6)右连接，以右表为主表，右表中满足条件的记录会查询出来，不满足的条件也会被查出来 </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT c.name </span></span>
<span class="line"><span style="color:#A6ACCD;">FROM member m RIGHT JOIN company c ON c.id = m.comid </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">(7)内连接 </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT c.name </span></span>
<span class="line"><span style="color:#A6ACCD;">FROM member m INNER JOIN company.c ON c.id = m.comid </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">(1)SELECT子语句 </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM person; </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT name,dep FROM person </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT name n,dep d FROM person </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">(2)FROM子语句 </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM person; </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM person t;  </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT t.id ,t.&#39;name&#39; FROM person t;  </span></span>
<span class="line"><span style="color:#A6ACCD;">(3)WHERE子语句 </span></span>
<span class="line"><span style="color:#A6ACCD;">比较运算符 </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM job WHERE age &gt; 20 </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM job WHERE age &gt;= 20 </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM job WHERE age &lt; 20 </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM job WHERE age &lt;= 20 </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM job WHERE age = 20 </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM job WHERE age != 20 </span></span>
<span class="line"><span style="color:#A6ACCD;">逻辑运算符 </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM job WHERE age &gt; 20 AND age &lt; 25  AND  sex = &#39;男&#39; </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM job WHERE positon = &#39;美工&#39; or positon = &#39;实习生&#39;   //@1 </span></span>
<span class="line"><span style="color:#A6ACCD;">数字区间运算符 </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM job WHERE age BETWEEN 18 AND 19    //包括18和19  </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM job WHERE age NOT BETWEEN 18 AND 19   //逻辑非 </span></span>
<span class="line"><span style="color:#A6ACCD;">集合运算符 </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM job WHERE positon in (&#39;美工&#39;,&#39;实习生&#39;)     //和@1等价 </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM job WHERE age in (18,20,27)      </span></span>
<span class="line"><span style="color:#A6ACCD;">模糊查询运算符 </span></span>
<span class="line"><span style="color:#A6ACCD;">匹配符：_ 下划线 匹配一个任意字符   % 百分号 匹配零个或者多个任意字符。注意like模糊查询只能用于字符类型。 </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM job WHERE name LIKE &#39;郭_&#39;      //郭名，郭大，郭奎 </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM job WHERE name LIKE &#39;郭%&#39;          //郭名，郭大，郭奎，郭飞翔，郭大牛 </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM job WHERE name LIKE &#39;&amp;郭%&#39;        //郭名，郭大，郭奎，郭飞翔，郭大牛，小郭，。。。带就算 </span></span>
<span class="line"><span style="color:#A6ACCD;">空NULL  解释 ：表示空的意思，未知，没有。不是0，不是空字符串。 </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM person WHERE dep IS NULL    //注意：判断空必须用is </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM person WHERE dep IS NOT NULL  </span></span>
<span class="line"><span style="color:#A6ACCD;">(4)GROUP BY 分组子语句 </span></span>
<span class="line"><span style="color:#A6ACCD;">分组的理解：相同的是一组。按照组来显示数据。几组就显示几条记录。 </span></span>
<span class="line"><span style="color:#A6ACCD;">分组的注意事项：分组的时候，SELECT显示的字段有约束条件。1是分组的组名，2是聚合函数 </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT sex FROM job GROUP BY sex </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT sex, MAX(age) 最大,MIN(age) 最小,COUNT(*) 个数,SUM(age) 求和,AVG(age) 求平均 FROM job GROUP BY sex </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">(5)HAVING 分组过滤的条件语句。注意跟WHERE的区分。WHERE对每一条记录进行过滤筛选，HAVING是对组进行过滤筛选，分组之后才能使用HAVING。 </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT source s，count (*) c FROM job GROUP BY s HAVING c (*) &gt;10  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">(6)ORDER BY 排序 </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM job ORDER BY age;   //默认按照升序排序    ASC升序关键字 </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM job ORDER BY age DESC;   //实现降序    DESC升序关键字 </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">同时使用6个语句的查询语句 </span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT positon,count(*) </span></span>
<span class="line"><span style="color:#A6ACCD;">FROM job </span></span>
<span class="line"><span style="color:#A6ACCD;">WHERE age &gt; 20 </span></span>
<span class="line"><span style="color:#A6ACCD;">GROUP BY position  </span></span>
<span class="line"><span style="color:#A6ACCD;">HAVING count(*) &gt; 10 </span></span>
<span class="line"><span style="color:#A6ACCD;">ORDER BY count(*) DESC </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div><h2 id="mysql-explain-的使用和分析" tabindex="-1">Mysql explain 的使用和分析 <a class="header-anchor" href="#mysql-explain-的使用和分析" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">explain 使用</span></span>
<span class="line"><span style="color:#A6ACCD;">explain 主要提供一个功能，就是对执行的 sql 语句进行分析，可以得到select语句的详细信息，以供DBA或者开发针对性能进行优化。</span></span>
<span class="line"><span style="color:#A6ACCD;">用法也很简单，就是在执行的语句前面加上 ‘explain’ 就好了。</span></span>
<span class="line"><span style="color:#A6ACCD;">带条件和不带条件的区别。</span></span>
<span class="line"><span style="color:#A6ACCD;">数据准备</span></span>
<span class="line"><span style="color:#A6ACCD;">Explain 标注</span></span>
<span class="line"><span style="color:#A6ACCD;">id: SELECT 查询的标识符. 每个 SELECT 都会自动分配一个唯一的标识符.</span></span>
<span class="line"><span style="color:#A6ACCD;">select_type: SELECT 查询的类型.</span></span>
<span class="line"><span style="color:#A6ACCD;">table: 查询的是哪个表</span></span>
<span class="line"><span style="color:#A6ACCD;">partitions: 匹配的分区</span></span>
<span class="line"><span style="color:#A6ACCD;">type: join 类型</span></span>
<span class="line"><span style="color:#A6ACCD;">possible_keys: 此次查询中可能选用的索引</span></span>
<span class="line"><span style="color:#A6ACCD;">key: 此次查询中确切使用到的索引.</span></span>
<span class="line"><span style="color:#A6ACCD;">ref: 哪个字段或常数与 key 一起被使用</span></span>
<span class="line"><span style="color:#A6ACCD;">rows: 显示此查询一共扫描了多少行. 这个是一个估计值.</span></span>
<span class="line"><span style="color:#A6ACCD;">filtered: 表示此查询条件所过滤的数据的百分比</span></span>
<span class="line"><span style="color:#A6ACCD;">extra: 额外的信息</span></span>
<span class="line"><span style="color:#A6ACCD;">各个主要字段的常用取值和含义</span></span>
<span class="line"><span style="color:#A6ACCD;">select_type</span></span>
<span class="line"><span style="color:#A6ACCD;">主要表示查询类型</span></span>
<span class="line"><span style="color:#A6ACCD;">SIMPLE, 表示此查询不包含 UNION 查询或子查询</span></span>
<span class="line"><span style="color:#A6ACCD;">PRIMARY, 表示此查询是最外层的查询</span></span>
<span class="line"><span style="color:#A6ACCD;">UNION, 表示此查询是 UNION 的第二或随后的查询</span></span>
<span class="line"><span style="color:#A6ACCD;">DEPENDENT UNION, UNION 中的第二个或后面的查询语句, 取决于外面的查询</span></span>
<span class="line"><span style="color:#A6ACCD;">UNION RESULT, UNION 的结果</span></span>
<span class="line"><span style="color:#A6ACCD;">SUBQUERY, 子查询中的第一个 SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">DEPENDENT SUBQUERY: 子查询中的第一个 SELECT, 取决于外面的查询. 即子查询依赖于外层查询的结果.</span></span>
<span class="line"><span style="color:#A6ACCD;">通常都是SIMPLE查询，在没有子查询，和 不是UNION 查询的时候，都是SIMPLE 查询。</span></span>
<span class="line"><span style="color:#A6ACCD;">Table</span></span>
<span class="line"><span style="color:#A6ACCD;">这个字段主要是可以看查询的类型，从而判断是否高效，通过这里，可以看出事全表查询还是索引扫描查询。</span></span>
<span class="line"><span style="color:#A6ACCD;">system: 表中只有一条数据. 这个类型是特殊的 const 类型.</span></span>
<span class="line"><span style="color:#A6ACCD;">const: 针对主键或唯一索引的等值查询扫描,最多只返回一行数据. const 查询速度非常快, 因为它仅仅读取一次即可.</span></span>
<span class="line"><span style="color:#A6ACCD;">Type</span></span>
<span class="line"><span style="color:#A6ACCD;">通常来说, 不同的 type 类型的性能关系如下: ALL &lt; index &lt; range ~ index_merge &lt; ref &lt;eq_ref &lt; const &lt; system ALL 类型因为是全表扫描, 因此在相同的查询条件下, 它是速度最慢的.</span></span>
<span class="line"><span style="color:#A6ACCD;">而 index类型的查询虽然不是全表扫描, 但是它扫描了所有的索引, 因此比 ALL 类型的稍快. 后面的几种类型都是利用了索引来查询数据,</span></span>
<span class="line"><span style="color:#A6ACCD;">因此可以过滤部分或大部分数据, 因此查询效率就比较高了.</span></span>
<span class="line"><span style="color:#A6ACCD;">possible_keys</span></span>
<span class="line"><span style="color:#A6ACCD;">possible_keys 表示 MySQL 在查询时, 能够使用到的索引. 注意, 即使有些索引在 possible_keys 中出现,</span></span>
<span class="line"><span style="color:#A6ACCD;">但是并不表示此索引会真正地被 MySQL 使用到. MySQL 在查询时具体使用了哪些索引, 由 key 字段决定.</span></span>
<span class="line"><span style="color:#A6ACCD;">key</span></span>
<span class="line"><span style="color:#A6ACCD;">此字段是 MySQL 在当前查询时所真正使用到的索引.</span></span>
<span class="line"><span style="color:#A6ACCD;">key_len</span></span>
<span class="line"><span style="color:#A6ACCD;">表示查询优化器使用了索引的字节数. 这个字段可以评估组合索引是否完全被使用, 或只有最左部分字段被使用到. key_len 的计算规则如下:</span></span>
<span class="line"><span style="color:#A6ACCD;">字符串</span></span>
<span class="line"><span style="color:#A6ACCD;">char(n): n 字节长度</span></span>
<span class="line"><span style="color:#A6ACCD;">varchar(n): 如果是 utf8 编码, 则是 3 n + 2字节; 如果是 utf8mb4 编码, 则是 4 n + 2 字节.</span></span>
<span class="line"><span style="color:#A6ACCD;">数值类型:</span></span>
<span class="line"><span style="color:#A6ACCD;">TINYINT: 1字节</span></span>
<span class="line"><span style="color:#A6ACCD;">SMALLINT: 2字节</span></span>
<span class="line"><span style="color:#A6ACCD;">MEDIUMINT: 3字节</span></span>
<span class="line"><span style="color:#A6ACCD;">INT: 4字节</span></span>
<span class="line"><span style="color:#A6ACCD;">BIGINT: 8字节</span></span>
<span class="line"><span style="color:#A6ACCD;">时间类型</span></span>
<span class="line"><span style="color:#A6ACCD;">DATE: 3字节</span></span>
<span class="line"><span style="color:#A6ACCD;">TIMESTAMP: 4字节</span></span>
<span class="line"><span style="color:#A6ACCD;">DATETIME: 8字节</span></span>
<span class="line"><span style="color:#A6ACCD;">字段属性: NULL 属性 占用一个字节. 如果一个字段是 NOT NULL 的, 则没有此属性.</span></span>
<span class="line"><span style="color:#A6ACCD;">Row</span></span>
<span class="line"><span style="color:#A6ACCD;">rows 也是一个重要的字段. MySQL 查询优化器根据统计信息, 估算 SQL 要查找到结果集需要扫描读取的数据行数.</span></span>
<span class="line"><span style="color:#A6ACCD;">这个值非常直观显示 SQL 的效率好坏, 原则上 rows 越少越好.</span></span>
<span class="line"><span style="color:#A6ACCD;">Extra</span></span>
<span class="line"><span style="color:#A6ACCD;">额外的信息会在extra 里面显示出来。</span></span>
<span class="line"><span style="color:#A6ACCD;">Using filesort 当 Extra 中有 Using filesort 时, 表示 MySQL 需额外的排序操作,</span></span>
<span class="line"><span style="color:#A6ACCD;">不能通过索引顺序达到排序效果. 一般有 Using filesort, 都建议优化去掉, 因为这样的查询 CPU 资源消耗大.</span></span>
<span class="line"><span style="color:#A6ACCD;">Using index： &quot;覆盖索引扫描&quot;, 表示查询在索引树中就可查找所需数据, 不用扫描表数据文件, 往往说明性能不错</span></span>
<span class="line"><span style="color:#A6ACCD;">Using temporary： 查询有使用临时表, 一般出现于排序, 分组和多表 join 的情况, 查询效率不高, 建议优化.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br></div></div><h2 id="数据性能排查" tabindex="-1">数据性能排查 <a class="header-anchor" href="#数据性能排查" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">1,查看每个客户端IP过来的连接消耗了多少资源。</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select * from host_summary;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2,查看某个数据文件上发生了多少IO请求。</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select * from io_global_by_file_by_bytes;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">3,查看每个用户消耗了多少资源。</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select * from user_summary;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">4,查看总共分配了多少内存。</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select * from memory_global_total;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">5,数据库连接来自哪里，以及这些连接对数据库的请求情况是怎样的？ 查看当前连接情况。</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select host, current_connections, statements from host_summary;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">6,查看当前正在执行的SQL和执行show full processlist的效果相当。</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select conn_id, user, current_statement, last_statement from session;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">7,数据库中哪些SQL被频繁执行？ 执行下面命令查询TOP 10最热SQL。</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select db,exec_count,query from statement_analysis order by exec_count desc limit 10;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">8,哪个文件产生了最多的IO，读多，还是写的多？</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select * from io_global_by_file_by_bytes limit 10;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">9,哪个表上的IO请求最多？</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select * from io_global_by_file_by_bytes where file like ‘%ibd’ order by total desc limit 10;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">10,哪个表被访问的最多？ 先访问statement_analysis，根据热门SQL排序找到相应的数据表。 哪些语句延迟比较严重？ 查看statement_analysis中avg_latency的最高的SQL。</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select * from statement_analysis order by avg_latency desc limit 10;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">11,或者查看statements_with_runtimes_in_95th_percentile视图。</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select * from statements_with_runtimes_in_95th_percentile;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">12,哪些SQL执行了全表扫描或执行了排序操作？ mysql&gt; select * from statements_with_sorting; mysql&gt; select * from statements_with_full_table_scans;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">13,哪些SQL语句使用了临时表，又有哪些用到了磁盘临时表？ 查看statement_analysis中哪个SQL的tmp_tables 、tmp_disk_tables值大于0即可。 mysql&gt; select db, query, tmp_tables, tmp_disk_tables from statement_analysis where tmp_tables&gt;0 or tmp_disk_tables &gt;0 order by (tmp_tables+tmp_disk_tables) desc limit 20;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">14,也可以查看statements_with_temp_tables视图。</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select * from statements_with_temp_tables\\G</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">15 哪个表占用了最多的buffer pool？</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select * from innodb_buffer_stats_by_table order by allocated desc limit 10;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">16,每个库（database）占用多少buffer pool？</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select * from innodb_buffer_stats_by_schema order by allocated desc limit 10;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">17,每个连接分配多少内存？ 利用session表和memory_by_thread_by_current_bytes分配表进行关联查询。</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select b.user, current_count_used, current_allocated, current_avg_alloc, current_max_alloc, total_allocated,current_statement from memory_by_thread_by_current_bytes a, session b where a.thread_id = b.thd_id;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">18,MySQL自增长字段的最大值和当前已经使用到的值？</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select * from schema_auto_increment_columns;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">19,MySQL索引使用情况统计？</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select * from schema_index_statistics;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">20,MySQL有哪些冗余索引和无用索引？</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select * from schema_redundant_indexes; mysql&gt; select * from schema_unused_indexes;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">21,MySQL内部有多个线程在运行？ MySQL内部的线程类型及数量。</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; select user, count(*) from processlist group by user;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div><h2 id="mpysql-数据备份" tabindex="-1">mpysql 数据备份 <a class="header-anchor" href="#mpysql-数据备份" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">#!/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;">bk_dir=/data/mysql_bk</span></span>
<span class="line"><span style="color:#A6ACCD;">bk_time=$(/bin/date +%Y%m%d)</span></span>
<span class="line"><span style="color:#A6ACCD;">bk_mysqldump=/usr/local/mysql/bin/mysqldump</span></span>
<span class="line"><span style="color:#A6ACCD;">db_user=root</span></span>
<span class="line"><span style="color:#A6ACCD;">db_password=Yy123456</span></span>
<span class="line"><span style="color:#A6ACCD;">db_name=(\`/usr/local/mysql/bin/mysql -uroot -p$db_password -e &quot;show databases&quot; 2&gt; /dev/null\`)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#数据备份</span></span>
<span class="line"><span style="color:#A6ACCD;">for i in \${db_name[@]:2}</span></span>
<span class="line"><span style="color:#A6ACCD;">do</span></span>
<span class="line"><span style="color:#A6ACCD;">        #判断目录是否存在</span></span>
<span class="line"><span style="color:#A6ACCD;">        if [ ! -d &quot;\${bk_dir}/$i&quot; ];</span></span>
<span class="line"><span style="color:#A6ACCD;">        then</span></span>
<span class="line"><span style="color:#A6ACCD;">                mkdir -p \${bk_dir}/$i</span></span>
<span class="line"><span style="color:#A6ACCD;">        fi</span></span>
<span class="line"><span style="color:#A6ACCD;">        #备份所有库</span></span>
<span class="line"><span style="color:#A6ACCD;">        $bk_mysqldump -u$db_user -p$db_password \${i} &gt; $bk_dir/\${i}/\${i}-\${bk_time}.sql  2&gt; /dev/null</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        if [ $? -ne 0 ];</span></span>
<span class="line"><span style="color:#A6ACCD;">                then</span></span>
<span class="line"><span style="color:#A6ACCD;">                echo -e &quot;\${i}-\${bk_time}.sql 备份 OK!!! &quot; &gt;&gt; $bk_dir/mysqldump.log</span></span>
<span class="line"><span style="color:#A6ACCD;">        else</span></span>
<span class="line"><span style="color:#A6ACCD;">                echo -e &quot;\${i}-\${bk_time}.sql 备份 error&quot; &gt;&gt; $bk_dir/mysqldump.log</span></span>
<span class="line"><span style="color:#A6ACCD;">        fi</span></span>
<span class="line"><span style="color:#A6ACCD;">        cd $bk_dir/$i</span></span>
<span class="line"><span style="color:#A6ACCD;">        tar -zcf \${i}-\${bk_time}.tar \${i}-\${bk_time}.sql</span></span>
<span class="line"><span style="color:#A6ACCD;">        rm -f \${i}-\${bk_time}.sql</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        find \${bk_dir}/\${i} -name &quot;*.tar&quot; -mtime +30 -exec rm -rf {} \\; &amp;&gt;/dev/null</span></span>
<span class="line"><span style="color:#A6ACCD;">done</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div>`,11),r=[e];function c(i,o,b,t,C,A){return a(),n("div",null,r)}const u=s(p,[["render",c]]);export{y as __pageData,u as default};
