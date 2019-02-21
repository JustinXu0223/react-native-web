/**
 * @component index.js
 * @description web顶层页面
 * @time 2019/2/22
 * @author JUSTIN XU
 */
import React from 'react';

import Router from './pagesWeb/index';

// utils
import history from './utils/history';

class App extends React.Component {
  render() {
    return (
      <Router history={history} />
    );
  }
}

App.defaultProps = {};

App.propTypes = {};

export default App;
