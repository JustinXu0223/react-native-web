/*
 * @component index.js
 * @description demo
 * @time 2019/7/11
 * @author JUSTIN
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  total: {
    paddingTop: 18,
    fontSize: 18,
    color: 'red',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 30,
  },
  button: {
    width: 50,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    marginLeft: 8,
  },
});

@inject(({ rootStore }) => ({
  demoStore: rootStore.demoStore,
}))
@observer
class DemoListView extends React.Component {
  renderList = () => {
    const {
      props: {
        demoStore: {
          demoList: {
            list,
          },
          incrementReq,
          decreaseReq,
        },
      },
    } = this;
    if (!list.length) return null;
    return list.map(item => (
      <View style={styles.item}>
        <Text>{item.number}</Text>
        <TouchableOpacity
          style={styles.button}
          onClick={() => incrementReq(item)}
        >
          <Text>增加</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onClick={() => decreaseReq(item)}
        >
          <Text>减少</Text>
        </TouchableOpacity>
      </View>
    ));
  };

  render() {
    const {
      props: {
        style,
        demoStore: {
          getCounter,
          demoList: {
            loading,
          },
        },
      },
    } = this;
    return (
      <View
        style={[
          styles.container,
          style,
        ]}
      >
        <Text style={styles.total}>{getCounter}</Text>
        <Text>{loading ? '加载中' : '加载完成'}</Text>
        {this.renderList()}
      </View>
    );
  }
}

DemoListView.defaultProps = {
  style: {},
  demoStore: {},
};

DemoListView.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  demoStore: PropTypes.objectOf(PropTypes.any),
};

export default DemoListView;
