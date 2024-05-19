import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./pages/homePage/homePage";
import CurriculoPage from "./pages/curriculoPage/curriculoPage";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ title: 'Bem-vindo' }} component={HomePage} />
        <Stack.Screen name="Curriculo" options={{ title: 'Meu Currículo' }} component={CurriculoPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;