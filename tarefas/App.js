import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState(''); 

function handleSubmit(){
  const alt = altura / 100;
  const imc = peso / (alt * alt);
  //alert(imc);

  if(imc < 18.5){
    alert('Voce esta abaixo do peso! ' + '\n Seu IMC é: ' + imc.toFixed(2));
  }else if(imc >= 18.6  && imc < 24.9){
    alert('Seu peso esta Ideal! ' + '\n Seu IMC é: ' + imc.toFixed(2));
  }else if(imc >= 24.9 && imc <= 29.9){
    alert('Voce esta com Sobrepeso! ' + '\n Seu IMC é: ' + imc.toFixed(2));
  }else if(imc >= 30.0 && imc <= 34.9){
    alert('Voce esta com Obesidade (Grau I)! ' + '\n Seu IMC é: ' + imc.toFixed(2));
  }else if(imc >= 35.0 && imc <= 39.9){
    alert('Voce esta com Obesidade Severa (Grau II)! ' + '\n Seu IMC é: ' + imc.toFixed(2));
  }
  else{
    alert('Voce esta com Obesidade Mórbida (Grau III)! ' + '\n Seu IMC é: ' + imc.toFixed(2));
  }
}

  return(
    <View style={styles.container}>
      
      <Text style={styles.title}> Calcule seu IMC </Text>

      <TextInput style={styles.input} 
      value={peso} 
      onChangeText={ (peso) => setPeso(peso) }
      placeholderTextColor="#FFF"
      placeholder="Peso (kg)"
      keyboardType='numeric'
      />
      <TextInput style={styles.input} 
      value={altura} 
      onChangeText={ (altura) => setAltura(altura) }
      placeholderTextColor="#FFF" 
      placeholder="Altura (cm)"
      keyboardType='numeric'
      />

      <TouchableOpacity style={styles.touch}
      onPress={handleSubmit}
      >
        <Text style={styles.buttonText}
        >Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
  },
  title: {
    textAlign: 'center',
    marginTop: 25,
    fontSize: 30,
  },
  input: {
    backgroundColor: '#121212',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#fff',
    fontSize: 23,
  },
  touch: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#41Aef4',
    padding: 10,
  },
  touchText: {
    color: '#FFF',
    fontSize: 25,
  }

});