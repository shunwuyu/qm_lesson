闭包是指那些能够访问自由变量的函数
函数局部作用域限制自由 scope  作用域链的角度来分析
自由变量是可以在函数中使用， 但不是函数的参数或局部变量的变量
一切函数皆是闭包
var a = 1;
function foo() {
  console.log(a)
}

4. 上下文环境 生成的过程
  
执行上下文栈 
