# Uniswap-v2 SDK
1. 从master 20200806提交记录中创建分支
2. 添加BSCTESTNET网络
3. [在uniswap-interface中引用该SDK](https://github.com/sicw/uniswap-interface/blob/deploy_uniswap_v2_bsc_testnet/README.md)

## 发布新sdk包到npmjs上
1. npm run build 打包
2. npm set registry https://registry.npmjs.org/          更改回原来的repo
3. npm login 或 npm login --registry registry.npmjs.org  登陆npmjs
4. npm publish 或 npm publish --registry registry.npmjs.org

# 运行sdk的test case需要做以下几件事情
1. 修改如下代码. 原有big.js代码babel解析时不支持const enum.所以这里更新@types/big.js 使big.js达到新版本. 里面更新了enum为属性.
2. 要使用Big.roundDown, 不能直接使用interface, 类型不支持。
```
const toFixedRounding = {
  [Rounding.ROUND_DOWN]: Big.roundDown,
  [Rounding.ROUND_HALF_UP]: Big.roundHalfUp,
  [Rounding.ROUND_UP]: Big.roundUp
}
```
3. 添加babel jest运行环境
1. 安装 https://jestjs.io/docs/getting-started#using-babel
2. 安装 https://jestjs.io/docs/getting-started#using-typescript