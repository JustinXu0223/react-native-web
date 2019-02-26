/**
 * @component base.js
 * @description 基础方法库
 * @time 2017/6/23
 * @author JUSTIN XU
 */

/** 延迟函数
 * */
export function delay(time = 1000) {
  return new Promise(resolve => setTimeout(() => resolve(time), time));
}

/** 防止按钮多次触发
* */
export const noDoublePress = {
  lastPressTime: 1,
  onPress(callback, time = 500) {
    const curTime = new Date().getTime();
    if (curTime - this.lastPressTime > time) {
      this.lastPressTime = curTime;
      callback();
    }
  },
};

/** Array 去重
 * */
export function uniqueArr(arr = [], type = 'id') {
  if (!arr.length) return arr;
  const hash = {};
  return arr.reduce((item, next) => {
    hash[next[type]] ? '' : hash[next[type]] = true && item.push(next);
    return item;
  }, []);
}
