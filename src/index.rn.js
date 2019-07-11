/**
 * @component index.js
 * @description rn顶层页面
 * @time 2019/2/22
 * @author JUSTIN XU
 */
import React from 'react';
import { observer, Provider } from 'mobx-react';
import Router from './pagesRn';

import RootStore from './models';

@observer
class App extends React.Component {
  render() {
    return (
      <Provider rootStore={RootStore}>
        <Router />
      </Provider>
    );
  }
}

export default App;
