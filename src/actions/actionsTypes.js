// 这种方式主要是实现唯一枚举来代替字符串
// export const INCREMENT_COUNTER = Symbol(1);
const nonce = Math.floor(Math.random() * 10000000);
export const EVT_GETINFO = `EVT_GETINFO${nonce}`;
export const EVT_SET_GETQUESTION_LIST = `EVT_SET_GETQUESTION_LIST${nonce}`;
