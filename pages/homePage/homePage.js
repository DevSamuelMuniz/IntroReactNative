import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/eu.png")} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Samuel Muniz</Text>
        <Text style={styles.text}>Idade: 22</Text>
        <Text style={styles.text}>Ocupação: Desenvolvedor frontend</Text>
        <Text style={styles.text}>Experiência: 1 ano de experiência...</Text>
      </View>
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
});

export default HomePage;
