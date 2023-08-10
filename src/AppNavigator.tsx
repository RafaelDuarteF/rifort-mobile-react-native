import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InicialScreen from './screens/initial/InicialScreen';
import ApplicationScreen from './screens/application/ApplicationScreen';
import ProjetoScreen from './screens/projeto/ProjetoScreen';
import ContatoScreen from './screens/contato/ContatoScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Initial">
        <Stack.Screen options={{ headerShown: false }} name="Initial" component={InicialScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Application" component={ApplicationScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Projeto" component={ProjetoScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Contato" component={ContatoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}