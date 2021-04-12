import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import Login from './src/pages/Login.js';
import SignUp from './src/pages/SignUp.js';
import List from './src/pages/List.js';

export default function App() {
  return (
    <List />
  );
}
