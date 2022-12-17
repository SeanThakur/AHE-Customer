import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {Svg, Defs, Rect, Mask} from 'react-native-svg';

const QRScanner = ({navigation}: {navigation: any}) => {
  const renderScanFocus = () => (
    <View style={styles.scanFocusContainer}>
      <Svg height={'100%'} width={'100%'}>
        <Defs>
          <Mask id="mask" x="0" y="0" height={'100%'} width={'100%'}>
            <Rect height={'100%'} width={'100%'} fill="#fff" />
            <Rect
              x={'18%'}
              y={'30%'}
              width={'250'}
              height={'250'}
              fill="black"
            />
          </Mask>
        </Defs>
        <Rect
          height={'100%'}
          width={'100%'}
          mask={'url(#mask)'}
          fill="rgba(0,0,0,0.8)"
        />
        <Rect
          x={'18%'}
          y={'30%'}
          width={'250'}
          height={'250'}
          strokeWidth="1"
          stroke={'#FFF'}
        />
      </Svg>
    </View>
  );

  const handleBarcode = (result: any) => {
    if (result.data) {
      navigation.navigate('AddDevices', {deviceID: 'sample ID'});
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.cameraContainer}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        captureAudio={false}
        onBarCodeRead={handleBarcode}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
        {renderScanFocus()}
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  scanFocusContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default QRScanner;
