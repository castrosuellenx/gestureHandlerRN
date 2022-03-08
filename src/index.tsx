import 'react-native-gesture-handler';

import React from 'react';
import {View, Text} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App: React.FC = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <GestureHandlerRootView style={{flex: 1}}>
      <View>
        <Text>Hello Word</Text>
      </View>
    </GestureHandlerRootView>
  );
};

export default App;
