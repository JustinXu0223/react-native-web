const path = require('path');

/** resolve文件路径
 * */
function resolvePath(dir, ...rest) {
  return path.join(__dirname, '../', dir, ...rest);
}

exports.resolvePath = resolvePath;
