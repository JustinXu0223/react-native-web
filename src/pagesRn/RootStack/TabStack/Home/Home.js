/**
 * @component Home
 * @description
 * @time 2019/2/22
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// constants
import routers from 'constants/routers.rn';

const ContainerView = styled.View``;
const ItemText = styled.Text``;

const ButtonTouch = styled.TouchableOpacity`
  height: 40px;
  justify-content: center;
  align-items: center;
  border: 1px red;
  margin-top: 10px;
`;

class Home extends React.Component {
  render() {
    const {
      props: {
        navigation,
      },
    } = this;
    return (
      <ContainerView>
        <ItemText>
          Home
        </ItemText>
        <ButtonTouch
          onPress={() => navigation.navigate(routers.signIn)}
        >
          <ItemText>
            去登录
          </ItemText>
        </ButtonTouch>
        <ButtonTouch
          onPress={() => navigation.navigate(routers.signUp)}
        >
          <ItemText>
            去注册
          </ItemText>
        </ButtonTouch>
      </ContainerView>
    );
  }
}

Home.defaultProps = {};

Home.propTypes = {
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

export default Home;
