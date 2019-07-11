/**
 * @component index.js
 * @description 根路由配置
 * @time 2018/7/30
 * @author JUSTIN XU
 */
import { createStackNavigator } from 'react-navigation';

// constants
import { routers } from 'constants';

// models
import HelperScreen from './Modals/Helper';

// pages
import TabStack from './TabStack';

const RouteConfigs = {
  /** Modals Stack */
  [routers.helper]: HelperScreen,
  /** Tab Stack */
  [routers.tabView]: TabStack,
};

const NavigatorConfig = {
  initialRouteName: routers.tabView,
  mode: 'modal',
  // headerMode: 'none',
  cardStyle: { shadowColor: 'transparent' },
};

export default createStackNavigator(RouteConfigs, NavigatorConfig);
