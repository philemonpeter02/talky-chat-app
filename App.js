import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as PaperProvider} from 'react-native-paper';
import RootStack from './src/navigation/RootStack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          <RootStack />
        </GestureHandlerRootView>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
