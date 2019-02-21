/**
 * @component ImgIcon.js
 * @description image组件
 * @time 2019/1/15
 * @author JUSTIN XU
 */
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImgIcon = styled.img.attrs({
  src: props => props.src,
  alt: props => props.alt,
})`
  width: ${props => (props.width || props.size)};
  height: ${props => (props.width || props.size)};
`;

ImgIcon.defaultProps = {
  userRem: true,
  alt: 'image',
  size: 36,
  width: undefined,
  height: undefined,
};

ImgIcon.propTypes = {
  userRem: PropTypes.bool,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  size: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default ImgIcon;
