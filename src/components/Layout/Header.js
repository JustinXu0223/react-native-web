/**
 * @component Header.js
 * @description 自定义头部组件
 * @time 2018/11/14
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';

// static source
import BackCloseIcon from 'assets/images/common/go-back-black.png';

// constants
import theme from 'constants/theme';

// components
import TouchableView from '../TouchableView';
import Thumbnail from '../Thumbnail';

const styles = StyleSheet.create({
  container: {
    height: theme.tabBarHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContainer: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  leftText: {
    fontSize: 17,
    color: theme.primaryColor,
  },
  bodyContainer: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyText: {
    fontSize: 23,
    color: theme.primaryColor,
  },
  rightContainer: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  rightText: {
    fontSize: 17,
    color: theme.primaryColor,
  },
});

class Header extends React.PureComponent {
  renderLeft = () => {
    const {
      props: {
        left,
        onPressLeft,
        leftStyle,
        leftIconWidth,
        leftIconHeight,
        leftIconSize,
      },
    } = this;
    if (React.isValidElement(left)) return left;
    const LeftType = onPressLeft ? TouchableView : View;
    if (left) {
      return (
        <LeftType
          onPress={onPressLeft}
          style={[
            styles.leftContainer,
            leftStyle,
          ]}
        >
          {
            typeof left === 'string' ? (
              <Text
                numberOfLines={1}
                style={[
                  styles.leftText,
                ]}
              >
                {left}
              </Text>
            ) : (
              <Thumbnail
                source={left}
                width={leftIconSize ? undefined : leftIconWidth}
                height={leftIconSize ? undefined : leftIconHeight}
                size={leftIconSize}
              />
            )
          }
        </LeftType>
      );
    }
    return <LeftType style={leftStyle} />;
  };

  renderBody = () => {
    const {
      props: {
        body,
        bodyFlex,
        onPressBody,
        bodyStyle,
        bodyTextStyle,
        bodyIconWidth,
        bodyIconHeight,
        bodyIconSize,
      },
    } = this;
    if (React.isValidElement(body)) return body;
    const BodyType = onPressBody ? TouchableView : View;
    if (body) {
      return (
        <BodyType
          style={[
            styles.bodyContainer,
            {
              flex: bodyFlex,
            },
            bodyStyle,
          ]}
        >
          {
            typeof body === 'string' ? (
              <Text
                numberOfLines={1}
                style={[
                  styles.bodyText,
                  bodyTextStyle,
                ]}
              >
                {body}
              </Text>
            ) : (
              <Thumbnail
                source={body}
                width={bodyIconSize ? undefined : bodyIconWidth}
                height={bodyIconSize ? undefined : bodyIconHeight}
                size={bodyIconSize}
              />
            )
          }
        </BodyType>
      );
    }
    return <BodyType style={bodyStyle} flex={bodyFlex} />;
  };

  renderRight = () => {
    const {
      props: {
        rightRefName,
        right,
        onPressRight,
        rightStyle,
        rightIconSize,
        rightIconWidth,
        rightIconHeight,
      },
    } = this;
    if (React.isValidElement(right)) return right;
    const RightType = onPressRight ? TouchableView : View;
    if (right) {
      return (
        <RightType
          refName={rightRefName}
          onPress={onPressRight}
          style={[
            styles.rightContainer,
            rightStyle,
          ]}
        >
          {
            typeof right === 'string' ? (
              <Text
                numberOfLines={1}
                style={[
                  styles.rightText,
                ]}
              >
                {right}
              </Text>
            ) : (
              <Thumbnail
                source={right}
                width={rightIconSize ? undefined : rightIconWidth}
                height={rightIconSize ? undefined : rightIconHeight}
                size={rightIconSize}
              />
            )
          }
        </RightType>
      );
    }
    return <RightType style={rightStyle} />;
  };

  render() {
    const {
      props: {
        backgroundColor,
        containerStyle,
        headerTitle,
      },
    } = this;
    return (
      <View
        style={[
          styles.container,
          containerStyle,
          {
            backgroundColor,
          },
        ]}
      >
        {
          (headerTitle && typeof headerTitle === 'function') ? (
            headerTitle()
          ) : ([
            this.renderLeft(),
            this.renderBody(),
            this.renderRight(),
          ])
        }
      </View>
    );
  }
}

Header.defaultProps = {
  containerStyle: {},
  backgroundColor: 'transparent',
  headerTitle: null,
  // left
  left: BackCloseIcon,
  leftIconWidth: 10,
  leftIconHeight: 19,
  leftIconSize: 0,
  onPressLeft: null,
  leftStyle: {
    paddingLeft: 12,
  },
  // body
  body: null,
  bodyFlex: 2,
  bodyStyle: {},
  bodyTextStyle: {},
  onPressBody: null,
  bodyIconWidth: undefined,
  bodyIconHeight: undefined,
  bodyIconSize: 25,
  // right
  rightRefName: () => null,
  right: null,
  onPressRight: null,
  rightIconWidth: undefined,
  rightIconHeight: undefined,
  rightIconSize: 25,
  rightStyle: {
    paddingRight: 12,
  },
};

Header.propTypes = {
  containerStyle: PropTypes.objectOf(PropTypes.any),
  backgroundColor: PropTypes.string,
  headerTitle: PropTypes.node,
  // left
  left: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]),
  leftIconWidth: PropTypes.number,
  leftIconHeight: PropTypes.number,
  leftIconSize: PropTypes.number,
  onPressLeft: PropTypes.func,
  leftStyle: PropTypes.objectOf(PropTypes.any),
  // body
  body: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]),
  bodyFlex: PropTypes.number,
  onPressBody: PropTypes.func,
  bodyIconWidth: PropTypes.number,
  bodyIconHeight: PropTypes.number,
  bodyIconSize: PropTypes.number,
  bodyStyle: PropTypes.objectOf(PropTypes.any),
  bodyTextStyle: PropTypes.objectOf(PropTypes.any),
  // right
  rightRefName: PropTypes.func,
  right: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]),
  onPressRight: PropTypes.func,
  rightIconWidth: PropTypes.number,
  rightIconHeight: PropTypes.number,
  rightIconSize: PropTypes.number,
  rightStyle: PropTypes.objectOf(PropTypes.any),
};

export default Header;
