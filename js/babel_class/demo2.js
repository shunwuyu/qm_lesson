"use strict";

// class Person {
//   // es6 constructor
//   constructor () {
//     this.name = name;
//   }
//   sayHello () {
//     return this.name;
//   }
// }


function Person(name) {
  this.name = name;
}
Person.prototype = {
  sayHello: function sayHello() {
    return this.name;
  }
};
console.log(Object.keys(Person.prototype));
console.log(Object.getOwnPropertyNames(Person.prototype));
// 让我们的"构造函数"不可以当做一般的函数来运行
// function _classCallCheck(instance, Constructor) {
//   if (! (instance instanceof Constructor)) {
//     throw new TypeError("Cannot call a class as a function");
//   }
// }
// function Person(name) {
//   // 将Person 函数做为普通函数来调用， 
//   _classCallCheck(this, Person);
//   this.name = name;
// }

// Person('唐唐');
// es5 构造函数
// function Person(name) {
//   this.name = name;
// }
// Person.prototype = {
//   sayHello: function() {
//     return this.name;
//   }
// }
// var  lilei = new Person('lilei');
// console.log(lilei);
// var hanmeimei = Person('hanmeimei');
// console.log(hanmeimei);
