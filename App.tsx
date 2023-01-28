import * as React from 'react';
import {LogBox, SafeAreaView, StatusBar} from 'react-native';
import AppRootstack from './src/navigation/AppRootstack';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar backgroundColor='black' barStyle="light-content" />
      <AppRootstack />
    </SafeAreaView>
  );
}

export default App;
