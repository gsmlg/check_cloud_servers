/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
} from 'react-native';

import _ from 'lodash';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

let Hosts = [
  {
    host: 'fra-de-ping.vultr.com',
    name: '法兰克福'
  },
  {
    host: 'ams-nl-ping.vultr.com',
    name: '阿姆斯特丹'
  },
  {
    host: 'par-fr-ping.vultr.com',
    name: '巴黎'
  },
  {
    host: 'lon-gb-ping.vultr.com',
    name: '伦敦'
  },
  {
    host: 'sgp-ping.vultr.com',
    name: '新加坡'
  },
  {
    host: 'hnd-jp-ping.vultr.com',
    name: '东京'
  },
  {
    host: 'nj-us-ping.vultr.com',
    name: '新泽西'
  },
  {
    host: 'il-us-ping.vultr.com',
    name: '芝加哥'
  },
  {
    host: 'ga-us-ping.vultr.com',
    name: '亚特兰大'
  },
  {
    host: 'wa-us-ping.vultr.com',
    name: '西雅图'
  },
  {
    host: 'fl-us-ping.vultr.com',
    name: '迈阿密'
  },
  {
    host: 'tx-us-ping.vultr.com',
    name: '达拉斯'
  },
  {
    host: 'sjo-ca-us-ping.vultr.com',
    name: '硅谷'
  },
  {
    host: 'lax-ca-us-ping.vultr.com',
    name: '洛杉矶'
  },
  {
    host: 'syd-au-ping.vultr.com',
    name: '悉尼'
  },
];

var VultrHosts = Hosts.map((host, i) => {
  host.key = host.host.replace('-ping.vultr.com', '');
  return host;
});

const Ping = (host) => {
  return new Promise((resolve, reject) => {
    let t = new Date();
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = (e) => {
      if (xhr.readyState !== 4) return;
      if (xhr.status >= 200) {
        resolve(new Date() - t);
      } else {
        reject(xhr.status);
      }
    };

    xhr.onerror = reject;

    xhr.open('HEAD', `https://${host}`);
    xhr.send(null);

    setTimeout(reject, 10000);

  });
};

export default class vultr_ping extends Component {

  constructor(...args) {
    super(...args);
    let hosts = {};
    Hosts.forEach((host, i) => {
      host.key = host.host.replace('-ping.vultr.com', '');
      host.time = '...';
      hosts[host.key] = host;
    });
    this.state = {
      hosts: hosts,
      user: {},
      vpsInfo: {}
    };
  }

  componentDidMount() {
    this.requestCheck();
  }

  requestCheck() {
    let xhrs = _.map(this.state.hosts, (item) => {
      let {key, name, host} = item;
      return Ping(host)
        .then((time) => {
          this.setState(prevState => {
            let hosts = prevState.hosts;
            hosts[key].time = time;
            return {hosts: hosts};
          });
        })
        .catch((err) => {
          this.setState(prevState => {
            let hosts = prevState.hosts;
            hosts[key].time = 'N/A';
            return {hosts: hosts};
          });
        });
    });
    Promise.all(xhrs).then(() => {
      setTimeout(() => {
        this.requestCheck();
      }, 5000);
    });
  }

  _renderItem(item) {
    let {key, name, host, time} = item;
    let state = this.state;
    return (
      <View key={key} style={styles.hostListItem}>
        <Text style={styles.itemNameText}>{name}</Text>
        <Text style={styles.itemHostText}>{host}</Text>
        <Text style={styles.itemTimeText}>{time}</Text>
      </View>
    );
  }

  render() {
    let hostsArr = _.toArray(this.state.hosts);
    let orderArr = _.sortBy(hostsArr, 'time');
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Vultr Host Ping
        </Text>
        <ScrollView
          directionalLockEnabled={true}
          alwaysBounceHorizontal={false}
          showsHorizontalScrollIndicator={false}
          style={styles.hostList}
          >
          {_.map(orderArr, (item) => { return this._renderItem(item);})}
        </ScrollView>
      </View>
    );
  }
}

const bgColor = '#135790';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: bgColor,
  },
  header: {
    color: '#f5fcff',
    backgroundColor: bgColor,
    fontSize: 24,
    textAlign: 'center',
    margin: 24,
  },
  hostList: {
    backgroundColor: bgColor,
  },
  hostListItem: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 8,
    backgroundColor: bgColor,
  },
  itemNameText: {
    width: '25%',
    textAlign: 'center',
    color: '#f5fcff',
  },
  itemHostText: {
    width: '50%',
    textAlign: 'center',
    color: '#f5fcff',
  },
  itemTimeText: {
    width: '20%',
    textAlign: 'center',
    color: '#f5fcff',
  },
});

/*
const mapStateToProps = state => ({
  hostInfos: state.hostInfos
});

const mapDispatchToProps = dispatch => ({
  ping: bindActionCreators(ping, dispatch)
});

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(vultr_ping);
*/

AppRegistry.registerComponent('vultr_ping', () => vultr_ping);
