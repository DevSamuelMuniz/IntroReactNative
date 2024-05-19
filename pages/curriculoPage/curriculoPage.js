import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CurriculoPage = () => {

  const Linkedin=()=>{
    window.location.href = 'https://www.linkedin.com/in/samuel-muniz-4b5a3126a/'
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aqui está o meu currículo!</Text>
      <TouchableOpacity style={styles.button} onPress={Linkedin}>
        <Text style={styles.textLink}> Clique e veja meu Linkedin</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#007bff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  textLink: {
    color: 'white',
    fontSize: 20
  }
});

export default CurriculoPage;
