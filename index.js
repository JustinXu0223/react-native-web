/**
 * @component index.js
 * @description rn 入口
 * @time 2019/2/21
 * @author JUSTIN XU
 */
import { AppRegistry } from 'react-native';
import App from './src/index.rn';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
