/**
 * @component index.js
 * @description 根路由配置
 * @time 2018/7/30
 * @author JUSTIN XU
 */
import { createStackNavigator } from 'react-navigation';

// constants
import routers from 'constants/routers.rn';

// pages
import TabStack from './TabStack/index';

const RouteConfigs = {
  /** Tab Stack */
  [routers.tabView]: TabStack,
};

const NavigatorConfig = {
  initialRouteName: routers.tabView,
  mode: 'card',
  headerMode: 'none',
  cardStyle: { shadowColor: 'transparent' },
};

export default createStackNavigator(RouteConfigs, NavigatorConfig);
