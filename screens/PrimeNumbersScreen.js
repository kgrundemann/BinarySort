import React, { useState } from "react";
import { Text, TextInput, Button, StyleSheet, ScrollView } from "react-native";
import calculatePrimeNumbers from "../functions/PrimeNumbers";
import { runBenchmark } from "../functions/Benchmark";

const PrimeNumbersScreen = () => {
  const [numElements, setNumElements] = useState(0);
  const [result, setResult] = useState([]);
  const [results, setResults] = useState("");
  const [numOfRuns, setNumOfRuns] = useState(0);

  const handleBenchmark = () => {
    const { results, sortedData } = runBenchmark(
      calculatePrimeNumbers,
      numElements,
      numOfRuns
    );
    setResults(results);
    setResult(sortedData);
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        value={numElements}
        onChangeText={setNumElements}
        placeholder="Enter number of elements"
        keyboardType="number-pad"
        style={styles.input}
      />
      <TextInput
        value={numOfRuns}
        onChangeText={setNumOfRuns}
        placeholder="Enter number of runs for test"
        keyboardType="number-pad"
        style={styles.input}
      />
      <Button title="Generate Prime Numbers" onPress={handleBenchmark} />
      <Text style={styles.result}>{results}</Text>
      <Text style={styles.result}>{result.join(", ")}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 20,
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
