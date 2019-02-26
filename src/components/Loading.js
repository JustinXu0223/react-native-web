/**
 * @component Loading.js
 * @description 加载组件
 * @time 2018/11/21
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';

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
  renderContent = () => {
    const {
      props: {
        isLoading,
        size,
        color,
        error,
      },
    } = this;
    if (isLoading) {
      return (
        <ActivityIndicator
          size={size}
          color={color}
          animating
        />
      );
    }
    if (error) {
      return (
        <Text
          style={[
            {
              fontSize: theme.moderateScale(16),
            },
          ]}
        >
          对不起, 页面加载失败
        </Text>
      );
    }
    return null;
  };

  render() {
    const {
      props: {
        style,
      },
    } = this;
    return (
      <View
        style={[
          styles.container,
          style,
        ]}
      >
        {this.renderContent()}
      </View>
    );
  }
}

Loading.defaultProps = {
  style: {},
  isLoading: true,
  size: 'large',
  color: theme.primaryColor,
  error: null,
};

Loading.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  isLoading: PropTypes.bool,
  size: PropTypes.string,
  color: PropTypes.string,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};

export default Loading;
