/**
 * @component SignUp
 * @description
 * @time 2019/2/22
 * @author JUSTIN XU
 */
import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

// // constants
// import routers from 'constants/routers.rn';

const ContainerView = styled.View``;
const ItemText = styled.Text``;

class SignUp extends React.PureComponent {
  render() {
    return (
      <ContainerView>
        <ItemText>
          SignUp
        </ItemText>
      </ContainerView>
    );
  }
}

SignUp.defaultProps = {};

SignUp.propTypes = {};

export default SignUp;
