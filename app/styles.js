import { StyleSheet } from 'react-native';

const { create } = StyleSheet;

const bgColor = '#135790';

const styles = create({
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
    width: '80%',
    backgroundColor: bgColor,
  },
});

export default styles;
