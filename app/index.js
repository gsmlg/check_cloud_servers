import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  ScrollView,
} from 'react-native';

import _, {map, toArray} from 'lodash';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './styles';

import Card from './components/card';

import * as Actions from './actions';

class App extends Component {

  render() {
    let {servers, actions} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Vultr 数据中心延迟
        </Text>
        <FlatList
          contentContainerStyle={styles.list}
          data={toArray(servers)}
          renderItem={ ({item}) => (<Card key={item.key} server={item} ping={actions.ping} />)}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  servers: state.hosts
});

const mapDispathToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch),
  dispatch: dispatch
});

export default connect(
  mapStateToProps,
  mapDispathToProps
)(App);
