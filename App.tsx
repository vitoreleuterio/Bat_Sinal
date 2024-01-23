import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Home } from './src/Screen/Home/Home';
import { useState } from 'react';
import { FormUser } from './src/Screen/FormUser/FormUser';

export default function App() {
  const [screen, setScreen] = useState('home');
  return (
    <View style={styles.container}>
      {
      screen == 'home' ? 
      <>
       <Home/> 
       <TouchableOpacity onPress={() => setScreen("form")} style={styles.button}>
       <Text style={styles.buttonText}>Ativar</Text>
      </TouchableOpacity>
      </> 
      
       : <>
       <FormUser/>
       <TouchableOpacity onPress={() => setScreen("home")} style={styles.button}>
       <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
       </> 
      }
    
      <StatusBar style='dark'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 3,
    paddingHorizontal: 8, 
    paddingVertical: 10,
    width: '70%'
  },
  buttonText: {
  color: '#fff', 
  fontSize: 15, 
  textAlign: 'center',
  fontWeight: '700'
  }
});
