import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  BSCTESTNET = 97
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = '0x0201c026BAF4D7Bb69Da980d5BB3b96F7592fea0'

// 这个是 type(UniswapV2Pair).creationCode 的hash值, 在通过create2创建Pair或者计算Pair合约地址时都会用到.
// 计算方式如下(在uniswap-v2-contracts项目的部署合约中有体现):
  /**
   *  1. 写在Factory合约的字段中
   *  bytes32 public constant INIT_CODE_PAIR_HASH = keccak256(abi.encodePacked(type(UniswapV2Pair).creationCode));
   *  2. 单独写一个方法和上面计算出来的是同一个
   *  function getInitCodePairHash() external view returns(bytes32){
   *    return keccak256(abi.encodePacked(type(UniswapV2Pair).creationCode));
   *  }
   */
export const INIT_CODE_HASH = '0x2dbffce25c0c3f56f5dd7046da4cbfabd48ee34cbf0ef3dc2a495a0da81c8885'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
