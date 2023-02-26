import{_ as s,c as n,o as a,a as l}from"./app.116e60de.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"MySQL 读写分离及主从时延","slug":"mysql-读写分离及主从时延","link":"#mysql-读写分离及主从时延","children":[{"level":3,"title":"如何实现 mysql 的读写分离？","slug":"如何实现-mysql-的读写分离","link":"#如何实现-mysql-的读写分离","children":[]},{"level":3,"title":"MySQL 主从复制原理的是啥？","slug":"mysql-主从复制原理的是啥","link":"#mysql-主从复制原理的是啥","children":[]},{"level":3,"title":"如何解决 mysql 主从同步的延时问题？","slug":"如何解决-mysql-主从同步的延时问题","link":"#如何解决-mysql-主从同步的延时问题","children":[]}]}],"relativePath":"docs/subject/mysql.md"}'),e={name:"docs/subject/mysql.md"},p=l(`<h2 id="mysql-读写分离及主从时延" tabindex="-1">MySQL 读写分离及主从时延 <a class="header-anchor" href="#mysql-读写分离及主从时延" aria-hidden="true">#</a></h2><h3 id="如何实现-mysql-的读写分离" tabindex="-1">如何实现 mysql 的读写分离？ <a class="header-anchor" href="#如何实现-mysql-的读写分离" aria-hidden="true">#</a></h3><h3 id="mysql-主从复制原理的是啥" tabindex="-1">MySQL 主从复制原理的是啥？ <a class="header-anchor" href="#mysql-主从复制原理的是啥" aria-hidden="true">#</a></h3><h3 id="如何解决-mysql-主从同步的延时问题" tabindex="-1">如何解决 mysql 主从同步的延时问题？ <a class="header-anchor" href="#如何解决-mysql-主从同步的延时问题" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">如何实现 mysql 的读写分离？</span></span>
<span class="line"><span style="color:#A6ACCD;">其实很简单，就是基于主从复制架构，简单来说，就搞一个主库，挂多个从库，然后我们就单单只是写主库，然后主库会自动把数据给同步到从库上去。一般情况下，主库可以挂 4-5 个从库</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="为什么-mysql-要读写分离" tabindex="-1">为什么 MySQL 要读写分离？ <a class="header-anchor" href="#为什么-mysql-要读写分离" aria-hidden="true">#</a></h4><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">MySQL 主从复制原理的是啥？</span></span>
<span class="line"><span style="color:#A6ACCD;">MySQL 里有一个概念，叫 binlog 日志，就是每个增删改类的操作，会改变数据的操作，除了更新数据以外，对这个增删改操作还会写入一个日志文件，记录这个操作的日志。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">主库将变更写 binlog 日志，然后从库连接到主库之后，从库有一个 IO 线程，将主库的 binlog 日志拷贝到自己本地，写入一个中继日志中。接着从库中有一个 SQL 线程会从中继日志读取 binlog，然后执行 binlog 日志中的内容，也就是在自己本地再次执行一遍 SQL，这样就可以保证自己跟主库的数据是一样的。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">这里有一个非常重要的一点，就是从库同步主库数据的过程是串行化的，也就是说主库上并行的操作，在从库上会串行执行。所以这就是一个非常重要的点了，由于从库从主库拷贝日志以及串行执行 SQL 的特点，在高并发场景下，从库的数据一定会比主库慢一些，是有延时的。所以经常出现，刚写入主库的数据可能是读不到的，要过几十毫秒，甚至几百毫秒才能读取到。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">而且这里还有另外一个问题，就是如果主库突然宕机，然后恰好数据还没同步到从库，那么有些数据可能在从库上是没有的，有些数据可能就丢失了。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">所以 mysql 实际上在这一块有两个机制，一个是半同步复制，用来解决主库数据丢失问题；一个是并行复制，用来解决主从同步延时问题。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">这个所谓半同步复制，semi-sync 复制，指的就是主库写入 binlog 日志之后，就会将强制此时立即将数据同步到从库，从库将日志写入自己本地的 relay log 之后，接着会返回一个 ack 给主库，主库接收到至少一个从库的 ack 之后才会认为写操作完成了。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">所谓并行复制，指的是从库开启多个线程，并行读取 relay log 中不同库的日志，然后并行重放不同库的日志，这是库级别的并行。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">主从复制的原理</span></span>
<span class="line"><span style="color:#A6ACCD;">主从延迟问题产生的原因</span></span>
<span class="line"><span style="color:#A6ACCD;">主从复制的数据丢失问题，以及半同步复制的原理</span></span>
<span class="line"><span style="color:#A6ACCD;">并行复制的原理，多库并发重放 relay 日志，缓解主从延迟问题</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h4 id="mysql-主从复制原理" tabindex="-1">MySQL 主从复制原理 <a class="header-anchor" href="#mysql-主从复制原理" aria-hidden="true">#</a></h4><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">MySQL 主从同步延时问题（重点）</span></span>
<span class="line"><span style="color:#A6ACCD;">线上确实处理过因为主从同步延时问题，导致的线上的 bug，小型的生产事故</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">show status，Seconds_Behind_Master，你可以看到从库复制主库的数据落后了几 ms</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">其实这块东西我们经常会碰到，就比如说用了 mysql 主从架构之后，可能会发现，刚写入库的数据结果没查到，结果就完蛋了。。。。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">所以实际上你要考虑好应该在什么场景下来用这个 mysql 主从同步，建议是一般在读远远多于写，而且读的时候一般对数据时效性要求没那么高的时候，用 mysql 主从同步</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">所以这个时候，我们可以考虑的一个事情就是，你可以用 mysql 的并行复制，但是问题是那是库级别的并行，所以有时候作用不是很大</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">所以这个时候。。通常来说，我们会对于那种写了之后立马就要保证可以查到的场景，采用强制读主库的方式，这样就可以保证你肯定的可以读到数据了吧。其实用一些数据库中间件是没问题的。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">一般来说，如果主从延迟较为严重</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">分库，将一个主库拆分为 4 个主库，每个主库的写并发就 500/s，此时主从延迟可以忽略不计</span></span>
<span class="line"><span style="color:#A6ACCD;">打开 mysql 支持的并行复制，多个库并行复制，如果说某个库的写入并发就是特别高，单库写并发达到了 2000/s，并行复制还是没意义。28 法则，很多时候比如说，就是少数的几个订单表，写入了 2000/s，其他几十个表 10/s。</span></span>
<span class="line"><span style="color:#A6ACCD;">重写代码，写代码的同学，要慎重，当时我们其实短期是让那个同学重写了一下代码，插入数据之后，直接就更新，不要查询</span></span>
<span class="line"><span style="color:#A6ACCD;">如果确实是存在必须先插入，立马要求就查询到，然后立马就要反过来执行一些操作，对这个查询设置直连主库。不推荐这种方法，你这么搞导致读写分离的意义就丧失了</span></span>
<span class="line"><span style="color:#A6ACCD;">MySQL 主从延迟导致的生产环境的问题</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,9),r=[p];function c(i,o,t,b,y,m){return a(),n("div",null,r)}const d=s(e,[["render",c]]);export{A as __pageData,d as default};
