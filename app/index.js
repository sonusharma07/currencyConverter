import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

EStyleSheet.build({
  $primaryBlue: '#00ffef',
  $white: '#ffffff',
  $border: '#E2E2E2',
  $lightGrey: '#F0F0F0',
  $inputText: '#797979',
  // $outline: 1,
});

export default () => <Home />