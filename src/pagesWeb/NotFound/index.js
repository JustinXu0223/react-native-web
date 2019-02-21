/**
 * @component index.js
 * @description 未发现页面
 * @time 2019/2/21
 * @author JUSTIN XU
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

// static source
// import NotFoundIcon from 'assets/images/not-data.png';

// components
// import NotDataComponent from 'components/NotData';

const ContainerView = styled.div`
  display: flex;
  flex: 1;
`;

const NotFound = () => (
  <ContainerView>
    <Helmet>
      <title>Not Found</title>
    </Helmet>
    <div>NOT FOUND</div>
    {/* <NotDataComponent
      icon={NotFoundIcon}
      notDataText="你所访问页面不存在"
    /> */}
  </ContainerView>
);

NotFound.defaultProps = {};

NotFound.propTypes = {};

export default NotFound;
