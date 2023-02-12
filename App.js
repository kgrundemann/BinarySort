import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import SortingScreen from "./screens/SortingScreen";
import FibonacciScreen from "./screens/FibonacciScreen";
import PrimeNumbersScreen from "./screens/PrimeNumbersScreen";
import ButtonsGeneratorScreen from "./screens/ButtonsGeneratorScreen";
import StringGeneratorScreen from "./screens/StringGenerator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Sorting"
          component={HomeScreen}
          options={{ title: "Home Screen" }}
        ></Stack.Screen>
        <Stack.Screen
          name="SortingScreen"
          component={SortingScreen}
          options={{ title: "Sorting Screen" }}
        />
        <Stack.Screen
          name="FibonacciScreen"
          component={FibonacciScreen}
          options={{ title: "Fibonacci" }}
        />
        <Stack.Screen
          name="PrimeNumbersScreen"
          component={PrimeNumbersScreen}
          options={{ title: "Prime Numbers" }}
        />
        <Stack.Screen
          name="ButtonsGeneratorScreen"
          component={ButtonsGeneratorScreen}
          options={{ title: "Buttons Generator" }}
        />
        <Stack.Screen
          name="StringGeneratorScreen"
          component={StringGeneratorScreen}
          options={{ title: "String Generator" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
