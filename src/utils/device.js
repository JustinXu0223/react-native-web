/**
 * @component device.js
 * @description 设备信息方法库
 * @time 2018/5/6
 * @author JUSTIN XU
 */
import { Platform, Dimensions, StatusBar } from 'react-native';

/**
 * device info
 */
export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

export const currPlatform = Platform.OS;

export function isWeb() {
  return currPlatform === 'web';
}

export function isIos() {
  if (isWeb()) {
    return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  }
  return currPlatform === 'ios';
}

export function isAndroid() {
  if (isWeb()) {
    return navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1;
  }
  return currPlatform === 'android';
}

// iPhoneX Xs
const X_WIDTH = 375;
const X_HEIGHT = 812;

// 是否 isIphoneX
export function isIphoneX() {
  if (isWeb()) {
    return /iphone/gi.test(navigator.userAgent) && (window.screen.height === X_HEIGHT && window.screen.width === X_WIDTH);
  }
  return (
    Platform.OS === 'ios'
    && !Platform.isPad
    && !Platform.isTVOS
    && ((deviceHeight === X_HEIGHT && deviceWidth === X_WIDTH)
      || (deviceHeight === X_WIDTH && deviceWidth === X_HEIGHT))
  );
}

// iPhoneXR XsMax
const XR_WIDTH = 414;
const XR_HEIGHT = 896;

// 判断是否为iphoneXR或XsMAX
export function isIphoneXR() {
  if (isWeb()) {
    return /iphone/gi.test(navigator.userAgent) && (window.screen.height === XR_HEIGHT && window.screen.width === XR_WIDTH);
  }
  return (
    Platform.OS === 'ios'
    && !Platform.isPad
    && !Platform.isTVOS
    && ((deviceHeight === XR_HEIGHT && deviceWidth === XR_WIDTH)
      || (deviceHeight === XR_WIDTH && deviceWidth === XR_HEIGHT))
  );
}

export function isIosIphoneX() {
  return isIos() && ((isIphoneX() || isIphoneXR()));
}

export function getStatusBarHeight(isFullScreen = false, iosHeight = 20) {
  if (isWeb()) return 0;
  if (isAndroid()) {
    return isFullScreen ? 0 : StatusBar.currentHeight;
  }
  if (isIos()) {
    if (isFullScreen) return 0;
    if (isIphoneX() || isIphoneXR()) {
      return 44;
    }
    return iosHeight;
  }
}

// 获取头部填充底部填充高度
export function getFooterBottom(isFullScreen = false) {
  if (isWeb()) return 0;
  if (isAndroid()) {
    return 0;
  }
  if (isIos()) {
    if (isIphoneX() || isIphoneXR()) {
      return isFullScreen ? 10 : 34;
    }
    return 0;
  }
}
