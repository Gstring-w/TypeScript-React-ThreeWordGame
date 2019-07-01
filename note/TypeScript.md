# 模块解析

1. 使用 classic （以前版本，基本很少）
2. 使用 node 解析策略（现在版本基本都使用）

> 在配置文件 tsconfig.js 中加入 `{moduleReslution : "node" }`

# 接口和类型兼容性

> 接口属于扩展类型的一种

# 接口：interface

## 扩展类型：

- 类型别名 （存在一定的问题，后文会讲到）
- 枚举
- 接口
- 类

TypeScript 中接口的定义：用于约束函数、类、对象的契约（标准）。

### 契约（标准）的形式：

- API 文档，弱标准，人为开发时可能出现错误
- 代码约束，强标准
-

### 接口代码的书写

> 和类型别名一样，不会出现在编译结果里面

1. 接口约束对象

```TypeScript

interface User {
    name:string
    age:number
}

let u:User{
    name:"ssss",
    age:12
}

```

> 和类型别名基本没什么区别，但是后文约束类，只能使用接口约束，而不能使用类型别名约束

2. 接口约束函数

```

interface User{
    sayHello :()=>void // 表示sayHello是一个函数，函数没有参数，函数返回void
    sayHello():void
}
let u:User{
    sayHello(){
        consoloe.log("hello")
    }
}


// 普通函数


function sum (n:number[],callback:(n:number)=>boolean){
    n.filter
}

// 将约束函数提取出来

// 类型别名
type Confition = (n:number)=>boolean

// 接口
interface Confition {
    (n:number):boolean
}
// 类型别名也可以使用这种书写形式
type Confition{
      (n:number):boolean
}
// {}表示一个定界符，不表示对象
```

### 接口可以继承

> 继承可以节约代码，可以表示一定逻辑语义

```
// React 中的继承
class App extends React.Component{

}
```

- 接口继承代码书写

```

interface A1{
    T1:sting
}
interface A2 extends A1 {
    T2:number
}

let b: A2{
    T1 = '123',
    T2 = 123
}


// 可以继承多个
interface A1{
    T1:sting
}
interface A2 {
    T2:number
}

interface A3 extends A1,A2{
    T3:boolean
}


// 类型别名表示组合

type A {
    T1:sting
}

type B {
    T2:sting
}

type  C{
    T3:sting
} & A & B
```

> 使用类型别名实现类型的组合效果，可以通过`&`（交叉类型）

### 接口和类型别名的差异

- 子接口中不能覆盖父接口的成员
- 交叉类型如果重写类型的成员，不会覆盖，将会合并该成员，导致没法赋值

**readyOnly**

只读修饰符，修饰的目标是只读的

## 类型兼容性

> B->A 如果能完成赋值，则 B 和 A 类型兼容

**使用鸭子辨型法（子结构辩型法）**

> 目标类型需要某一些特征，赋值的类型只有能满足该特征即可

- 基本类型：完全匹配
- 对象类型：鸭子辩型法
  > 当直接使用对象字面量的时候，会执行更加严格的匹配方式

```
interface Duck{
    sound:"嘎嘎嘎" // 这是自变量，而不是字符串值
    swin():void
}


let person = {
    name:'伪装成鸭子的人',
    age:11,
    sound:"嘎嘎嘎" as "嘎嘎嘎" // 类型断言
    swin(){
        console.log("swimining")
    }
}

let duck:Duck = person; // 可以完成赋值


// 假设有个函数，用于得到服务器的某个接口的返回结果，是一个用户对象

interface ResponseUser{
    loginId:string,
    nickName:string,
    gender:"男"|"女"
}
```

- 函数类型：一切无比自然

**函数参数**：传递给目标函数的参数可以少，但不可以多。<br/>
**返回值**: 返回值必须类型匹配，要求需要返回值，必须要返回值；不要求返回，你随意

```

interface Condititon{
    (n:number,i:number):boolean
}
function sum (n:number,callback:Condition){
    let s = 0;
    n.forEach((item,index)=>{
        if(callback(item,index)){
            s +=item;
        }
    })
    return s;
}
const result = sum([1,2,3,4,5], n => n % 2 !== 0); // 注：第二个参数中没有传入第二个参数i，此时ts不会报错
```

# TS 中的类

> 面向对象思想

**属性**：使用属性列表来描述属性

在 tsconfig.js 中添加一个`"strictPropertyInitialization":"true"` 添加一个更加严格的属性检查

```
class User {
    name ?:string   // 可以没有这个属性
    age:number = 18 // 添加一个默认值
    private gender:"男"|"女"  // 可选属性 私有属性
    readonly id:number = 12   // 只读属性
    constructor(name:string,age:number){
        this.name= name;
        this.age = age;
    }
}

```

## 访问器

> 控制属性的读取和赋值（js 本身在 ES6 版本存在的语法糖）

```
class Test{
   private _id:number
    constructor(){

    }
    get id(){
        return this._id
    }
    set id(value:number){
        this._id = value
    }
}
// 不要在get id中存在id赋值，会出现无限递归执行set和get

```

# 泛型

#### 泛型可以解决的问题

例：

```
// js代码
// 从arr数组中取回前n项
function take(arr,n){
    if(n >= arr.length) return arr;

    const newArr = [];
    for(let i = 0; i < n,i++){
        newArr.push(arr[i]);
    }
    return newArr;
}
const newArr = take( [ 1, 23, 4, 5], 2 );

// take函数中第一个参数arr，无法保证这个一个number数组，或者是一个string数组
// 不能预先知道arr到底是什么 就不得不写any[]
```

有时书写某个函数是，会丢失一些类型信息（多个位置的类型应该保持一致或有关联的信息）

泛型：是指附属于函数、类、接口、类型别名之上的类型

## 在函数中使用泛型

在函数名之后写上`<泛型名称>`

> 泛型相当于是一个类型变量，在定义时，无法预知具体的类型是，可以用该变量来代替，只有到调用时，才能确定它的类型；很多时候，TS 会更具传入的参数，推导出类型；如果没有完成推导，默认会是一个空对象

```
// 改写之前的代码
function take<T = number>(arr:T[],n:number) T[]{ // 设置默认值
    if(n >= arr.length) return arr;

    const newArr:T[] = [];
    for(let i = 0; i < n,i++){
        newArr.push(arr[i]);
    }
    return newArr;
}
const newArr = take<string>( [ "1", "23", "4", "5"], 2 );
```

## 如何在类型别名，接口，类中使用泛型

```
// 回调函数，判断数组中中某一项是否满足条件
type CallBack = (n:number,i:number) => boolean;


type CallBack<T> = (n:T,i:number) => boolean;

```

## 多泛型

```
// 此时Array类中的泛型都是 一开始new Aarry(arr)中arr数组决定
class Array<T,K>{

    constructor(public arr:T[]){
        this.arr = arr;
    }
    pop():T{
        return this.arr.pop();
    }
}


// 此时泛型T 为传入arr的数组
class Array{

    constructor(public arr:T[]){
        this.arr = arr;
    }
    pop():T{
        return this.arr.pop();
    }
}
```
