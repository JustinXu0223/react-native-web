/**
 * @component Thumbnail.js
 * @description 头像/图像组件
 * @time 2018/6/24
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image } from 'react-native';

// static source
import defaultIcon from 'assets/images/not-data.png';

// utils
import { moderateScale } from 'utils/scale';

class Thumbnail extends React.PureComponent {
  renderAvatarImg = () => {
    const {
      imgUri,
      borderRadius,
      source,
      defaultImage,
      resizeMode,
    } = this.props;
    return (
      <Image
        source={imgUri ? { uri: imgUri } : (source || defaultImage)}
        resizeMode={resizeMode}
        borderRadius={borderRadius}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    );
  };

  render() {
    const {
      round,
      size,
      width = size,
      height = size,
      marginLeft,
      onPress,
      containerStyle,
    } = this.props;
    const ContainerNode = onPress ? TouchableOpacity : View;
    return (
      <ContainerNode
        round={width === height && round} // support round when width === height
        size={size}
        width={width}
        height={height}
        onPress={onPress}
        marginLeft={marginLeft}
        style={[
          {
            marginLeft: moderateScale(marginLeft || 0),
            borderRadius: round ? moderateScale(size / 2) : 0,
            width,
            height,
          },
          containerStyle,
        ]}
      >
        {this.renderAvatarImg()}
      </ContainerNode>
    );
  }
}

Thumbnail.defaultProps = {
  containerStyle: {},
  onPress: null,
  round: false,
  width: undefined,
  height: undefined,
  size: 60,
  marginLeft: 0,
  style: {},
  source: null,
  defaultImage: defaultIcon,
  imgUri: '',
  borderRadius: 0,
  resizeMode: 'contain',
};

Thumbnail.propTypes = {
  containerStyle: PropTypes.objectOf(PropTypes.any),
  onPress: PropTypes.func,
  round: PropTypes.bool,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  size: PropTypes.number,
  marginLeft: PropTypes.number,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  source: PropTypes.number,
  defaultImage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  imgUri: PropTypes.string,
  borderRadius: PropTypes.number,
  resizeMode: PropTypes.string,
};

export default Thumbnail;
