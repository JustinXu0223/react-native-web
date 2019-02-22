/**
 * @component Header.js
 * @description 头部组件
 * @time 2019/1/15
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// static source
import GoBackIcon from 'assets/images/common/go-back-black.png';

// constants
import theme from 'constants/theme';

// utils
import { isImageURL } from 'utils/base';

// components
import ImgIcon from '../ImgIcon';

const ContainerView = styled.div`
  height: ${theme.tabHeaderHeight}px;
  display: flex;
  justify-content: space-between;
  background-color: ${theme.whiteColor};
  color: ${theme.primaryColor};
`;

const LeftView = styled.div`
  padding-left: 12px;
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 17px;
  cursor: pointer;
`;

const CenterView = styled.div`
  padding: 0 10px;
  flex: ${props => props.centerFlex};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 23px;
  overflow: hidden;
`;

const RightView = styled.div`
  padding-right: 12px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
`;

const ItemText = styled.div``;

const Header = ({
  containerStyle,
  left,
  leftStyle,
  leftIconSize,
  onPressLeft,
  centerFlex,
  center,
  centerStyle,
  onPressCenter,
  right,
  rightStyle,
  rightIconSize,
  onPressRight,
}) => {
  function renderItemView(node, size) {
    if (React.isValidElement(node)) return node;
    if (isImageURL(node)) {
      return (
        <ImgIcon
          userRem={false}
          src={node}
          size={size}
        />
      );
    }
    return (
      <ItemText
        style={theme.singleEllipsis}
      >
        {node}
      </ItemText>
    );
  }
  return (
    <ContainerView
      style={containerStyle}
    >
      <LeftView
        onClick={onPressLeft}
        style={leftStyle}
      >
        {renderItemView(left, leftIconSize)}
      </LeftView>
      <CenterView
        centerFlex={centerFlex}
        onClick={onPressCenter}
        style={centerStyle}
      >
        {renderItemView(center)}
      </CenterView>
      <RightView
        onClick={onPressRight}
        style={rightStyle}
      >
        {renderItemView(right, rightIconSize)}
      </RightView>
    </ContainerView>
  );
};

Header.defaultProps = {
  containerStyle: {},
  // left
  left: <ImgIcon src={GoBackIcon} width={10} height={19} userRem={false} />,
  leftStyle: {},
  leftIconSize: 25,
  onPressLeft: () => null,
  // center
  centerFlex: 3, // 3 or 1
  center: null,
  centerStyle: {},
  onPressCenter: () => null,
  // right
  right: null,
  rightStyle: {},
  rightIconSize: 25,
  onPressRight: () => null,
};

Header.propTypes = {
  containerStyle: PropTypes.objectOf(PropTypes.any),
  // left
  left: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  leftStyle: PropTypes.objectOf(PropTypes.any),
  leftIconSize: PropTypes.number,
  onPressLeft: PropTypes.func,
  // center
  centerFlex: PropTypes.number,
  center: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  centerStyle: PropTypes.objectOf(PropTypes.any),
  onPressCenter: PropTypes.func,
  // right
  right: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  rightStyle: PropTypes.objectOf(PropTypes.any),
  rightIconSize: PropTypes.number,
  onPressRight: PropTypes.func,
};

export default Header;
