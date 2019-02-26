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
import mineIcon from 'assets/images/tabbar/picture.png';
import mineActiveIcon from 'assets/images/tabbar/picture-focused.png';

// components

// picture card
import HomeScreen from './Mine';

const RouteConfig = {
  // picture card
  [routers.mine]: HomeScreen,
};

const NavigatorConfig = {
  initialRouteName: routers.mine,
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
    source={focused ? mineActiveIcon : mineIcon}
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
    tabBarLabel: '我的',
    tabBarIcon,
  };
};

export default PictureStack;
