/**
 * @component index.js
 * @description 根modals
 * @time 2019/2/22
 * @author JUSTIN XU
 */
import autobind from 'autobind-decorator';

import DemoStore from './demo';

@autobind
class RootStore {
  constructor() {
    this.demoStore = new DemoStore();
  }
}

export default new RootStore();
