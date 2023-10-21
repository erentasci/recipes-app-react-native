import "react-native-gesture-handler";
import React, { useEffect } from "react";
import Splash from "./src/screens/Splash";
import Home from "./src/screens/Home";
import Search from "./src/screens/Search";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, Pressable, StyleSheet } from "react-native";
import { getRecipes } from "./src/http/index";

const Stack = createStackNavigator();
export const RecipesContext = React.createContext();

const BackButton = (props) => {
  return (
    <Pressable onPress={props.onPress}>
      <Image style={styles.backIcon} source={require("./assets/back.png")} />
    </Pressable>
  );
};

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#ffffff",
  },
};

export default function App() {
  const [recipes, setRecipes] = React.useState([]);

  const handleRecipesFetch = async () => {
    try {
      const recipes = await getRecipes();
      // console.log("Recipes: ", recipes);
      setRecipes(recipes?.data?.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    handleRecipesFetch();
  }, []);

  return (
    <RecipesContext.Provider value={{ recipes, setRecipes }}>
      <NavigationContainer theme={Theme}>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: "center",
            headerShadowVisible: false,
          }}>
          <Stack.Screen
            name={"Splash"}
            component={Splash}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={"Home"}
            component={Home}
            options={{
              headerLeft: null,
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name={"Search"}
            component={Search}
            style
            options={{
              headerLeft: (props) => <BackButton {...props} />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RecipesContext.Provider>
  );
}

const styles = StyleSheet.create({
  backIcon: {
    width: 20,
    height: 20,
    margin: 10,
    objectFit: "contain",
  },
});
