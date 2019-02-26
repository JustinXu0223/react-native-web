/**
 * @component index.js
 * @description 权限路由配置
 * @time 2018/10/24
 * @author JUSTIN XU
 */
import { createStackNavigator } from 'react-navigation';

// constants
import { routers } from 'constants';

// pages
import SignInScreen from './SignIn';
import SignUpScreen from './SignUp';

const RouteConfigs = {
  [routers.signIn]: SignInScreen,
  [routers.signUp]: SignUpScreen,
};

const NavigatorConfig = {
  initialRouteName: routers.signIn,
  cardStyle: { shadowColor: 'transparent' },
  mode: 'card',
  // headerMode: 'none',
};

export default createStackNavigator(RouteConfigs, NavigatorConfig);
