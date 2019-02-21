/**
 * @component index.web.js
 * @description web入口
 * @time 2019/2/21
 * @author JUSTIN XU
 */
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './src/index.web';

AppRegistry.registerComponent(appName, () => App);

AppRegistry.runApplication(appName, {
  rootTag: document.getElementById('root'),
});
