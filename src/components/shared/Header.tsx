import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface headerProps {
  title?: string;
}

const Header = (props: headerProps) => (
  <View style={[styles.container]}>
    <Image
      style={styles.logo}
      source={require('../../assets/images/ahe-logo.png')}
    />
    {props.title && <Text style={styles.title}>{props.title}</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141414',
    alignItems: 'center',
    padding: 15,
    opacity: 0.8,
    height: 60,
    flexDirection: 'row',
  },
  logo: {
    width: 34,
    height: 34,
    marginRight: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '400',
    color: '#FFF',
  },
});

export default Header;
