// var str = 'Visit Microsoft!';
// console.log(str.replace('Microsoft', 'alibaba'));
// var money = '$sdfgfxx$cdsbbd$';
// console.log(money.replace(/\$/g, '人民币'));

let html = `abc{{username}}edfcccc`;
let reg = /\{\{(.*)\}\}/gm;
console.log(reg.test(html), RegExp.$1);