import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

// constants
import { routers } from 'constants';

// components
import Loading from 'components/Loading';

// Auth Stack
const AsyncSignIn = Loadable({
  loader: () => import('./AuthStack/SignIn'),
  loading: Loading,
});

// Common Stack
const AsyncNotFound = Loadable({
  loader: () => import('./NotFound'),
  loading: Loading,
});

// Root Stack
const AsyncRoot = Loadable({
  loader: () => import('./Root'),
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
          <Route exact path={routers.notFound} component={AsyncNotFound} />
          <Route exact path={routers.signIn} component={AsyncSignIn} />
          <Route path={routers.root} component={AsyncRoot} />
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
