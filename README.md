# hxexpress
做为第一个node编写的服务器端，希望能一直的优化下去，作为第一个，也是唯一一个简单的node框架。

- 使用babel
- 使用winston和express-winston组成日志系统
- 使用pm2（发布后），nodemon（开发）管理进程
- 使用cross-env和config-lite管理config文件
- 使用mongodb和mongoose管理db
- 使用connect-history-api-fallback解决SPA的历史回顾

### 目录结构

```
.
├── config                         配置文件夹
│   ├── default.js                 默认配置
│   ├── dev.js                     开发调试配置
│   └── production.js              线上配置（直接配置在线上运行文件中）
├── logs                           日志文档
│   ├── success.log                
│   └── error.log  
├── public
├── src                            main目录
│   ├── controllers                C 目录    
│   ├── models                     M 目录    
│   ├── routes                     路由，用于将C和url匹配    
│   ├── modules                    模块    
│   └── app.js                     
├── views                          V 目录
├── www                            入口文件
```