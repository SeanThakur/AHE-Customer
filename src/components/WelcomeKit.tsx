import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const WelcomeKit = () => (
  <View style={styles.container}>
    <Text style={styles.highlight}>Elina Customer Application</Text>
  </View>
);

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WelcomeKit;
