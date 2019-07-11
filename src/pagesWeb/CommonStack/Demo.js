/**
 * @component DemoList.js
 * @description Demo页面
 * @time 2019/2/22
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// constants
// import routers from 'constants/routers.web';

// components
import ContainerView from 'components/Layout/ContainerView';
import DemoList from 'components/DemoList';

const TestView = styled.div`
  display: flex;
`;

const TestText = styled.div`
  color: red;
  font-size: ${props => props.fontSize || '18px'};
`;

const TestTouch = styled.div`
`;


class Demo extends React.Component {
  state = {
    testVal: '',
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
          <TestTouch onClick={this.onToggleVal}>
            <TestText fontSize={16}>WEB</TestText>
          </TestTouch>
        </TestView>
      </ContainerView>
    );
  }
}

Demo.defaultProps = {};

Demo.propTypes = {
  history: PropTypes.shape({
    action: PropTypes.string,
    go: PropTypes.func,
    goBack: PropTypes.func,
    goForward: PropTypes.func,
    listen: PropTypes.func,
    push: PropTypes.func,
    replace: PropTypes.func,
    location: PropTypes.shape({
      hash: PropTypes.string,
      pathname: PropTypes.string,
      search: PropTypes.string,
      state: PropTypes.any,
    }),
  }).isRequired,
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.object,
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default Demo;
