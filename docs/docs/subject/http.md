## 三次握手四次挥手

```
客户端 你可以收到消息吗？
服务端 可以的，你呢？
客户端 我也可以 开始吧
```

## 为什么不是 2 次 4 次

```
 两次无法保证 客户端收到服务端的响应

 3次已经可以确定连接了 4次没必要
```

## 四次挥手

```
浏览器发送给服务器，我报文发送完了，你准备关闭吧
服务器发送给浏览器，我报文接收完了，准备关闭，你也准备吧
服务器发送给浏览器，我响应报文发送完毕，你准备关闭吧
浏览器发起，告诉服务器，报文接收完毕，准备关闭，你也关闭吧
```

### 为什么要 4 次挥手？

```
确保数据能够完整传输。

当被动方收到主动方的FIN报文通知时，它仅仅表示主动方没有数据再发送给被动方了。

但未必被动方所有的数据都完整的发送给了主动方，所以被动方不会马上关闭SOCKET,它可能还需要发送一些数据给主动方后，

再发送FIN报文给主动方，告诉主动方同意关闭连接，所以这里的ACK报文和FIN报文多数情况下都是分开发送的。
```

## http和websocket区别

## 实现 Web 端即时通讯的方法
实现即时通讯主要有四种方式，它们分别是
轮询、长轮询(comet)、长连接(SSE)、WebSocket。
它们大体可以分为两类，
一种是在 HTTP 基础上实现的，包括短轮询、comet 和 SSE；
另一种不是在 HTTP 基础上实现是，即 WebSocket。

下面分别介绍一下这四种轮询方式，以及它们各自的优缺点。

### 端轮询
短轮询的基本思路就是浏览器每隔一段时间向浏览器发送 http 请求，服务器端在收到请求后，不论是否有数据更新，都直接进行响应。这种方式实现的即时通信，本质上还是浏览器发送请求，服务器接受请求的一个过程，通过让客户端不断的进行请求，使得客户端能够模拟实时地收到服务器端的数据的变化。

这种方式的优点是比较简单，易于理解，实现起来也没有什么技术难点。缺点是显而易见的，这种方式由于需要不断的建立 http 连接，严重浪费了服务器端和客户端的资源。尤其是在客户端，距离来说，如果有数量级想对比较大的人同时位于基于短轮询的应用中，那么每一个用户的客户端都会疯狂的向服务器端发送 http 请求，而且不会间断。人数越多，服务器端压力越大，这是很不合理的。

因此短轮询不适用于那些同时在线用户数量比较大，并且很注重性能的 Web 应用


### 长轮询
ajax实现:

当服务器收到客户端发来的请求后,服务器端不会直接进行响应，而是先将这个请求挂起，然后判断服务器端数据是否有更新。如果有更新，则进行响应，如果一直没有数据，则到达一定的时间限制(服务器端设置)才返回。 。 客户端JavaScript响应处理函数会在处理完服务器返回的信息后，再次发出请求，重新建立连接。

长轮询和短轮询比起来，明显减少了很多不必要的http请求次数，相比之下节约了资源。长轮询的缺点在于，连接挂起也会导致资源的浪费。
```js
function ajax(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET','/user');
    xhr.onreadystatechange = function(){
          ajax();
    };
    xhr.send();
}
```
   
轮询与长轮询都是基于HTTP的，两者本身存在着缺陷:轮询需要更快的处理速度；长轮询则更要求处理并发的能力;两者都是“被动型服务器”的体现:服务器不会主动推送信息，而是在客户端发送ajax请求后进行返回的响应。而理想的模型是"在服务器端数据有了变化后，可以主动推送给客户端",这种"主动型"服务器是解决这类问题的很好的方案。Web Sockets就是这样的方案。

### 长连接
SSE 是 HTML5 新增的功能，全称为 Server-Sent Events。它可以允许服务推送数据到客户端。SSE 在本质上就与之前的长轮询、短轮询不同，虽然都是基于 http 协议的，但是轮询需要客户端先发送请求。而 SSE 最大的特点就是不需要客户端发送请求，可以实现只要服务器端数据有更新，就可以马上发送到客户端。

SSE 的优势很明显，它不需要建立或保持大量的客户端发往服务器端的请求，节约了很多资源，提升应用性能。并且后面会介绍道，SSE 的实现非常简单，并且不需要依赖其他插件
```java
//map
HashMap<String, Thread> jobMap = new HashMap<>();
//线程池
ExecutorService newExecutorService = Executors.newCachedThreadPool();

@GetMapping("/query/status/{lastCount}")
public SseEmitter query(@PathVariable Integer lastCount){
    SseEmitter sseEmitter = new SseEmitter(0L);
    Thread todo = jobMap.get("todo");
    if (ObjectUtil.isNotEmpty(todo)){
        todo.interrupt();
    }
    String token = SecurityUtils.getToken();
    LoginUser loginUser = AuthUtil.getLoginUser(token);
    AtomicInteger recordDataToDo = new AtomicInteger();
    if (ObjectUtil.isNotEmpty(loginUser)){
        newExecutorService.execute(()->{
            try {
                Thread thread = Thread.currentThread();
                jobMap.put("todo",thread);
                while (true){
                    recordDataToDo.set(alarmRecordService.selectAlarmStatus());
                    thread.sleep(2000);
                    if (lastCount == recordDataToDo.get() &&ObjectUtil.isNotEmpty(AuthUtil.getLoginUser(token))){
                        continue;
                    }else {
                        break;
                    }
                }
                if ( lastCount != recordDataToDo.get()){
                    sseEmitter.send(recordDataToDo);
                    System.out.println("信息发送成功");
                    System.out.println(recordDataToDo);
                    sseEmitter.complete();
                    System.out.println("完成");
                }
            } catch (IOException | InterruptedException e ) {
                sseEmitter.completeWithError(e);
            }
        });
    }else {
        throw new InterfaceException(1001,"参数异常");
    }
    return sseEmitter;

}
```

### websocket
WebSocket 是 Html5 定义的一个新协议，与传统的 http 协议不同，该协议可以实现服务器与客户端之间全双工通信。简单来说，首先需要在客户端和服务器端建立起一个连接，这部分需要 http。连接一旦建立，客户端和服务器端就处于平等的地位，可以相互发送数据，不存在请求和响应的区别。

WebSocket 的优点是实现了双向通信，缺点是服务器端的逻辑非常复杂。现在针对不同的后台语言有不同的插件可以使用。


### 四种 Web 即时通信技术比较
　　从兼容性角度考虑，短轮询>长轮询>长连接 SSE>WebSocket；

从性能方面考虑，WebSocket>长连接 SSE>长轮询>短轮询