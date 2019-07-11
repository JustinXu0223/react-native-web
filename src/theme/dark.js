/**
 * @component light.js
 * @description 默认主题
 * @time 2019/6/11
 * @author JUSTIN XU
 */
import variable from './common/variable';
import mixins from './mixins';

export default {
  // variable
  ...variable,

  primaryColor: '#000',
  errorColor: '#ea3d3d',
  fontColor: '#383838',
  creditBorderColor: '#efefef',
  creditDescColor: '#929292',

  // mixin
  ...mixins,
};
