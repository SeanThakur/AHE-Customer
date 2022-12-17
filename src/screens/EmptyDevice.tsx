import AppButton from '@components/shared/AppButton';
import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';

const EmptyDeviceList = ({navigation}: {navigation: any}) => {
  const onPress = () => {
    navigation.navigate('QRScanner');
  };
  return (
    <SafeAreaView style={styles.emptyBody}>
      <View style={styles.emptyContainer}>
        <View style={styles.emptyIcon}>
          <Image
            style={styles.Icon}
            source={require('../assets/images/empty-doc.png')}
          />
        </View>
        <AppButton title="Add Device" onPress={onPress} style={styles.button} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  emptyBody: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1a1a1a',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyIcon: {
    borderRadius: 200,
    width: 250,
    height: 250,
    borderWidth: 0.3,
    borderColor: '#474b4f',
    padding: 24,
    marginBottom: 24,
    backgroundColor: '#2a2f2f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Icon: {
    width: 200,
    height: 200,
  },
  button: {
    width: 200,
  },
});

export default EmptyDeviceList;
