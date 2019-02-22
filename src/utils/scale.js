/**
 * @component scale.js
 * @description 缩放函数
 * @time 2018/8/6
 * @author JUSTIN XU
 */
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => {
  if (typeof size === 'string') return size;
  return size + ((scale(size) - size) * factor);
};

export {
  scale,
  verticalScale,
  moderateScale,
  width,
  height,
};
