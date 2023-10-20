import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {AuthProvider} from './src/components/AuthContext';
import Navigation from './src/components/navigation';

export default function App() {
  return (
    <AuthProvider>
      <StatusBar backgroundColor="#06bcee" />
      <Navigation />
    </AuthProvider>
  );
};