import React from 'react';
import { StyleSheet, View } from 'react-native';
import Principal from './src/components/principal';
import Titulo from './src/components/titulo';

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo/>
      <Principal/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c0c0c0',
    paddingTop: 100,
  },
});
