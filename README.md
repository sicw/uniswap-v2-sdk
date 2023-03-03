# Uniswap-v2 SDK
1. 从master 20200806提交记录中创建分支
2. 添加BSCTESTNET网络
3. [在uniswap-interface中引用该SDK](https://github.com/sicw/uniswap-interface/blob/deploy_uniswap_v2_bsc_testnet/README.md)

## 发布新sdk包到npmjs上
1. npm run build 打包
2. npm set registry https://registry.npmjs.org/          更改回原来的repo
3. npm login 或 npm login --registry registry.npmjs.org  登陆npmjs
4. npm publish 或 npm publish --registry registry.npmjs.org