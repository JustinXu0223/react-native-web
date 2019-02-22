/**
 * @component index.js
 * @description tabView路由配置
 * @time 2018/10/24
 * @author JUSTIN XU
 */
import { createBottomTabNavigator } from 'react-navigation';

// constants
import routers from 'constants/routers.rn';
import theme from 'constants/theme';

// pages
import HomeScreen from './Home';
import MineScreen from './Mine';

const RouteConfig = {
  [routers.home]: HomeScreen,
  [routers.mine]: MineScreen,
};

const NavigatorConfig = {
  initialRouteName: routers.home,
  tabBarOptions: {
    activeTintColor: theme.whiteColor,
    activeBackgroundColor: theme.dangerColor,
    inactiveTintColor: theme.primaryColor,
    inactiveBackgroundColor: theme.whiteColor,
    labelStyle: {
      fontSize: 13,
      height: 18,
      marginLeft: 0,
    },
    style: {
      height: 61,
      backgroundColor: theme.whiteColor,
      shadowOpacity: 0.05,
      shadowRadius: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: -2 },
      elevation: 2,
    },
    tabStyle: {
      flexDirection: 'column',
      flexWrap: 'nowrap',
      alignItems: 'center',
    },
  },
};

const TabStack = createBottomTabNavigator(RouteConfig, NavigatorConfig);

TabStack.navigationOptions = {
  header: null,
};

export default TabStack;
