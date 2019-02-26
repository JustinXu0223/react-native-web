/**
 * @component ContainerView.js
 * @description 外层容器组件
 * @time 2019/2/26
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

// utils
import theme from 'constants/theme';

// utils
import { getStatusBarHeight, getFooterBottom } from 'utils/device';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const ContainerView = ({
  style,
  children,
  needPaddingTop,
  needPaddingBottom,
  backgroundColor,
}) => (
  <View
    style={[
      styles.container,
      {
        paddingTop: needPaddingTop ? getStatusBarHeight() : 0,
        paddingBottom: needPaddingBottom ? getFooterBottom() : 0,
        backgroundColor,
      },
      style,
    ]}
  >
    {children}
  </View>
);

ContainerView.defaultProps = {
  style: {},
  children: null,
  needPaddingTop: false,
  needPaddingBottom: false,
  backgroundColor: theme.pageBackColor,
};

ContainerView.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node,
  needPaddingTop: PropTypes.bool,
  needPaddingBottom: PropTypes.bool,
  backgroundColor: PropTypes.string,
};

export default ContainerView;
