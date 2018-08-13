// 这种方式主要是实现唯一枚举来代替字符串
import route from '../route';
const NS = `-${route.path}-${module.id}`;
export const GETINFO = `GETINFO${NS}`;

