import * as React from 'react';
import { View, SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import AppNavigator from './src/AppNavigator';
import theme from './src/theme';

export default function App() {
  return (  
    <SafeAreaView style={{flex: 1}}>
      <ThemeProvider theme={theme}>
        <View style={{flex: 1}}>
          <AppNavigator />
        </View>
      </ThemeProvider>
    </SafeAreaView>
  );
}
