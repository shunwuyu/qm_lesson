new 到底做了什么？
let p = new Person();
p 是 Object类型, Person 函数类型 typeof 
1. Parent 被执行， 加了new 后， Parent 函数会在p的作用域下执行 , this 指向p 构造函数里的属性被当作p的属性被创建军
2. p.__proto__ 指向 Person.prototype p 继承了Parent.prototype中的属性和方法