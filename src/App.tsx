import WelcomeKit from '@components/WelcomeKit';
import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

const App = () => (
  <SafeAreaView>
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <WelcomeKit />
    </ScrollView>
  </SafeAreaView>
);

export default App;
