- 数据保存
  1. localStorage 小的， 结构简单的数据
  复杂 结合 JSON.stringify() 
  JSON.parse()  2-6M 间
  中奖次数和奖品，不用去后端取 
  2. cookie 
  uid=1000
    cookie 就是一个字符串， key=val;key2=val2  非常重要的信息， 并且在每次http请求时都会带上