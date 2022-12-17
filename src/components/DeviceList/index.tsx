import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

interface DeviceListProps {
  onPress: () => void;
  deviceName: string;
  deviceId: string;
}

const DeviceList = (props: DeviceListProps) => (
  <TouchableHighlight
    underlayColor={'rgba(40, 40, 40, 0.8)'}
    onPress={props.onPress}>
    <View style={styles.container}>
      <View style={styles.deviceIcon}>
        <Text style={styles.deviceIconTitle}>{props.deviceName[0]}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text numberOfLines={1} style={styles.id}>
          {props.deviceId}
        </Text>
        <Text numberOfLines={1} style={styles.name}>
          {props.deviceName}
        </Text>
      </View>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  deviceIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  deviceIconTitle: {
    color: '#21ba45',
    fontSize: 16,
    fontWeight: '300',
  },
  detailsContainer: {
    justifyContent: 'center',
  },
  id: {
    color: '#F3F3F3',
    fontSize: 18,
  },
  name: {
    color: '#B0B3B8',
    fontSize: 14,
  },
});

export default DeviceList;
