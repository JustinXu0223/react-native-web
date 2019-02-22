/**
 * @component Helper.js
 * @description 帮助页面
 * @time 2019/2/22
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// constants
// import routers from 'constants/routers.rn';

const ContainerView = styled.View``;
const ItemText = styled.Text``;

class Helper extends React.Component {
  render() {
    return (
      <ContainerView>
        <ItemText>
          Helper
        </ItemText>
      </ContainerView>
    );
  }
}

Helper.defaultProps = {};

Helper.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
    goBack: PropTypes.func,
    navigate: PropTypes.func,
    setParams: PropTypes.func,
    getParam: PropTypes.func,
    state: PropTypes.shape({
      key: PropTypes.string,
      routeName: PropTypes.string,
      params: PropTypes.object,
    }),
  }).isRequired,
};

export default Helper;
