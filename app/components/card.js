import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native';

const { create } = StyleSheet;

import {map, sum, compact, last} from 'lodash';

const statusImages = {
  checking: require('../img/loading.gif'),
  unkown: require('../img/gray.png'),
  fail: require('../img/red.png'),
  done: require('../img/green.png'),
};

export default class Card extends Component {

  componentDidMount() {
    let {server, ping} = this.props;
    ping(server);
  }

  render() {
    let { server, ping } = this.props;
    let {key, name, country, status, flagImage, checkedStatus} = this.props.server;
    let checked = compact(checkedStatus);
    let avgDelay;
    if (checked.length > 0) {
      avgDelay = parseInt(sum(map(checked,(s => s.delayTime))) / checked.length) + 'ms';
    } else {
      avgDelay = 'N/A';
    };
    let statusImage = statusImages[status];
    let delay = last(checked) == null ? 'N/A' : last(checked).delayTime + 'ms';
    return (
      <TouchableWithoutFeedback onPress={_=> ping(server)} >
        <View key={key} style={styles.card}>
          <View style={styles.header}>
            <Image style={styles.flag} source={flagImage} />
            <View style={styles.info}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.country}>{country}</Text>
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.label}>
              <Text>状态：</Text>
              <Image style={styles.statusImage} source={statusImage} />
            </View>
            <View style={styles.label}>
              <Text>延迟：</Text>
              <Text>{delay}</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );

  }
}


const styles = create({
  card: {
    width: 260,
    padding: 6,
    margin: 6,
    flexDirection: 'column',
    backgroundColor: 'rgb(254,254,192)',
  },
  header: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  flag: {
    margin: 4,
    width: 54,
    height: 36
  },
  info: {
    marginLeft: 12,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  country: {
    opacity: .7,
    fontSize: 12,
  },
  body: {
    margin: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    flexDirection: 'row',
    marginRight: 12,
    alignItems: 'center',
    height: 20,
  },
  status: {
    width: 20,
    height: 20,
  },
  statusImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  }
});
