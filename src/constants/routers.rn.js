/**
 * @component routers.js
 * @description 路由配置
 * @time 2019/2/21
 * @author JUSTIN XU
 */
export default {
  // initial loading Stack
  authLoading: 'app.authLoading',
  // Auth Stack
  auth: 'app.auth',
  signIn: 'app.auth.signIn',
  signUp: 'app.auth.signUp',
  // Root Stack
  root: 'app.root',
  // tabView
  tabView: 'app.root.tabView',
  // Root Stack -> Modals Stack -> Helper
  helper: 'app.root.modals.helper',
  // Root Stack -> TabView Stack -> Home
  home: 'app.root.tabView.home',
  // Root Stack -> TabView Stack -> Mine
  mine: 'app.root.tabView.mine',
};
