# typescript

## 简介

```
typescript是js的超集，主要学习ts里面的
1 原始类型
2 字面量类型
3 数组类型
4 函数类型
5 类类型
6 接口类型
7 类型别名
8 联合与交叉类型
9 枚举类型
0 泛型等类型元素，以及类型推断，类型断言，类型缩小，类型放大等特性，使得代码更加严谨
```

### 安装

```
yarn add typescript -g or npm install


// 初始化
tsc -init


// ts文件转译js
tsc 文件名

```

### 数据类型

#### 原始类型

```ts
/// string,number,boolean,symbol,null,undefined

let num:number=1;

let str:string="2"

let bool:boolean=true;

let sy:symbol=Symbol();

let undef:undefined=undefined;

let null:null=null;

let vd:void=undefined;

// 函数没有返回，那么就是void
function fn():void{
}

// 总结 ts的原始类型就是js的基础数据类型
```

#### 非原始类型

```ts
let o1: object = { name: 1 }
let o2: object = [1]
let o3: {} = { name: 1 }
let o4: {} = true
```

##### 数组类型

```ts
let arr1: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3] // 泛型
let arr3: [boolean, number, string] = [false, 2, '3'] //元组
let arr4: (string | number | object)[] = ['12121', 121, {}]
```

##### 联合类型

```ts
let o1: number | null = null

let admin: '张三' | '小明' = '张三'
let obj: { a: 1; b: 2; c: '3' }
obj = { a: 1, b: 2, c: 3 } // 错
obj = { a: 1, b: 2 } // 错
obj = { a: 1, b: 2, c: '3', d: '4' } // 对
```

#### 交叉类型

```ts
// & 交叉类型

let o1: number & string //可以这么写但是不可能满足
let o2: { name: string } & { age: number }
o2 = { name: 'sa', age: 18 }
```

如果有些参数是可选的，那么可以使用 `?` 来标识

```ts
let obj: { name: string; age: number; url?: string }
obj = { name: 'admin', age: 12 }
```

#### any 和 unknown 区别

```ts
不推荐使用any

let a: any = '1'
a.toFixed() // 不做校验

let a: unknown = 1
a.toFixed() // 做类型校验 变量a可以调用这个方法，但是会爆红

// `unknown` 不知道是什么类型，但是其实是有类型的

let num: unknown // 一个变成设置 unknown 类型代表不确定
num = '这是一个文字' // 给变量赋值了字符串，现在知道类型了

let res: string = num as string // 给 res 赋值 num 并通过关键字 as 告诉赋值的是什么类型

console.log(res) // 这是一个文字

// `unknown` 在有些时候还是很有意思的，比如在想将一个字符串赋值给一个数字的时候，这显然是不可以的，那么可以先使用 `as` 关键字赋值为 `unknown` 类型，再使用 `as` 转换为像要的类型
```

#### interface 类型

```ts
interface MyItf {
  name: string
  age: number
}
let obj: MyItf

obj = {
  name: 'sa',
  age: 18
}

// 数组接口
interface ArrItf {
  [idx: number]: number | string
}
let arr: ArrItf = [1, '2']

// 函数接口
interface FnItf {
  (p1: string, p2: number): void
}
let fn: FnItf = (p1: string, p2: number) => {}

// 接口多继承 同名 缺省
interface NameItf {
  name: string
}
interface AgeItf {
  age: number
}

interface PersonItf extends NameItf, AgeItf {
  sex: string
}

interface PersonItf{
  height:number
}
let p: PersonItf = {
  name: '张三'
  age:17,
  sex:'男',
  height:1.80
}

```

#### 联合交叉类型

```ts
// | and &

// && 优先 ||

let obj:
  | ({ name: string } & { age: number })
  | ({ name: number } & { age: string })

obj = {
  name: 'string',
  age: 18
} // 正确
obj = {
  name: 'string',
  age: '18'
} // 报错
```

#### 类型别名

```ts
type StrOrNum = string | number
let str: StrOrNum = '1'
str = 10

interface AItf {
  a: string
}
// 用类型iem报错接口上的某个属性类
type Atype = AItf['a']
let str2: Atype = '10'

type color = 'red' | 'blue' | (string & {})
```

##### 考点

```
interface 和 type区别

1.都可以用来定义类型
2.类型别名支持联合和交叉类型定义
3.类型别名不支持重复定义，接口可以
```

#### ts 函数

```ts
function fn(a: number, b: number): number {
  return a + b
}

// 接口定义函数类型
interface FnItf {
  (p: string): number
}

let fn: FnItf = (p: string) => {
  return 1
}

// 类型别名定义函数类型
type fType = (p: string) => void
let fn2: FnType = (p: string) => {}
```

#### ts 中 promise

```ts
interface ResItf {
  code: number
  data: object
  message: string
}

let p: Promise<ResItf> = new Promise((resolve, reject) => {
  resolve({ code: 1, data: [], message: 'ok' })
})

p.then((res) => {
  if (res.code === 0) {
  }
})
```

#### ts 中 定义全局接口

```ts
function Person(pms: string) {}

window.Person = Person
window.Person('')
// window 无法识别


global.d.ts文件->{
  export {}

  interface Window{
    function Person()=>void
  }
}
```

#### 枚举类型

```ts
// 列举数据
enum StatusCode {
  success = 200,
  paramsError = 400,
  serverError = 500
}
```

#### 泛型

```ts
function fn<T>(n: T): T {
  return n
}

fn<number>(123)
fn<string>('123')

// 泛型默认值
type ObjType<N, G = string> = { name: N; getName: () => G }

let obj: ObjType<number> = {
  name: 1,
  getName() {
    return '1'
  }
}
```

#### 类

```ts
class Person{
  myName:string,
  static title:string='title'
  protected readonly age:number
  constructor(myName:string,age:number){
    this.myName = myName;
    this.age=age;
  }
}

console.log(Person.title);

class Male extends Person{
  height:number
  constructor(myName:number,age:number,height:number){
    super(myName,age);
    this.height=height;
  }
}
let p=new Person('abc');
```

#### 工具类型

```ts
// 设置为可缺省类型
// Partial
type Partial<G> = { [T in keyof G]?: G[T] | undefined }
// 设置为不可缺省类型
// Require
type Require<G> = { [T in keyof G]-?: G[T] }

interface PItf {
  name: string
  age: number
  height?: number
}

/*
keyof T'name'|'age'

{
  name?:string|undefined
  age?:number|undefined
}

for(key in 对象)
*/

let obj: Partial<PItf> = {
  name: '',
  age: undefined
}

let obj2:Required<PItf>=>{
  name:'',
  age:12,
  height:1.80
}

```

#### in & keyof & typeof

```ts
// 让p1 可以接收其他类型的值
interface PItf {
  [idx: number]: number
  [idx: string]: string
}
// keyof 遍历 后面一般会跟接口 遍历接口的属性名定义到另一个类型别名上
type Ptype = keyof PItf // 'name' | 'age' | 'height'

let p1: Ptype
p1 = 'name'
p1 = 'age'

// in 遍历 后面一般跟type, 在已有类型别名上去拷贝属性定义另一个类型别名
type StrOrNum = string | number
type PItf = {
  [k in StrOrNum]: string
}

let obj: PItf = {
  a: '',
  10: ''
}

// typeof 一般用作 在已使用变量上去拷贝结构类型，声明另一个变量结构
let str = 'abcd'

type StrType = typeof str

let str1: StrType

let obj = {
  name: '',
  age: 18,
  height: 1.8
}
type OType = typeof obj

let obj1: OType = {
  name: 'abc',
  age: 18,
  height: 2.0
}
```

#### 泛型约束

```ts
// 一般是在 类型别名定义的类型 extends 约束到泛型上
type StrOrNum = string | number
interface PersonItf<N extends StrOrNum, G> {
  name: N
  getName: () => G
}

let obj: Person<number, number> = {
  name: 1,
  getName() {
    return 1
  }
}
```

#### never

`never` 和 `void` 不同，`never` 是什么结果都没有，比如下面函数就是什么结果都没有

```ts
function fun(): never {
  throw new Error('err')
}
```

#### Function

`Function` 类型的 `F` 必须要大写

函数参数也是可以限制类型的

如果某个参数的可选的，可以添加 `?` 标识符

```ts
function fun(a: number, b: number, c?: number) {
  return a + b
}
```

#### as 断言

普通断言，规定类型

```ts
let res = 123 as number
res = 999
console.log(res)
```

`const` 断言

比如使用 `let` 的时候声明一个变量，只要是字符串就可以随便修改

```ts
let a = '哈哈哈'
a = '你好'
console.log(a) // 你好
```

但是使用了 `const` 断言情况如下

```ts
let a = 'hello' as const
```

这样使用 const 断言之后，`a` 就不能随意赋值了，就只能赋值为 `hello`

也就相当于下面写法，`a` 只能是两个值其中的一个

```ts
const a: 'hello' | 'world' = 'hello'
```

断言数组

断言数组之后就会被转换为元组

```ts
const arr = ['123', 89, true] as const
```

定义的方式也可以像下面这样

```ts
const arr = <const>['123', 89, true]
```

> as const 就是根据具体的值转换类型

如果明确某个变量是存在的，可以使用 `!` 来表示非空断言，下面两种写法相等

```ts
const el1: HTMLDivElement = document.querySelector('.app') as const

const el: HTMLDivElement = document.querySelector('.app')!
```

## generics 泛型

泛型代表的是不确定的类型，宽泛的类型，比如下面例子中：

```ts
function msg(num) {
  return num
}

console.log(msg('hello'))
console.log(msg(true))
```

上面代码中，无论函数传入什么类型，都会直接返回指定的类型，但是这些类型都是 `any`，大多数时候我们并不希望是 `any` 所以这里就需要使用到了泛型。

所以就需要传递不同的参数的时候，动态的传递指定的类型。类型也是可以类型函数接收参数一样：

```ts
function msg<type>(num: type): type {
  return num
}

console.log(msg<string>('hello'))
console.log(msg<boolean>(true))
```

## 类型的继承

使用 `extends` 可以继承一个属性

```ts
// 这里让 t 继承一个 { length: number }
function getLength<t extends { length: number }>(target: t): number {
  // 类型 t 里面没用任何规范 可能不存在 length 属性
  return target.length
}

console.log(getLength('setting'))
console.log(getLength([1, 2, 3, 4]))
```

或者也可以继承一个有长度的类型，比如 `string`，或者联合类型

```ts
function getLength<t extends string>(target: t): number {
  return target.length
}

function getLength2<t2 extends string | any[]>(target: t2): number {
  return target.length
}
```

## interface

- 在类中使用

定义一个类型的接口，比如下面类的定义，使用 `implements` 定义接口

```ts
interface AdminInterface {
  name: string
  age: number
}

class Admin implements AdminInterface {
  name: string = '张三'
  age: number = 12
}
```

如果类中没有定义接口中约束的数据的话，就会报错

- 在对象中使用

```ts
interface UserInterface {
  name: string
  age: number
  sayName(): string
  [key: string]: any
}

const user: UserInterface = {
  name: 'admin',
  age: 12,
  sayName(): string {
    return this.name
  },
  sex: '男'
}
```

- 接口继承

```ts
interface UserName {
  name: string
}
interface UserAge extends UserName {
  age: number
}

const user: UserAge = {
  name: 'admin',
  age: 12
}
```

- 多接口

```ts
interface UserName {
  name: string
}
interface UserAge {
  age: number
}

class Admin implements UserName, UserAge {
  name: string = '张三'
  age: number = 12
}
```

- 定义数组

下面使用枚举和接口同时限定

```ts
enum SexType {
  GIRL,
  BOY
}

interface User {
  name: string
  age: Number
  sex: SexType
}

const user1: User = { name: '1', age: 12, sex: SexType.BOY }
const user2: User = { name: '211', age: 122, sex: SexType.GIRL }

const arr: User[] = [user1, user2]
```

- 定义函数

```ts
interface Pay {
  (num: number): boolean
}

const pay: Pay = (num: number): boolean => true
```

- 接口声明合并

接口重复声明最终会合并

```ts
interface User {
  num: number
}
interface User {
  name: string
}

const pay: User = {
  num: 123,
  name: '张三'
}
```

# 其它

## 生成 ts 配置文件

```shell
tsc --init
```

## 在 ts 中定义类

```ts
class User {
  name: string
  age: number
  constructor(n: string, a: number) {
    this.name = n
    this.age = a
  }
  info(): string {
    return `${this.name} 的年龄是 ${this.age}`
  }
}

const user: User = new User('张三', 12)

console.log(user.info())
```

## public 修饰符

`public` 修饰符可以定义某些变量是公开的，那上面的例子来举例：

```ts
class User {
  public name: string
  public age: number
  constructor(n: string, a: number) {
    this.name = n
    this.age = a
  }
  public info(): string {
    return `${this.name} 的年龄是 ${this.age}`
  }
}

const user: User = new User('张三', 12)

console.log(user.name) // 张三
console.log(user.age) // 12
console.log(user.info) // [Function: info]
```

## protected 修饰符

`protected` 是受保护的数据类型，就只能在类的内部进行使用，在类的外部不能进行方法。

但是可以通过类的继承进行访问

```ts
class User {
  protected name: string
  protected age: number
  constructor(n: string, a: number) {
    this.name = n
    this.age = a
  }
  protected info(): string {
    return `${this.name} 的年龄是 ${this.age}`
  }
}

// console.log(user.name) 不能访问
```

## private

`private` 修饰符仅限于当前构造函数使用，就算是继承的类也不能进行使用

```ts
class User {
  private name: string
  constructor(n: string) {
    this.name = n
  }
}

class Admin extends User {
  constructor(name) {
    super(name)
    // console.log(this.name) // 不能访问
  }
}
```

## readonly

`readonly` 修饰的熟悉是不能更改的，也就是说这个熟悉是只读的

```ts
class Axios {
  readonly url: string = 'www.baidu.con'
}

const axios = new Axios()
console.log(axios.url)

// axios.url = 'http://localhost' // 不能进行更改
```

但也不一定是绝对不能更改的，比如下面例子，类在初始化的时候，也是可以进行更改的

```ts
class Axios {
  readonly url: string = 'www.baidu.con'
  public constructor(url) {
    this.url = url
  }
}

const axios = new Axios('github.com')
console.log(axios.url)
```

## static

`static` 方法可以定义静态熟悉和方法，只能在类中进行访问

和原生是一样的

```ts
class User {
  static url: string = 'baidu.com'
}

const user = new User()

// console.log(user.url) // 获取不到

console.log(User.url)
```

## 单例模式

单利模式中，希望无论调用多少次的构造函数，它只执行一次，这样可以节约资源

```ts
class Axios {
  private static instance: Axios | null = null
  private constructor() {}

  static mark() {
    if (Axios.instance === null) {
      console.log('创建实例')

      Axios.instance = new Axios()
    }
    return Axios.instance
  }
}

Axios.mark()
// 创建实例
```

## get 和 set

```ts
class Article {
  private _article: any[] = []

  public get article(): any[] {
    return this._article
  }

  public set article(list: any[]) {
    this._article = list
  }
}

const art = new Article()
console.log(art.article)

art.article = [{ title: 'hello', name: 'http权威指南' }]
console.log(art.article)
```

## interface 和 type 两者不同点：

```

● interface（接口） 是 TS 设计出来用于定义对象类型的，可以对对象的形状进行描述。
● type 是类型别名，用于给各种类型定义别名，让 TS 写起来更简洁、清晰。
● type 可以声明基本类型、联合类型、交叉类型、元组，interface 不行
● interface 可以合并重复声明，type 不行


开发过程中尽量使用interface

```

## interface 和 type 相同点

```
● 都可以定义函数类型
● 都可以定义类型
```

```

```
