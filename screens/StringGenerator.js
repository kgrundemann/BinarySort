import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
} from "react-native";
import { runBenchmark } from "../functions/Benchmark";
import generateString from "../functions/GenerateString";
import reverseString from "../functions/ReverseString";

const StringGeneratorScreen = () => {
  const [stringLength, setStringLength] = useState(0);
  const [generatedString, setGeneratedString] = useState("");
  const [numOfRuns, setNumOfRuns] = useState(0);
  const [results, setResults] = useState("");

  const handleGenerate = () => {
    setGeneratedString(generateString(stringLength));
  };

  const handleBenchmark = () => {
    const { results, sortedData } = runBenchmark(
      reverseString,
      generatedString,
      numOfRuns
    );
    setResults(results);
    setGeneratedString(sortedData);
  };

  const clearString = () => {
    setStringLength(0);
    setGeneratedString("");
    setResults("");
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          onChangeText={(text) => setStringLength(parseInt(text))}
          value={stringLength.toString()}
          placeholder="Enter string length"
        />
        <TextInput
          value={numOfRuns}
          onChangeText={setNumOfRuns}
          placeholder="Enter number of runs for test"
          keyboardType="number-pad"
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <Button onPress={handleGenerate} title="Generate String" />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={handleBenchmark} title="Reverse String" />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={clearString} title="Clear" />
        </View>
        <Text style={styles.result}>{results}</Text>
        <Text style={styles.result}>{generatedString}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    padding: 20,
    alignItems: "center",
  },
  input: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 10,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  result: {
    fontSize: 20,
    marginVertical: 10,
  },
});

export default StringGeneratorScreen;
