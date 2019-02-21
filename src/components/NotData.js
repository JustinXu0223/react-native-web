/**
 * @component NotData.jsx
 * @description 没有数据组件
 * @time 2019/1/15
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// static source
import NotDataIcon from 'assets/images/not-data.png';

// constants
import theme from 'constants/theme';

// components
import ImgIcon from './ImgIcon';

const ContainerView = styled.div`
  flex: 1;
  background-color: ${theme.whiteColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 106px;
`;

const FooterText = styled.div`
  font-size: ${props => props.fontSize};
  color: ${theme.primaryColor};
  margin-top: 18px;
`;

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
      <ContainerView>
        <ImgIcon
          src={icon || NotDataIcon}
          size={notDataSize}
        />
        <FooterText
          fontSize={fontSize}
        >
          {notDataText}
        </FooterText>
      </ContainerView>
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
