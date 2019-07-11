/**
 * @component index.js
 * @description 配置文件
 * @time 2019/2/21
 * @author JUSTIN XU
 */
export const {
  NODE_ENV,
  BABEL_ENV,
  APP_VERSION,
} = process.env;

export const isDev = NODE_ENV !== 'production';
