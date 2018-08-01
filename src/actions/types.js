// 这种方式主要是实现唯一枚举来代替字符串
// export const INCREMENT_COUNTER = Symbol(1);
const nonce = Math.floor(Math.random() * 10000000);
export const DEMO = Symbol('DEMO');
