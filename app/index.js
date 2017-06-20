import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  ScrollView,
} from 'react-native';

import _, {map} from 'lodash';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './styles';

import Card from './components/card';

class App extends Component {

  render() {
    let {servers} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Vultr的数据中心
        </Text>
        <FlatList
          contentContainerStyle={styles.list}
          data={servers}
          renderItem={ ({item}) => (<Card key={item.key} server={item} />)}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  servers: state.hosts
});

const mapDispathToProps = (dispatch) => ({
  dispatch: dispatch
});

export default connect(
  mapStateToProps,
  mapDispathToProps
)(App);
