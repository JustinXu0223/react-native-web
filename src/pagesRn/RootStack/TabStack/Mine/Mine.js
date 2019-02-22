/**
 * @component MineStack.js
 * @description 我的页面
 * @time 2019/2/21
 * @author JUSTIN XU
 */
import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

// constants

const ContainerView = styled.View``;
const ItemText = styled.Text``;

class Mine extends React.Component {
  render() {
    return (
      <ContainerView>
        <ItemText>
          Mine
        </ItemText>
      </ContainerView>
    );
  }
}

Mine.defaultProps = {};

Mine.propTypes = {};

export default Mine;
