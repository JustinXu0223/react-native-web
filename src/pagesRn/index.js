/**
 * @component index.js
 * @description 路由配置
 * @time 2018/10/23
 * @author JUSTIN XU
 */
import { createSwitchNavigator } from 'react-navigation';

// constants
import routers from 'constants/routers.rn';

// pages
import AuthStack from './AuthStack';
import RootStack from './RootStack';
import AuthLoadingStack from './AuthLoading';

const RouteConfig = {
  [routers.auth]: AuthStack,
  [routers.root]: RootStack,
  [routers.authLoading]: AuthLoadingStack,
};

const NavigatorConfig = {
  initialRouteName: routers.root,
  cardStyle: { shadowColor: 'transparent' },
  headerMode: 'none',
};

export default createSwitchNavigator(RouteConfig, NavigatorConfig);
