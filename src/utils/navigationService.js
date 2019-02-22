/**
 * @component navigationService.js
 * @description 提供全局路由方法库
 * @time 2018/5/6
 * @author JUSTIN XU
 */
import { NavigationActions, StackActions } from 'react-navigation';

let topNavigator;

// 递归查询当前routers
function getCurrRoute(object = {}) {
  const { index = 0, routes = [] } = object;
  const currRouteMap = routes[index];
  if (typeof currRouteMap.index !== 'undefined' && Array.isArray(currRouteMap.routes)) return getCurrRoute(currRouteMap);
  return {
    currRouteList: routes,
    index,
    currRouteMap,
  };
}

// 获取当前路由
export const getCurrRoutes = () => {
  if (!topNavigator) return {};
  const {
    state: {
      nav,
    } = {},
  } = topNavigator || {};
  if (!Object.keys(nav).length) return {};
  return getCurrRoute(nav);
};

export const registerTopNavigator = (navigatorRef) => {
  topNavigator = navigatorRef;
};

export const reset = (routeName, params) => {
  topNavigator.dispatch(StackActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({
        routeName,
        params,
      }),
    ],
  }));
};

export const replace = ({
  key,
  newKey = null,
  routeName,
  params = null,
  action = null,
  immediate = null,
}) => {
  topNavigator.dispatch(StackActions.replace({
    key,
    newKey,
    routeName,
    params,
    action,
    immediate,
  }));
};

export const push = (routeName, params) => {
  topNavigator.dispatch(StackActions.push({
    routeName,
    params,
  }));
};

export const pop = (n) => {
  topNavigator.dispatch(StackActions.pop({
    n,
  }));
};

export const navigate = (routeName, params) => {
  topNavigator.dispatch(NavigationActions.navigate({
    routeName,
    params,
  }));
};

/**
 * Notice! behavior is not always same with props.navigation.goBack in View component
 * in the case of nested navigators, use props.navigation.goBack instead!
 */
export const goBack = (key = null) => {
  topNavigator.dispatch(NavigationActions.back({ key }));
};
