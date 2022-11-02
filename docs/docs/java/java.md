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
