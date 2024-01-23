import React from 'react';
import { View, Image} from 'react-native';

import { styles } from './Styles';

import batLogo from '../../../assets/LOGO_BAT.jpg';

export function Home() {
  return (
    <View style={styles.container}>
        <Image source={batLogo}/>
    </View>
  );
}