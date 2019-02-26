/**
 * @component index.js
 * @description 图片路由配置
 * @time 2018/10/30
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';

// constants
import { routers, theme } from 'constants';

// static source
import homeIcon from 'assets/images/tabbar/picture.png';
import homeActiveIcon from 'assets/images/tabbar/picture-focused.png';

// picture card
import HomeScreen from './Home';

const RouteConfig = {
  // picture card
  [routers.home]: HomeScreen,
};

const NavigatorConfig = {
  initialRouteName: routers.home,
  cardStyle: { shadowColor: 'transparent' },
  mode: 'card',
  // headerMode: 'none',
  transitionConfig: theme.transitionConfig,
  navigationOptions: {
    // gesturesEnabled: true,
    headerStyle: theme.headerStyle,
    headerTitleStyle: theme.headerTitleStyle,
  },
};

const PictureStack = createStackNavigator(RouteConfig, NavigatorConfig);

const tabBarIcon = ({ focused }) => (
  <Image
    source={focused ? homeActiveIcon : homeIcon}
    style={{
      width: theme.moderateScale(26),
      height: theme.moderateScale(19),
    }}
    resizeMode="contain"
  />
);

tabBarIcon.propTypes = {
  focused: PropTypes.bool.isRequired,
};

PictureStack.navigationOptions = ({ navigation }) => {
  const { index } = navigation.state;
  return {
    tabBarVisible: index === 0,
    tabBarLabel: '首页',
    tabBarIcon,
  };
};

export default PictureStack;
