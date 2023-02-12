import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";


const FibonacciScreen = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const calculateFibonacci = (n) => {
    let a = 0,
      b = 1,
      temp;
    for (let i = 0; i < n; i++) {
      temp = a;
      a = b;
      b = temp + b;
    }
    return a;
  };

  const handleSubmit = () => {
    setResult(calculateFibonacci(input));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={input}
        onChangeText={(text) => setInput(text)}
      />
      <Button title="Oblicz" onPress={handleSubmit} />
      <Text style={styles.result}>Wynik: {result}</Text>
    </View>
  );
};

const styles = {
  container: {
    padding: 20,
    alignItems: "center",
  },
  input: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  result: {
    fontSize: 20,
    marginTop: 20,
  },
};

export default FibonacciScreen;
