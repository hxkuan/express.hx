# hxexpress
做为第一个node编写的服务器端，希望能一直的优化下去，作为第一个，也是唯一一个简单的node框架。

- 使用babel
- 使用winston和express-winston组成日志系统
- 使用pm2（发布后），nodemon（开发）管理进程
- 使用cross-env和config-lite管理config文件
- 使用mongodb和mongoose管理db
- 使用connect-history-api-fallback解决SPA的历史回顾

### 目标功能

- [x] babel的使用 -- 完成
- [x] 进程管理 -- 完成
- [x] 数据库管理 -- 完成
- [x] 数据库基础功能封装 -- 未完成
- [x] 配置文件的管理 -- 完成
- [x] 日志系统 -- 完成
- [x] 日志文件优化-按天管理 -- 未完成
- [x] 报错提示页面 -- 须要完善
- [x] cookie，session加入 -- 完成
- [x] 登录验证（token，refresh_token,sessionId-手机端的登录） -- 未完成
- [x] 文件上传，下载功能 -- 未完成
- [x] Helmet，安全保护--未完成

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