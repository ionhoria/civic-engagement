import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  statusBar: {
    height: Constants.statusBarHeight,
    backgroundColor: 'black',
  },
});

const StatusBar = () => {
  return <View style={styles.statusBar} />;
};

export default StatusBar;
