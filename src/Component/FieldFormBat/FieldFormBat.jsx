import React from 'react';
import { TextInput, View, Text } from 'react-native';

import { styles } from './Styles';

export function FieldFormBat(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.textLabel}>{props.label}</Text>
       <TextInput style={styles.textInput} keyboardType={props.type ? props.type : 'default'}/>
    </View>
  );
}