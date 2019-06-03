/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';


type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props);
    this.state = {
      altura: 0,
      massa: 0,
      resultado: 0,
      resultadoText: '',
    };

    this.calcular = this.calcular.bind(this);
  }

  calcular(){
    let s = this.state
    let imc = s.massa / (s.altura * s.altura)
    s.resultado = imc

    if(imc < 16){
      s.resultadoText = 'Magreza Grave'
    }
    else if(imc < 17){
      s.resultadoText = 'Magreza Moderada'
    }
    else if(imc < 18.5){
      s.resultadoText = 'Magreza Leve'
    }
    else if(imc <= 25){
      s.resultadoText = 'Saudável'
    }
    else if(imc <= 30){
      s.resultadoText = 'Sobrepeso'
    }
    else if(imc <= 35){
      s.resultadoText = 'Obesidade Grau I'
    }
    else if(imc <= 40){
      s.resultadoText = 'Obesidade Grau III'
    }
    else{
      s.resultadoText = 'Obesidade Grau III'
    }

    this.setState(s)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.entradas}>
          <TextInput
            placeholder="Massa"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(massa) => {this.setState({massa})}}
          />

          <TextInput
            placeholder="Altura"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(altura) => {this.setState({altura})}}
          />
        </View>
        <TouchableOpacity
          style={styles.botao}
          onPress={this.calcular}
        >
          <Text style={styles.textBotao}>Calcular</Text>
        </TouchableOpacity>

        <Text style={styles.textResultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.textResultado, {fontSize: 35}]}>{this.state.resultadoText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },

  entradas:{
    flexDirection: 'row',
  },

  input: {
    height: 80,
    textAlign: "center",
    width: "50%",
    fontSize: 50,
    marginTop: 24
  },

  botao: {
    backgroundColor: 'gray',
  },
  
  textBotao: {
    padding: 30,
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#F5FCFF',
  },

  textResultado: {
    alignSelf: "center",
    fontSize: 60,
    padding: 15,
  },
});
