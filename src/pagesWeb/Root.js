import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
// import { Dimensions } from 'react-native';
import Loadable from 'react-loadable';

// constants
import { routers } from 'constants';

// components
import Loading from 'components/Loading';

// Common Stack
const AsyncDemo = Loadable({
  loader: () => import('./CommonStack/Demo'),
  loading: Loading,
});
//
// // Mine Stack
// const AsyncMine = Loadable({
//   loader: () => import('./MineStack/Mine'),
//   loading: Loading,
// });

// TabBar Stack
const AsyncTabBar = Loadable({
  loader: () => import('./TabBar'),
  loading: Loading,
});

class App extends React.Component {
  render() {
    const {
      props: {
        history,
      },
    } = this;
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={routers.demo} component={AsyncDemo} />
          <Route path={routers.root} component={AsyncTabBar} />
          <Route path="*" render={() => <Redirect to={routers.notFound} />} />
        </Switch>
      </Router>
    );
  }
}

App.defaultProps = {};

App.propTypes = {
  history: PropTypes.shape({
    go: PropTypes.func,
    goBack: PropTypes.func,
    goForward: PropTypes.func,
    listen: PropTypes.func,
    push: PropTypes.func,
    replace: PropTypes.func,
    location: PropTypes.shape({
      hash: PropTypes.string,
      pathname: PropTypes.string,
      search: PropTypes.string,
      state: PropTypes.any,
    }),
  }).isRequired,
};

export default App;
