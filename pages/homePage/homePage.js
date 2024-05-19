import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomePage = () => {
  const navigation = useNavigation();

  const goToCurriculoPage = () => {
    navigation.navigate("Curriculo");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/eu.png")} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Samuel Muniz</Text>
        <Text style={styles.text}>Idade: 22</Text>
        <Text style={styles.text}>Ocupação: Desenvolvedor frontend</Text>
        <Text style={styles.text}>Experiência: 1 ano de experiência...</Text>
      </View>
      <TouchableOpacity onPress={goToCurriculoPage} style={styles.button}>
        <Text style={styles.buttonText}>Ver Currículo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  textContainer: {
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    marginVertical: 2,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#007bff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default HomePage;
