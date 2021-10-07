import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

export default function Resultado(props) {
  return (
    <View style={styles.resultado}>
      <Text style={styles.textMensagem}>{props.mensagem}</Text>
        <Text style={styles.textResultado}>{props.resultado}</Text>

    </View>
  );
}