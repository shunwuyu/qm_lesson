1. 一切资源皆可打包 webpack bundle 
import logo from './logo.svg' 图片也可引入到js 中， 参与js 的运算
在 react里引入css img 
2. 路由接管一切， 配置在最前面 
<Router>
  <Route path="" component=""/>
</Router>
有两种路由 BrowserRouter（高级浏览器 mobile, URL 更好理解 ） HashRouter(兼容好)
history.pushState(state, title, url);
