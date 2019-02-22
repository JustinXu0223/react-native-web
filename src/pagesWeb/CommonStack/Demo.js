/**
 * @component Demo.js
 * @description Demo页面
 * @time 2019/2/22
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// constants
// import routers from 'constants/routers.web';

const ContainerView = styled.div``;

class Demo extends React.Component {
  render() {
    return (
      <ContainerView>
        <div>DemoDemoDemo</div>
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
