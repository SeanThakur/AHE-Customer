import Header from '@components/shared/Header';
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const ViewSites = () => (
  <SafeAreaView style={[styles.container]}>
    <Header title="View Sites" />
    <Text style={styles.title}>View Sites</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  title: {
    alignSelf: 'center',
    padding: 20,
  },
});

export default ViewSites;
