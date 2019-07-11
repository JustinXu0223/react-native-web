/**
 * @component index.js
 * @description mock 数据
 * @time 2018/5/11
 * @author JUSTIN XU
 */
import axios from 'utils/request';
import MockAdapter from 'axios-mock-adapter';
import { getCountryList, getUserInfo } from './account';

const mock = new MockAdapter(axios); // 创建 MockAdapter 实例

function mapList(len = 5) {
  const arr = [];
  return (func) => {
    if (typeof func !== 'function') {
      throw new Error('params must be function');
    }
    if (len === 0 || !len) return arr;
    for (let i = 1; i <= len; i += 1) {
      arr.push(func());
      if (i === len) return arr;
    }
  };
}

export default {
  start() {
    // APP相关
    mock.onGet('/blockchains').reply(() => new Promise((resolve) => {
      setTimeout(() => {
        resolve([200, {
          data: [
            {
              name: 'bitcoin',
              short_code: 'BTC',
            },
            {
              name: 'litecoin',
              short_code: 'LTC',
            },
            {
              name: 'ethereumclassic',
              short_code: 'ETC',
            },
            {
              name: 'ethereum',
              short_code: 'ETH',
            },
            {
              name: 'bytom',
              short_code: 'BTM',
            },
            {
              name: 'bitcoincash',
              short_code: 'BCH',
            },
            {
              name: 'superbitcoin',
              short_code: 'SBTC',
            },
          ],
        }]); // 200 为返回状态码
      }, 600);
    }));
    // 用户信息
    mock.onGet('/user').reply(() => new Promise((resolve) => {
      setTimeout(() => {
        resolve([200, getUserInfo()]); // 200 为返回状态码
      }, 600);
    }));
    // 登录相关
    mock.onGet('/countries').reply(() => new Promise((resolve) => {
      setTimeout(() => {
        resolve([200, {
          data: [...mapList()(getCountryList)],
        }]); // 200 为返回状态码
      }, 600);
    }));
  },
};
