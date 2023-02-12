import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const PrimeNumbersScreen = () => {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState([]);

  const calculatePrimeNumbers = () => {
    let primes = [];
    let num = 2;

    while (primes.length < count) {
      let isPrime = true;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes.push(num);
      }
      num++;
    }
    setResult(primes);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.inputLabel}>
        Enter the number of prime numbers you want to generate:
      </Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        onChangeText={(text) => setCount(Number(text))}
        value={count.toString()}
      />
      <Button title="Generate Prime Numbers" onPress={calculatePrimeNumbers} />
      <Text style={styles.result}>{result.join(", ")}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
  },
  result: {
    fontSize: 16,
    marginTop: 20,
  },
});

export default PrimeNumbersScreen;
