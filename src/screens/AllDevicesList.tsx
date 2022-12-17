import DeviceList from '@components/DeviceList';
import Header from '@components/shared/Header';
import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';

const AllDeviceList = ({navigation}: {navigation: any}) => {
  const onListClick = () => {
    navigation.navigate('ViewSites');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Devices" />
      <FlatList
        ItemSeparatorComponent={({highlighted}) => (
          <View style={[styles.separator, highlighted && styles.ml]} />
        )}
        keyExtractor={item => item.id}
        data={[
          {title: 'Title Text', id: 'item1'},
          {title: 'Title Text', id: 'item2'},
          {title: 'Title Text', id: 'item3'},
        ]}
        renderItem={({item}) => (
          <DeviceList
            onPress={onListClick}
            deviceId={item.id}
            deviceName={item.title}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a1a1a',
    flex: 1,
  },
  separator: {
    borderWidth: 0.2,
    borderColor: '#404040',
  },
  ml: {
    marginLeft: 0,
  },
});

export default AllDeviceList;
