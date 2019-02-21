/**
 * @component history.js
 * @description history方法
 * @time 2018/7/24
 * @author JUSTIN XU
 */
// import { createBrowserHistory } from 'history';
//
// const history = createBrowserHistory({ basename: '/' });
import { createHashHistory } from 'history';

const history = createHashHistory({ basename: '/' });

export default history;
