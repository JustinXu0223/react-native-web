/**
 * @component index.js
 * @description 全局入口
 * @time 2019/1/15
 * @author JUSTIN XU
 */
import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

// constants
import { routers, theme } from 'constants';

// components
import Loading from 'components/Loading';
import TabBarComponent from './components/TabBar.web';

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

const ContainerView = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-bottom: ${theme.tabBarHeight}px;
`;

class TabBar extends React.Component {
  render() {
    return (
      <ContainerView>
        <Switch>
          <Route exact path={routers.root} render={() => <Redirect to={routers.home} />} />
          <Route exact path={routers.home} component={AsyncHome} />
          <Route exact path={routers.mine} component={AsyncMine} />
          <Route path="*" render={() => <Redirect to={routers.notFound} />} />
        </Switch>
        <TabBarComponent />
      </ContainerView>
    );
  }
}

TabBar.defaultProps = {
};

TabBar.propTypes = {
};

export default TabBar;
