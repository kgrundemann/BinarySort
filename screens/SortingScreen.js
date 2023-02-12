import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import BubbleSort from "../functions/BubbleSort";
import InsertionSort from "../functions/InsertionSort";
import QuickSort from "../functions/QuickSort";
import GenerateData from "../functions/GenerateData";
import { runBenchmark } from "../functions/Benchmark";

const SortingScreen = () => {
  const [data, setData] = useState([]);
  const [numElements, setNumElements] = useState(0);
  const [numOfRuns, setNumOfRuns] = useState(0);
  const [results, setResults] = useState("");

  const handleNumElements = (text) => {
    setNumElements(text);
  };

  const handleAdd = () => {
    setData(GenerateData(numElements));
  };

  const handleClear = () => {
    setData([]);
    setResults("");
  };

  const handleBenchmark = (testFunction) => {
    const { results, sortedData } = runBenchmark(testFunction, data, numOfRuns);
    setResults(results);
    setData(sortedData);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={numElements}
          onChangeText={handleNumElements}
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
        <View style={styles.buttonContainer}>
          <Button style={styles.button} title="Generate" onPress={handleAdd} />
          <Button
            style={styles.button}
            title="InsertionSort"
            onPress={() => handleBenchmark(InsertionSort)}
          />
          <Button
            style={styles.button}
            title="BubbleSort"
            onPress={() => handleBenchmark(BubbleSort)}
          />
          <Button
            style={styles.button}
            title="QuickSort"
            onPress={() => handleBenchmark(QuickSort)}
          />
          <Button style={styles.button} title="Clear" onPress={handleClear} />
        </View>
      </View>
      <View style={styles.outputContainer}>
        <Text style={styles.result}>{results}</Text>
        {data.map((item, index) => (
          <Text key={index} style={styles.output}>
            {item}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 20,
  },
  inputContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: "60%",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "column",
    padding: 10,
  },
  button: {
    fontSize: 20,
    alignSelf: "center",
  },
  outputContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 20,
    textAlign: "center",
  },
  result: {
    padding: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  output: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    width: "15%",
    textAlign: "center",
  },
});

export default SortingScreen;
