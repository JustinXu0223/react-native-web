import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

// constants
import routers from 'constants/routers.web';

// components
import Loading from 'components/Loading';

// Home Stack
const AsyncHome = Loadable({
  loader: () => import('./HomeStack/Home'),
  loading: Loading,
});

// Mine Stack
const AsyncMine = Loadable({
  loader: () => import('./MineStack/Mine'),
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
          <Route exact path={routers.root} component={AsyncHome} />
          <Route exact path={routers.home} component={AsyncHome} />
          <Route exact path={routers.mine} component={AsyncMine} />
          {/* <Route path={routers.root} component={AsyncRoot} /> */}
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
