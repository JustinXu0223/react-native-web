/**
 * @component index.js https://github.com/nuysoft/Mock/wiki/Basic
 * @description 权限相关
 * @time 2018/5/11
 * @author JUSTIN XU
 */
import Mock from 'mockjs';

// 获取城市列表
export function getCountryList() {
  return {
    mobile_code: Mock.Random.natural(1, 200),
    name_zh: Mock.Random.province(),
    name_en: Mock.Random.word(3, 5),
    id: Mock.Random.guid(),
  };
}

export function getUserInfo() {
  return '{"mobile": 2440.3499999999999,"mobile_code":86,"device_type":null,"device_token":null}';
}
