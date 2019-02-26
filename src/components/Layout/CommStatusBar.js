/**
 * @component CommStatusBar.js
 * @description 头部组件
 * @time 2018/5/22
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';

class CommStatusBar extends React.PureComponent {
  render() {
    const {
      props: {
        barStyle,
        backgroundColor,
        translucent,
        ...restProps
      },
    } = this;
    return (
      <StatusBar
        barStyle={barStyle}
        backgroundColor={backgroundColor}
        translucent={translucent}
        {...restProps}
      />
    );
  }
}

CommStatusBar.defaultProps = {
  barStyle: 'dark-content', // or light-content
  backgroundColor: 'transparent',
  translucent: true,
};

CommStatusBar.propTypes = {
  barStyle: PropTypes.string,
  backgroundColor: PropTypes.string,
  translucent: PropTypes.bool,
};

export default CommStatusBar;
