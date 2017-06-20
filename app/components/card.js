import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

const { create } = StyleSheet;

const styles = create({
  card: {
    width: 220,
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
  }
});

export default class Card extends Component {
  render() {
    let {key, name, country, status, flagImage} = this.props.server;
    return (
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
            <Text>{status == null ? '---' : status}</Text>
          </View>
          <View style={styles.label}>
            <Text>平均延迟：</Text>
            <Text>{'N/A'}</Text>
          </View>
        </View>
      </View>
    );

  }
}
