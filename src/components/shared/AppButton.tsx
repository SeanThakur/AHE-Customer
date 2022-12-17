import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';

interface AppButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}

const AppButton = (props: AppButtonProps) => (
  <TouchableOpacity
    onPress={props.onPress}
    style={[styles.container, props.style]}>
    <Text style={styles.title}>{props.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#21ba45',
    alignItems: 'center',
    padding: 8,
    width: '100%',
    borderRadius: 4,
  },
  title: {
    fontWeight: '500',
    fontSize: 18,
  },
});

export default AppButton;
