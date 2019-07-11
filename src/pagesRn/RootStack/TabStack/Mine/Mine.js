/**
 * @component MineStack.js
 * @description 我的页面
 * @time 2019/2/21
 * @author JUSTIN XU
 */
import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

// components
import ContainerView from 'components/Layout/ContainerView';
import DemoList from 'components/DemoList';

// constants

const TestView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TestText = styled.Text`
  color: #000;
  font-size: ${props => props.fontSize || '18px'};
`;

const TestTouch = styled.TouchableOpacity`
`;

class Mine extends React.Component {
  state = {
    testVal: 'test',
  };

  onToggleVal = () => {
    const {
      state: {
        testVal,
      },
    } = this;
    const data = testVal ? '' : 'test 123';
    this.setState({ testVal: data });
  }

  render() {
    const {
      state: {
        testVal,
      },
      // props: {
      // },
    } = this;
    return (
      <ContainerView>
        <DemoList />
        <TestView>
          <TestText>{testVal}</TestText>
          <TestTouch onPress={this.onToggleVal}>
            <TestText fontSize={16}>RN</TestText>
          </TestTouch>
        </TestView>
      </ContainerView>
    );
  }
}

Mine.defaultProps = {};

Mine.propTypes = {};

export default Mine;
