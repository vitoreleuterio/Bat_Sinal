import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './Styles';
import { FieldFormBat } from '../../Component/FieldFormBat/FieldFormBat';
import batLogo from '../../../assets/LOGO_BAT.jpg';

export function FormUser() {
  return (
    <View style={styles.container} >
        <Image source={batLogo} style={{width: 100, height: 100, marginHorizontal: 10}}/>
      <FieldFormBat label={'Nome'} />
      <FieldFormBat  label={'Endereço'} />
      <FieldFormBat label={'Telefone'} type={'numeric'}/>
      <FieldFormBat label={'Data de Nascimento'} type={'numeric'}/>
      <FieldFormBat label={'Biografia'}/>
    </View>
  );
}