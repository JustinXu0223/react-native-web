/**
 * @component TabBarWeb.web.js
 * @description 底部组件
 * @time 2019/1/16
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink, withRouter } from 'react-router-dom';

// static source
import PictureIcon from 'assets/images/tabbar/picture.png';
import PictureFocusIcon from 'assets/images/tabbar/picture-focused.png';

// constants
import routers from 'constants/routers.web';
import theme from 'constants/theme';

// components
import Thumbnail from 'components/Thumbnail';

const ContainerView = styled.div`
  height: ${theme.tabBarHeight}px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.2);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: ${theme.tabBarZIndex};
  border-top: 1px solid ${theme.borderColor};
`;

const TabItemView = styled(NavLink)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.whiteColor};
  &.active {
    background-color: ${theme.dangerColor};
    transition: background-color .38s;
  }
`;

const TabTitleText = styled.div`
  padding-top: 10px;
  font-size: 13px;
  color: ${props => props.isActive ? theme.whiteColor : theme.primaryColor};
  transition: color .38s;
`;

@withRouter
class TabBarWeb extends React.PureComponent {
  renderListItem = () => {
    const {
      props: {
        list,
        location: {
          pathname,
        },
      },
    } = this;
    if (!list.length) return null;
    return list.map((item) => {
      const isActive = pathname && pathname.toLowerCase().startsWith(item.path.toLowerCase());
      return (
        <TabItemView
          activeClassName="active"
          key={item.name}
          to={item.path}
          isActive={(match, location) => {
            if (!location.pathname) return false;
            const path = location.pathname.toLowerCase();
            if (path.startsWith(item.path.toLowerCase())) return true;
            return false;
          }}
        >
          <Thumbnail
            source={isActive ? item.focusIcon : item.unFocusIcon}
            width={item.iconWidth}
            height={item.iconHeight}
          />
          <TabTitleText
            isActive={isActive}
          >
            {item.name}
          </TabTitleText>
        </TabItemView>
      );
    });
  };

  render() {
    return (
      <ContainerView>{this.renderListItem()}</ContainerView>
    );
  }
}

TabBarWeb.defaultProps = {
  list: [
    {
      name: '首页',
      unFocusIcon: PictureIcon,
      focusIcon: PictureFocusIcon,
      iconWidth: 26,
      iconHeight: 19,
      path: routers.home,
    },
    {
      name: '我的',
      unFocusIcon: PictureIcon,
      focusIcon: PictureFocusIcon,
      iconWidth: 26,
      iconHeight: 19,
      path: routers.mine,
    },
  ],
};

TabBarWeb.propTypes = {
  list: PropTypes.arrayOf(PropTypes.any),
  ...withRouter.propTypes,
};

export default TabBarWeb;
