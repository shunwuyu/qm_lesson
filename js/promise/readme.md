- 多个promise 对象如何只用一条then 链，解决异步问题， 让代码同步执行
 new Promise((resolve, reject) => {
   异步执行的代码，   resolve, reject
   resolve(123)
 }) 
 每个Promise对象都是可以thenable的
 在then 的函数里 
 then(res => res.json())
 res.json() 也是一个Promise 
 显示的返回一个promise对象 ，继续执行下去
 不如await 优秀， 

- indexDB 让前端释放野心的数据库，前端的mongodb
  1. request 
    db = window.indexedDB().open(dbname, dbversion)
  2. 异步的， 
    onsuccess 开始数据业务
    onupgradeneeded 更新数据库
    db.createObjectStore()
    objectStore.createIndex('email', 'email', { unique: true })
  3. 事务 transaction 让数据存储更安全，
    add  request onsuccess 
