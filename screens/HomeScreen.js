import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Navigate to Sorting Screen"
          onPress={() => navigation.navigate("SortingScreen")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Navigate to Fibonacci Screen"
          onPress={() => navigation.navigate("FibonacciScreen")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Navigate to Prime Numbers Screen"
          onPress={() => navigation.navigate("PrimeNumbersScreen")}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  button: {
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
});
