import "react-native-gesture-handler";
import Splash from "./src/screens/Splash";
import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Splash"}
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name={"Home"} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
