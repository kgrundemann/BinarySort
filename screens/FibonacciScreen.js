import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { runBenchmark } from "../functions/Benchmark";
import calculateFibonacci from "../functions/Fibonacci";

const FibonacciScreen = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const [numOfRuns, setNumOfRuns] = useState(0);
  const [results, setResults] = useState("");

  const handleBenchmark = () => {
    const { results, sortedData } = runBenchmark(
      calculateFibonacci,
      input,
      numOfRuns
    );
    setResults(results);
    setResult(sortedData);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Enter number"
        keyboardType="number-pad"
        style={styles.input}
      />
      <TextInput
        value={numOfRuns}
        onChangeText={setNumOfRuns}
        placeholder="Enter number of runs"
        keyboardType="number-pad"
        style={styles.input}
      />
      <Button title="Calculate" onPress={handleBenchmark} />
      <Text style={styles.result}>{results}</Text>
      <Text style={styles.result}>Result: {result}</Text>
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
