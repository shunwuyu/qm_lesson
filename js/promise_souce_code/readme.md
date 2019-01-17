手写Promis A+ 规范

js 回调 解决异步 出现了倒金塔式的回调地狱
Promise A+ 规范 
一个类， 构造函数 resolve? reject ?
返回的就是promise实例  then 方法 

1. Promise 将executor 封装在构造函数内部，
并提供resolve reject 两个函数给executor到时回调， 
2. then 是同步的， 跟promise 构造函数一样， 属于语法的一方面， 将onResolveFullfulled onRejected 存储起来，并与this 绑定， 
3. executor 高阶函数 才是真正的主战场， 负责
this.status  this.reason this.value 的处理