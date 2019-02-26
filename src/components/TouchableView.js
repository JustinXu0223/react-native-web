/**
 * @component TouchableView.js
 * @description 带延迟的触摸组件
 * @time 2018/7/2
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

// constants
import theme from 'constants/theme';

// utils
import { noDoublePress } from '../utils/base';

class TouchableView extends React.PureComponent {
  onPress = (value) => {
    const {
      onPress,
    } = this.props;
    noDoublePress.onPress(() => {
      onPress(value);
    }, 300);
  };

  render() {
    const {
      children,
      style,
      activeOpacity,
    } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={activeOpacity}
        style={style}
        onPress={this.onPress}
      >
        {children}
      </TouchableOpacity>
    );
  }
}

TouchableView.defaultProps = {
  onPress: () => null,
  style: {},
  activeOpacity: theme.activeOpacity,
  children: null,
};

TouchableView.propTypes = {
  onPress: PropTypes.func,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  activeOpacity: PropTypes.number,
  children: PropTypes.node,
};

export default TouchableView;
