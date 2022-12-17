import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddDevice from './screens/AddDevice';
import QRScanner from './screens/QRScanner';
import AllDeviceList from './screens/AllDevicesList';
import EmptyDeviceList from './screens/EmptyDevice';
import ViewSites from './screens/ViewSites';

const App = () => {
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="EmptyDevice"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="AddDevices" component={AddDevice} />
        <Stack.Screen name="QRScanner" component={QRScanner} />
        <Stack.Screen name="Home" component={AllDeviceList} />
        <Stack.Screen name="EmptyDevice" component={EmptyDeviceList} />
        <Stack.Screen name="ViewSites" component={ViewSites} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
