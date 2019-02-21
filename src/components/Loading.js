/**
 * @component Loading.js
 * @description 加载组件
 * @time 2018/11/21
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

// constants
import theme from 'constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
});

class Loading extends React.PureComponent {
  render() {
    const {
      props: {
        style,
        size,
        color,
      },
    } = this;
    return (
      <View
        style={[
          styles.container,
          style,
        ]}
      >
        <ActivityIndicator
          size={size}
          color={color}
          animating
        />
      </View>
    );
  }
}

Loading.defaultProps = {
  style: {},
  size: 'large',
  color: theme.whiteColor,
};

Loading.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  size: PropTypes.string,
  color: PropTypes.string,
};

export default Loading;
