为什么会出现跨域问题？
浏览器的同源策略限制， 浏览器会拒绝跨域请求。
场景
1. 小a登录了网银网站， 小a 所在浏览器记录了网银返馈的cookie 
2. 这时他QQ上收到链接， 澳门赌声， 
3. 他点开这个链接， 网站b就可以携带浏览器设置的cookie 向网银系统上发送请求

并不是拒绝所有的跨域请求， 实际上拒绝的是跨域的读操作。
- 通常浏览器允许进行跨域写操作  链接， 重定向 
- 跨域资源嵌入   cross origin embedding img script
- 不允许跨域读操作

非同源请求， 均为跨域。 相同的协议 端口和主机， 
工程化 域名不同https://book.douban.com/   https://music.douban.com/
接口不同 8080  3000     会出现跨域


JSONP 单纯地为了实现跨域请求而创造一个trick.
XMLHttpRequest 请求不同域上的数据 (Cross-origin read). 但是在页面上引入不同域上的js脚本却是可以的 cross origin embedding
触发回调， 可以将需要的data作为参数传入

兼容性好， 
缺点： JSONP只支持GET 操作， 
2.XMLHttpRequest相对于JSONP有着更好的错误处理机制