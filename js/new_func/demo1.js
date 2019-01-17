// new ? 实例化过程是怎么底层？
// Otaku类 抽像概念 等待被new
// 宅
function Otaku(name, age) {
  this.name = name;
  this.age = age;
  this.habit = 'Games';
}
Otaku.prototype.strenth = 60;
Otaku.prototype.sayYourName = function() {
  console.log('I am ' + this.name);

}

// new 
// 1. 返回一个实例{} 声明， 拥有Otaku 函数中加的那些属性
// 2. 实例可以访问到Otaku.prototype 中的属性

// new ? js 关键字
function objectFactor(fn, ...args ) {
  console.log(arguments);
  var obj = new Object(),
  Constructor = [].shift.call(arguments);
  // console.log(arguments);
  obj.__proto__ = Constructor.prototype
  Constructor.apply(obj, arguments);
 
  return obj;
}
// 1 构造函数 2 其余是构造函数需要的参数
const didi = objectFactor(Otaku, 'Kevin', 18); 
didi.sayYourName();