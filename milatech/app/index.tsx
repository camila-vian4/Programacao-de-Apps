import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function App(){
  return (
    <View style = {estilo.container}>
    <Text style ={estilo.titulo}>Tela de Login</Text>
    <TextInput style = {estilo.campoTexto}
    placeholder= "Digite sua senha"
    />

    <Button title = "Entrar">
    </Button>

    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    shadowColor: '#4e4e4eff',
    padding: 10,
    margin: 5, // Margem em todos os lados


  },
  titulo: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#2e2e2eff',


  },
  campoTexto: {
    borderColor: '#c7c7c7ff',
    width: '90%',
    borderWidth: 2,
    borderRadius: 50,
    backgroundColor: '#f0f0f094',
    padding: 15,
    color: '#020202ff',
    fontSize: 15,
    margin: 18,

  },

  botoes: {
    backgroundColor: '#f0ff1dff', // Azul padrão
    width: '30%',
    paddingVertical: 12, // Espaço interno vertical
    paddingHorizontal: 20, // Espaço interno horizontal
    borderRadius: 20, // Cantos arredondados
    alignItems: 'center', // Centraliza conteúdo
    justifyContent: 'center', // Centraliza verticalmente
  },


  botoesText: {
    color: '#020202ff', // Texto branco
    fontSize: 16, // Tamanho da fonte
    fontWeight: '600', // Peso seminegrito
    textTransform: 'uppercase', // Texto em maiúsculas
    letterSpacing: 1, // Espaçamento entre letras
  },


}
);