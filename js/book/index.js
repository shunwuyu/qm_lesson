// 'use strict';
var Book = function(isbn, title, author) {
  // 构造函数 constructor
  console.log(this);
  // isbn 有一定的规则
  // if (isbn === undefined) 
  //   throw new Error('Book constructor requires an isbn');
  if (!this.checkIsbn(isbn))
    throw new Error('Book: Invalid ISBN.');

  this.isbn = isbn;
  this.title = title || 'No title Specified';
  this.author = author || 'No author Specified';
}
Book.prototype = {
  // 返回值 bool
  checkIsbn: function(isbn) {
    // console.log(isbn, isbn === undefined);
    if (isbn === undefined || typeof isbn !== 'string') {
      return false;
    }

    if (isbn.length != 10 && isbn.length != 13) {
      return false;
    }

    if (isbn.indexOf('x') ==  -1) {
      return false;
    }

    return true;
  },
  getIsbn: function() {
    return this.isbn;
  },
  setIsbn: function() {
    // isbn可以被随意的设置吗？ 超级管理员
    console.log('您当前没有权限');
  },
  getTitle: function() {
    return this.title;
  },
  setTitle: function(title) {
    this.title = title;
  },
  getAuthor: function() {
    return this.author;
  },
  setAuthor: function(author) {
    this.author = author
  }
}
// 函数的执行方式，决定this的指向
// 1。 做为普通函数 this 指向全局,浏览器window node 后端 global
// 当启用严格模式后， undefined
// 2. 作为对象的方法被调用时
let book = new Book('123456x123');
console.log(book.isbn, book.title, book.author);
console.log(book instanceof Book);
book.setTitle('昆拉');
// book.setAuthor('布尔');
book.author = '布尔';
console.log(book.isbn, book.title, book.author);
// 如何将属性私有化？ 
