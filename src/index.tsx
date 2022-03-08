import 'react-native-gesture-handler';

import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Home from './screens/Home';
import { StatusBar } from 'react-native';

const App: React.FC = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="whitesmoke" />
      <Home />
    </GestureHandlerRootView>
  );
};

export default App;
