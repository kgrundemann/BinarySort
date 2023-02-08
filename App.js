import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import CustomButton from "./components/CustomButton";
import BubbleSort from "./functions/BubbleSort";
import BinarySearch from "./functions/BinarySearch";
import QuickSort from "./functions/QuickSort";
import GenerateData from "./functions/GenerateData";
import GetStandardDeviation from "./functions/GetStandardDeviation";

const App = () => {
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

  const runBenchmark = (testFunction) => {
    let runtimes = [];
    for (let i = 0; i < numOfRuns; i++) {
      let start = performance.now();
      testFunction(data);
      let end = performance.now();
      let total = end - start;
      runtimes[i] = total;
    }

    let results = "Results for " + numOfRuns + " runs:\n";
    results += "Max: " + Math.max(...runtimes) + "\n";
    results += "Min: " + Math.min(...runtimes) + "\n";
    results +=
      "Average: " + runtimes.reduce((a, b) => a + b, 0) / numOfRuns + "\n";
    results += "StdDev: " + GetStandardDeviation(runtimes) + "\n";
    setResults(results);
  };

  const handleClear = () => {
    setData([]);
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
          <CustomButton
            buttonColor="#536DFE"
            title="Generate"
            buttonStyle={{ alignSelf: "center" }}
            textStyle={{ fontSize: 20 }}
            onPress={handleAdd}
          />
          <CustomButton
            buttonColor="#536DFE"
            title="BinarySort"
            buttonStyle={{ alignSelf: "center" }}
            textStyle={{ fontSize: 20 }}
            onPress={() => runBenchmark(BinarySearch)}
          />
          <CustomButton
            buttonColor="#536DFE"
            title="BubbleSort"
            buttonStyle={{ alignSelf: "center" }}
            textStyle={{ fontSize: 20 }}
            onPress={() => runBenchmark(BubbleSort)}
          />
          <CustomButton
            buttonColor="#536DFE"
            title="QuickSort"
            buttonStyle={{ alignSelf: "center" }}
            textStyle={{ fontSize: 20 }}
            onPress={() => runBenchmark(QuickSort)}
          />
          <CustomButton
            buttonColor="#536DFE"
            title="Clear"
            buttonStyle={{ alignSelf: "center" }}
            textStyle={{ fontSize: 20 }}
            onPress={handleClear}
          />
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
  },
  input: {
    borderWidth: 1,
    padding: 10,
    width: "60%",
  },
  buttonContainer: {
    flexDirection: "column",
    padding: 10,
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

export default App;
