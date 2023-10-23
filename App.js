import "react-native-gesture-handler";
import React, { useEffect } from "react";
import Splash from "./src/screens/Splash";
import Home from "./src/screens/Home";
import Search from "./src/screens/Search";
import RecipeDetails from "./src/screens/RecipeDetails";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, Pressable, StyleSheet } from "react-native";
import { getRecipes } from "./src/http/index";

const Stack = createStackNavigator();
export const RecipesContext = React.createContext();
export const HealthyRecipesContext = React.createContext();

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
  const [healthyRecipes, setHealthyRecipes] = React.useState([]);

  useEffect(() => {
    (async () => {
      const rec = await handleRecipesFetch(null, 15);
      setRecipes(rec);
      const healthyRec = await handleRecipesFetch("healthy", 5);
      setHealthyRecipes(healthyRec);
    })();
  }, []);

  const handleRecipesFetch = async (tags, size) => {
    try {
      const recipes = await getRecipes(tags, size);
      return recipes.data.results;
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <HealthyRecipesContext.Provider
      value={{
        healthyRecipes,
        setHealthyRecipes,
      }}>
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
            <Stack.Screen
              name="RecipeDetails"
              component={RecipeDetails}
              options={{
                headerLeft: (props) => <BackButton {...props} />,
                title: "",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </RecipesContext.Provider>
    </HealthyRecipesContext.Provider>
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
