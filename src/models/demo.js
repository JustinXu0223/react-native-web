/*
 * @component demo.js
 * @description demo store
 * @time 2019/7/11
 * @author JUSTIN
 */
import { action, observable, computed } from 'mobx';
import autobind from 'autobind-decorator';

import { delay } from 'utils/base';

import { initList } from './initialState';

@autobind
class DemoStore {
  @observable demoList = initList([
    {
      id: 1,
      name: 'First',
      number: 0,
    }, {
      id: 2,
      name: 'Second',
      number: 10,
    }, {
      id: 3,
      name: 'Third',
      number: 20,
    },
  ]);

  @computed get getCounter() {
    const { list } = this.demoList;
    return list.reduce((prevValue, currValue) => prevValue + currValue.number, 0);
  }

  @action async incrementReq({ id }) {
    try {
      this.demoList.loading = true;
      await delay();
      const { list } = this.demoList;
      const data = list.map((item) => {
        if (item.id === id) item.number += 1;
        return item;
      });
      this.demoList.list = data;
    } catch (e) {
      //
    } finally {
      this.demoList.loading = false;
    }
  }

  @action async decreaseReq({ id }) {
    try {
      this.demoList.loading = true;
      await delay();
      const { list } = this.demoList;
      const data = list.map((item) => {
        if (item.id === id) item.number -= 1;
        return item;
      });
      this.demoList.list = data;
    } catch (e) {
      //
    } finally {
      this.demoList.loading = false;
    }
  }
}

export default DemoStore;
