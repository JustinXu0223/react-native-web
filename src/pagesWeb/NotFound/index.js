/**
 * @component index.js
 * @description Not Found页面
 * @time 2019/2/21
 * @author JUSTIN XU
 */
import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

// static source
import NotFoundIcon from 'assets/images/not-data.png';

// components
import ContainerView from 'components/Layout/ContainerView';
import NotDataComponent from 'components/NotData';

const NotFound = () => (
  <ContainerView>
    <Helmet>
      <title>Not Found</title>
    </Helmet>
    <NotDataComponent
      icon={NotFoundIcon}
      notDataText="你所访问页面不存在"
    />
  </ContainerView>
);

NotFound.defaultProps = {};

NotFound.propTypes = {};

export default NotFound;
