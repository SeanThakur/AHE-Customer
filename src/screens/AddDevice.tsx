/* eslint-disable react/prop-types */
import AppButton from '@components/shared/AppButton';
import React, {useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';

const AddDevice = ({navigation}: {navigation: any}, {route}: {route: any}) => {
  const [deviceName, setDeviceName] = useState('');
  const {deviceID} = route.params;

  const onDeviceSubmit = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.logo}
          source={require('../assets/images/ahe-logo.png')}
        />
        <Text style={styles.title}>ADD Device</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={'ID'}
            value={deviceID ? deviceID : ''}
            autoCorrect={false}
            autoCapitalize={'none'}
            editable={false}
          />
          <TextInput
            style={styles.input}
            placeholder={'Name'}
            value={deviceName}
            onChangeText={setDeviceName}
            autoCorrect={false}
            autoCapitalize={'none'}
          />
        </View>
        <AppButton title={'Submit'} onPress={onDeviceSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#242323',
  },
  card: {
    borderRadius: 10,
    borderColor: '#242424',
    borderWidth: 1,
    overflow: 'hidden',
    backgroundColor: '#1a1a1a',
    width: '80%',
    minWidth: 250,
    alignItems: 'center',
    padding: 18,
  },
  logo: {
    width: 65,
    height: 65,
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    marginBottom: 26,
    fontWeight: '500',
    letterSpacing: 1,
  },
  inputContainer: {
    flexDirection: 'column',
    width: '100%',
    marginBottom: 18,
  },
  input: {
    padding: 8,
    borderWidth: 0.3,
    borderColor: '#000',
    backgroundColor: '#454545',
    borderRadius: 3,
    marginVertical: 5,
  },
});

export default AddDevice;
