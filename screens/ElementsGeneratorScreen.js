import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TextInput,
} from "react-native";
import { RadioButton } from "react-native-paper";
import { runBenchmark } from "../functions/Benchmark";

const ElementsGeneratorScreen = () => {
  const [quantity, setQuantity] = useState(0);
  const [selectedOption, setSelectedOption] = useState("buttons");
  const [shouldGenerate, setShouldGenerate] = useState(false);
  const [numOfRuns, setNumOfRuns] = useState(0);
  const [results, setResults] = useState("");

  const handleClearPress = () => {
    setShouldGenerate(false);
    setQuantity(0);
    setResults("");
  };

  const handleBenchmark = () => {
    const { results } = runBenchmark(setShouldGenerate, true, numOfRuns);
    setResults(results);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter the number of items"
        keyboardType="number-pad"
        onChangeText={(text) => setQuantity(parseInt(text) || 0)}
        value={quantity.toString()}
      />
      <TextInput
        value={numOfRuns}
        onChangeText={setNumOfRuns}
        placeholder="Enter number of runs for test"
        keyboardType="number-pad"
        style={styles.input}
      />
      <View style={styles.buttonsContainer}>
        <RadioButton.Group
          onValueChange={(value) => setSelectedOption(value)}
          value={selectedOption}
        >
          <View style={styles.radioButton}>
            <Text>Buttons</Text>
            <RadioButton value="buttons" />
          </View>
          <View style={styles.radioButton}>
            <Text>Rows</Text>
            <RadioButton value="rows" />
          </View>
          <View style={styles.radioButton}>
            <Text>Table</Text>
            <RadioButton value="table" />
          </View>
        </RadioButton.Group>
      </View>
      <Text style={styles.result}>{results}</Text>
      <View style={styles.buttonsContainer}>
        <Button
          style={styles.generateButton}
          title="Generate"
          onPress={handleBenchmark}
        />
        <Button
          style={styles.clearButton}
          title="Clear"
          onPress={handleClearPress}
        />
      </View>
      {shouldGenerate && (
        <ScrollView style={styles.scrollView}>
          {Array.from({ length: quantity }, (_, index) => {
            switch (selectedOption) {
              case "buttons":
                return (
                  <Button
                    key={index}
                    title={`Button ${index + 1}`}
                    style={styles.button}
                  />
                );
              case "rows":
                return (
                  <View key={index} style={styles.row}>
                    <Text>Row {index + 1}</Text>
                  </View>
                );
              case "table":
                return (
                  <View key={index} style={styles.tableRow}>
                    <Text>Table Row {index + 1}</Text>
                  </View>
                );
              default:
                return null;
            }
          })}
        </ScrollView>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 20,
    borderColor: "gray",
    borderWidth: 1,
  },
  picker: {
    width: "100%",
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  generateButton: {
    width: "45%",
  },
  clearButton: {
    width: "45%",
  },
  scrollView: {
    width: "100%",
    height: "60%",
  },
  button: {
    marginVertical: 10,
  },
  row: {
    width: "100%",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    alignItems: "center",
  },
  tableRow: {
    width: "100%",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ElementsGeneratorScreen;
