/**
 * @component NotData.jsx
 * @description 没有数据组件
 * @time 2019/1/15
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';

// static source
import NotDataIcon from 'assets/images/not-data.png';

// constants
import theme from 'constants/theme';

// components
import Thumbnail from './Thumbnail';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.whiteColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    color: theme.primaryColor,
    marginTop: theme.moderateScale(15),
  },
});

class NotData extends React.PureComponent {
  render() {
    const {
      icon,
      notDataSize,
      notDataText,
      hasData,
      fontSize,
    } = this.props;
    if (hasData) {
      return null;
    }
    return (
      <View
        style={[
          styles.container,
        ]}
      >
        <Thumbnail
          source={icon || NotDataIcon}
          size={notDataSize}
        />
        <Text
          style={[
            styles.footer,
            {
              fontSize: theme.moderateScale(fontSize),
            },
          ]}
        >
          {notDataText}
        </Text>
      </View>
    );
  }
}

NotData.defaultProps = {
  notDataText: null,
  hasData: false,
  notDataSize: 85,
  icon: null,
  fontSize: 16,
};

NotData.propTypes = {
  icon: PropTypes.string,
  hasData: PropTypes.bool,
  notDataSize: PropTypes.number,
  notDataText: PropTypes.string,
  fontSize: PropTypes.number,
};

export default NotData;
