/**
 * @component index.js
 * @description web顶层页面
 * @time 2019/2/22
 * @author JUSTIN XU
 */
import React from 'react';
import { Provider } from 'mobx-react';
import Router from './pagesWeb';

import RootStore from './models';
// utils
import history from './utils/history';

class App extends React.Component {
  render() {
    return (
      <Provider rootStore={RootStore}>
        <Router history={history} />
      </Provider>
    );
  }
}

App.defaultProps = {};

App.propTypes = {};

export default App;
