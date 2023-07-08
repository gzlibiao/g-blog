# 类型

```java
boolean bool; false/true 1字节
byte b; 1字节
char c; 2
short s; 2字节
int i; 4字节
float f; 4字节
long l; 8字节
double d; 8字节
每个字节八位一个符号位 -2 31 - 2 31次方
```

# cas 乐观锁

冲突检测数据,更新

# aqs 抽象队列锁

AQS 内部维护了一个 CLH 队列来管理锁。线程会首先尝试获取锁，如果失败就将当前线程及等待状态等信息包装成一个 node 节点加入到同步队列 sync queue 里。 接着会不断的循环尝试获取锁，条件是当前节点为 head 的直接后继才会尝试。如果失败就会阻塞自己直到自己被唤醒。而当持有锁的线程释放锁的时候，会唤醒队列中的后继线程。

# CLH(Craig,Landin,and Hagersten)队列

是一个虚拟的双向队列（虚拟的双向队列即不存在队列实例，仅存在结点之间的关联关系）。AQS 是将每条请求共享资源的线程封装成一个 CLH 锁队列的一个结点（Node）来实现锁的分配。

# Java8-Optional API

在文章的开头，先说下 NPE 问题，NPE 问题就是，我们在开发中经常碰到的 NullPointerException.假设我们有两个类，他们的 UML 类图如下图所示：

![图片](http://cdn.llinp.cn/imgs/202206161025220.png)

在这种情况下，有如下代码

```java
user.getAddress().getProvince();
```

这种写法，在 user 为 null 时，是有可能报 NullPointerException 异常的。为了解决这个问题，于是采用下面的写法

```java
if(user!=null){
    Address address = user.getAddress();
    if(address!=null){
        String province = address.getProvince();
    }
}
```

这种写法是比较丑陋的，为了避免上述丑陋的写法，让丑陋的设计变得优雅。JAVA8 提供了 Optional 类来优化这种写法，接下来的正文部分进行详细说明

## 1**API 介绍**

先介绍一下 API，与其他文章不同的是，本文采取类比的方式来讲，同时结合源码。而不像其他文章一样，一个个 API 罗列出来，让人找不到重点。

#### 1、Optional(T value),empty(),of(T value),ofNullable(T value)

这四个函数之间具有相关性，因此放在一组进行记忆。

先说明一下，`Optional(T value)`，即构造函数，它是 private 权限的，不能由外部调用的。其余三个函数是 public 权限，供我们所调用。那么，Optional 的本质，就是内部储存了一个真实的值，在构造的时候，就直接判断其值是否为空。好吧，这么说还是比较抽象。直接上`Optional(T value)`构造函数的源码，如下图所示

![图片](http://cdn.llinp.cn/imgs/202206161025207.png)

那么，of(T value)的源码如下

```java
public static <T> Optional<T> of(T value) {
    return new Optional<>(value);
}
```

也就是说 of(T value)函数内部调用了构造函数。根据构造函数的源码我们可以得出两个结论:

- 通过`of(T value)`函数所构造出的 Optional 对象，当 Value 值为空时，依然会报 NullPointerException。
- 通过`of(T value)`函数所构造出的 Optional 对象，当 Value 值不为空时，能正常构造 Optional 对象。

除此之外呢，Optional 类内部还维护一个 value 为 null 的对象，大概就是长下面这样的

```java
public final class Optional<T> {
    //省略....
    private static final Optional<?> EMPTY = new Optional<>();
    private Optional() {
        this.value = null;
    }
    //省略...
    public static<T> Optional<T> empty() {
        @SuppressWarnings("unchecked")
        Optional<T> t = (Optional<T>) EMPTY;
        return t;
    }
}
```

那么，`empty（）`的作用就是返回 EMPTY 对象。

好了铺垫了这么多，可以说`ofNullable(T value)`的作用了，上源码

```java
 public static <T> Optional<T> ofNullable(T value) {
    return value == null ? empty() : of(value);
}
```

好吧，大家应该都看得懂什么意思了。相比较`of(T value)`的区别就是，当 value 值为 null 时，of(T value)会报 NullPointerException 异常；`ofNullable(T value)`不会 throw Exception，`ofNullable(T value)`直接返回一个`EMPTY`对象。

那是不是意味着，我们在项目中只用`ofNullable`函数而不用 of 函数呢?

不是的，一个东西存在那么自然有存在的价值。当我们在运行过程中，不想隐藏`NullPointerException`。而是要立即报告，这种情况下就用 Of 函数。但是不得不承认，这样的场景真的很少。博主也仅在写 junit 测试用例中用到过此函数。

#### 2、orElse(T other)，orElseGet(Supplier other)和 orElseThrow(Supplier exceptionSupplier)

这三个函数放一组进行记忆，都是在构造函数传入的 value 值为 null 时，进行调用的。`orElse`和`orElseGet`的用法如下所示，相当于 value 值为 null 时，给予一个默认值:

```java
@Test
public void test() {
    User user = null;
    user = Optional.ofNullable(user).orElse(createUser());
    user = Optional.ofNullable(user).orElseGet(() -> createUser());

}
public User createUser(){
    User user = new User();
    user.setName("zhangsan");
    return user;
}
```

这两个函数的区别：当 user 值不为 null 时，`orElse`函数依然会执行 createUser()方法，而`orElseGet`函数并不会执行 createUser()方法，大家可自行测试。

至于 orElseThrow，就是 value 值为 null 时,直接抛一个异常出去，用法如下所示

```java
User user = null;
Optional.ofNullable(user).orElseThrow(()->new Exception("用户不存在"));
```

#### `3、map(Function mapper)和flatMap(Function> mapper)`

这两个函数放在一组记忆，这两个函数做的是转换值的操作。

直接上源码

```java
 public final class Optional<T> {
    //省略....
     public<U> Optional<U> map(Function<? super T, ? extends U> mapper) {
        Objects.requireNonNull(mapper);
        if (!isPresent())
            return empty();
        else {
            return Optional.ofNullable(mapper.apply(value));
        }
    }
    //省略...
     public<U> Optional<U> flatMap(Function<? super T, Optional<U>> mapper) {
        Objects.requireNonNull(mapper);
        if (!isPresent())
            return empty();
        else {
            return Objects.requireNonNull(mapper.apply(value));
        }
    }
}
```

这两个函数，在函数体上没什么区别。唯一区别的就是入参，map 函数所接受的入参类型为`Function<? super T, ? extends U>`，而 flapMap 的入参类型为`Function<? super T, Optional<U>>`。

在具体用法上，对于 map 而言：

如果 User 结构是下面这样的

```java
public class User {
    private String name;
    public String getName() {
        return name;
    }
}
```

这时候取 name 的写法如下所示

```java
String name = Optional.ofNullable(user).map(u-> u.getName()).get();
```

对于 flatMap 而言:

如果 User 结构是下面这样的

```java
public class User {
    private String name;
    public Optional<String> getName() {
        return Optional.ofNullable(name);
    }
}
```

这时候取 name 的写法如下所示

```java
String name = Optional.ofNullable(user).flatMap(u-> u.getName()).get();
```

#### 4、isPresent()和 ifPresent(Consumer consumer)

这两个函数放在一起记忆，`isPresent`即判断 value 值是否为空，而`ifPresent`就是在 value 值不为空时，做一些操作。这两个函数的源码如下

```java
public final class Optional<T> {
    //省略....
    public boolean isPresent() {
        return value != null;
    }
    //省略...
    public void ifPresent(Consumer<? super T> consumer) {
        if (value != null)
            consumer.accept(value);
    }
}
```

需要额外说明的是，大家千万不要把

```java
if (user != null){
   // TODO: do something
}
```

给写成

```java
User user = Optional.ofNullable(user);
if (Optional.isPresent()){
   // TODO: do something
}
```

因为这样写，代码结构依然丑陋。博主会在后面给出正确写法

至于`ifPresent(Consumer<? super T> consumer)`，用法也很简单，如下所示

```java
Optional.ofNullable(user).ifPresent(u->{
    // TODO: do something
});
```

#### 5、filter(Predicate predicate)

不多说，直接上源码

```java
public final class Optional<T> {
    //省略....
   Objects.requireNonNull(predicate);
        if (!isPresent())
            return this;
        else
            return predicate.test(value) ? this : empty();
}
```

filter 方法接受一个 `Predicate` 来对 `Optional` 中包含的值进行过滤，如果包含的值满足条件，那么还是返回这个 Optional；否则返回 `Optional.empty`。

用法如下

```
Optional<User> user1 = Optional.ofNullable(user).filter(u -> u.getName().length()<6);
```

如上所示，如果 user 的 name 的长度是小于 6 的，则返回。如果是大于 6 的，则返回一个 EMPTY 对象。

## 2**实战使用**

### 例一

在函数方法中

以前写法

```java
public String getCity(User user)  throws Exception{
        if(user!=null){
            if(user.getAddress()!=null){
                Address address = user.getAddress();
                if(address.getCity()!=null){
                    return address.getCity();
                }
            }
        }
        throw new Excpetion("取值错误");
    }
```

JAVA8 写法

```java
public String getCity(User user) throws Exception{
    return Optional.ofNullable(user)
                   .map(u-> u.getAddress())
                   .map(a->a.getCity())
                   .orElseThrow(()->new Exception("取指错误"));
}
```

### 例二

比如，在主程序中

以前写法

```java
if(user!=null){
    dosomething(user);
}
```

JAVA8 写法

```java
 Optional.ofNullable(user)
    .ifPresent(u->{
        dosomething(u);
});
```

### 例三

以前写法

```java
public User getUser(User user) throws Exception{
    if(user!=null){
        String name = user.getName();
        if("zhangsan".equals(name)){
            return user;
        }
    }else{
        user = new User();
        user.setName("zhangsan");
        return user;
    }
}
```

java8 写法

```java
public User getUser(User user) {
    return Optional.ofNullable(user)
                   .filter(u->"zhangsan".equals(u.getName()))
                   .orElseGet(()-> {
                        User user1 = new User();
                        user1.setName("zhangsan");
                        return user1;
                   });
}
```

其他的例子，不一一列举了。不过采用这种链式编程，虽然代码优雅了。但是，逻辑性没那么明显，可读性有所降低，大家项目中看情况酌情使用。

# cas 自旋锁

比较并且交换 atomic 存 thread 循环比较当前 tomic 为空则一直自旋直到完成之后,一直循环 cpu 占用高

# 线程池的拒绝策略

```java
extends Thread run start
implements Runnable run start
implements Callable call submit shutdown

拒绝策略	拒绝行为
AbortPolicy	抛出RejectedExecutionException（默认）抛出异常
DiscardPolicy	什么也不做，直接忽略	忽略提交的任务
DiscardOldestPolicy	丢弃执行队列中最老的任务，尝试为当前提交的任务腾出位置    丢弃老的任务,将新任务排进队列
CallerRunsPolicy	直接由提交任务者执行这个任务  直接由提交任务者执行此任务

```

# Java 线程池的完整构造函数

```java
public ThreadPoolExecutor(
  int corePoolSize, // 正式工数量（核心线程数）
  int maximumPoolSize, // 工人数量上限，包括正式工和临时工（线程上限)
  long keepAliveTime, TimeUnit unit, // 临时工游手好闲的最长时间，超过这个时间将被解雇(非核心线程最大生命期)
  BlockingQueue<Runnable> workQueue, // 排期队列（任务队列）
  ThreadFactory threadFactory, // 招人渠道（创建线程的工厂）
  RejectedExecutionHandler handler) // 拒单方式（拒绝策略）
```
