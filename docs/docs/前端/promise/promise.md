#### api

promise.all 所有的 resolve
promise.race 第一个成功 resolve 的
promise.any
promise.allSellect

#### 手写 promise

```

class Promise{
  cbs=[]

  constructor(invoke){
    invoke(this.resolve.bind(this));
  }

  then(callback){
    tis.cbs.push(callback);
  }

  resolve(value){
    this.cbs.forEach(c=>{
      c(value);
    })
  }
}
```
