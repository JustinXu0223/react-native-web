/**
 * @component timer.js
 * @description 倒计时方法库
 * @time 2017/4/3
 * @author JUSTIN XU
 */
export const startCountdown = ({ seconds, loopFunc, doneFunc } = {}) => {
  if (Number.isNaN(Number(seconds))) throw TypeError('First parameter cannot be converted to number');
  if (typeof loopFunc !== 'function') throw TypeError('Second Parameter should be a function');
  if (typeof doneFunc !== 'function') throw TypeError('Third Parameter should be a function');
  let countdown = seconds;
  return setTimeout(function timeout() {
    countdown -= 1;
    if (countdown > 0) {
      loopFunc(countdown, setTimeout(timeout, 1000));
    } else {
      doneFunc();
    }
  }, 1000);
};
