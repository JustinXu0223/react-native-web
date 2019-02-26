/**
 * @component index.js
 * @description 默认导出
 * @time 2019/2/26
 * @author JUSTIN XU
 */
// utils
import { isWeb } from 'utils/device';

import routersRN from './routers.rn';
import routersWeb from './routers.web';
import theme from './theme';

const routers = isWeb() ? routersWeb : routersRN;

export {
  routers,
  theme,
};
