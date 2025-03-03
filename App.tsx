import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '~/screens';

import './global.css';

export default function App() {
  return (
    <NavigationContainer>
      <Home />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
