const Phaser = {};
Phaser.Game = function(w, h, type, ele, options) {
  // 函数被new 运行， 构造函数
  console.log('构造函数');
  this.width = w;
  this.height = h;
}

let zombiegame = new Phaser.Game(800, 600);
console.log(zombiegame.width, zombiegame.height);